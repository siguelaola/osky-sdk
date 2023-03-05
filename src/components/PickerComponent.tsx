import React from "react";
import { PickerBlockData } from "../interfaces/types";
import { ComponentProps } from "./ScreenComponent";
import "./css/PickerComponent.css";

interface PickerState {
  open: boolean;
  value: string;
}

class PickerComponent extends React.Component<ComponentProps, PickerState> {
  config: PickerBlockData;

  constructor(props: ComponentProps) {
    super(props);

    this.config = this.props.data as PickerBlockData;

    this.state = {
      open: false,
      value: this.config.title,
    };
  }

  componentDidMount() {
    this.props.onChange(this.props.id, "", false);
  }

  toggleOpen = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  onClick = (value: string) => {
    this.props.onChange(this.props.id, value, true);

    this.setState({
      open: false,
      value: value,
    });
  };

  render() {
    return (
      <div className="picker-container">
        <div className="picker-selected" onClick={this.toggleOpen}>
          {this.state.value}
        </div>
        {this.state.open && (
          <div className="picker-items">
            {this.config?.items.map((option) => (
              <div
                key={option.id}
                className="picker-option"
                onClick={() => this.onClick(option.text)}
              >
                {option.text}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default PickerComponent;
