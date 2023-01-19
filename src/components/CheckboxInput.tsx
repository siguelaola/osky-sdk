import React from "react";
import Line from "./Line";
import "./CheckboxInput.css";

interface ToggleCheckboxProps {
  title: string;
  labelPosition: "left" | "right"
}

interface ToggleCheckboxState {
  checked: boolean;
}

class CheckboxInput extends React.Component<
  ToggleCheckboxProps,
  ToggleCheckboxState
> {
  state = {
    checked: false,
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prevState) => ({
      checked: !prevState.checked,
    }));
  };

  render() {
    return (
        //    flex-direction: row-reverse; invert order
        <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <div style={{ display: "flex", width: "100%", flexDirection: this.props.labelPosition === "left" ? "row" : "row-reverse" }}>
        <div className="checkbox-title">{this.props.title}</div>
        <div className="checkbox" style={{ display: "inline-block" }}>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange}
          />
          <label />
        </div>
      </div>
      <Line color="#F2F2F7" height={1}/>
      </div>
    );
  }
}

export default CheckboxInput;
