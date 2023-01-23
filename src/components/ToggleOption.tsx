import React, { MouseEventHandler, MouseEvent } from "react";
import LabelField from "./old/LabelField";
import "./ToggleOption.css";

interface IToggleOption {
  title: string;
  options: string[];
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

  onSelect = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    e.preventDefault();
    this.setState({
        selected: index
    })
  };

  renderChoice = (item: string, index: number) => {
    return (
      <button key={index}
        className={`option ${index === this.state.selected ? "selected" : ""}`}
        onClick={(e) => { this.onSelect(e, index) }}>
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
