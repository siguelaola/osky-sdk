import React from "react";
import LabelField from "./css/LabelField";
import { ComponentProps } from "./ScreenComponent";
import { ToggleOptionBlockData } from "../interfaces/types";
import "./css/ToggleOption.css";

export default class ToggleOption extends React.Component<
  ComponentProps,
  {
    selected: string | undefined;
  }
> {
  state = {
    selected: undefined,
  };

  config: ToggleOptionBlockData;

  constructor(props: ComponentProps) {
    super(props);

    this.config = props.data as ToggleOptionBlockData;

    this.state = {
        selected: undefined
    };
  }

  componentDidMount() {
    this.props.onChange(this.props.id, null, false);
  }

  onSelect = (id: string, title: string) => {
    this.props.onChange(this.props.id, title, true);

    this.setState({ selected: id });
  };

  renderChoice = (id: string, title: string) => {
    const isSelected = id === this.state.selected;

    return (
      <button
        key={id}
        className={`option ${isSelected ? "selected" : ""}`}
        onClick={() => {
          this.onSelect(id, title);
        }}
      >
        {title}
      </button>
    );
  };

  render() {
    return (
      <div className="">
        <LabelField
          className={""}
          label={this.config.title}
          key={this.props.id}
        />
        <div className="option-choice-container">
          {this.config.items.map((item, index) =>
            this.renderChoice(item.id, item.title)
          )}
        </div>
      </div>
    );
  }
}
