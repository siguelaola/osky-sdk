import { timeStamp } from "console";
import React, { MouseEventHandler, MouseEvent } from "react";
import LabelField from "./css/LabelField";
import "./css/ToggleOption.css";

interface IToggleOption {
  id: string;
  title: string;
  options: string[];
  onChange: (key: string, value: boolean) => void;
}

// interface

export default class ToggleOption extends React.Component<
  IToggleOption,
  {
    selected: number;
  }
> {
  state = {
    selected: 0,
  };

  componentDidMount() {
    this.props.onChange(this.props.id, true)
  }

  onSelect = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    e.preventDefault();

    this.props.onChange(this.props.id, index === 0)

    this.setState({
        selected: index
    })
  };

  renderChoice = (item: string, index: number) => {

    const isSelected = index === this.state.selected

    return (
      <button key={index}
        className={`option ${isSelected ? "selected" : ""}`}
        onClick={(e) => { 
            this.onSelect(e, index);
        }}>
        {item}
      </button>
    );
  };

  render() {
    const { title, options } = this.props;

    return (
      <div className="">
        <LabelField className={""} label={title} key={title} />
        <div className="option-choice-container">
          {options.map((item, index) => this.renderChoice(item, index))}
        </div>
      </div>
    );
  }
}
