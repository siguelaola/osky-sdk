import React from "react";
import {
  CheckboxBlockData,
  EmptyBlockData,
} from "../interfaces/types";
import "./css/CheckboxInput.css";
import LineComponent from "./LineComponent";

interface ToggleCheckboxState {
  checked: boolean;
}

interface CheckboxInputProps {
    onClick: (id: string, checked: boolean) => void
}

class CheckboxInput extends React.Component<
  CheckboxBlockData & CheckboxInputProps,
  ToggleCheckboxState
> {
  state = {
    checked: this.props.checked,
  };

  componentDidMount() {
    this.props.onClick(this.props.id, this.state.checked)
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onClick(this.props.id, !this.state.checked)

    this.setState((prevState) => ({
      checked: !prevState.checked,
    }));
  };

  render() {
    const data: EmptyBlockData = {};
    return (
      <>
        <div style={{ display: "flex", width: "100%", flexDirection: "row" }}>
          <div className="checkbox-title">{this.props.text}</div>
          <div className="checkbox" style={{ display: "inline-block" }}>
            <input
              type="checkbox"
              checked={this.state.checked}
              onChange={this.handleChange}
            />
            <label />
          </div>
        </div>
        <LineComponent id={this.props.id+"Line"} data={data} onChange={(event) => {}} />
      </>
    );
  }
}

export default CheckboxInput