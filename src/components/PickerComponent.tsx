import React from "react";
import "./PickerComponent.css";

interface PickerProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

interface PickerState {
  open: boolean;
}

class PickerComponent extends React.Component<PickerProps, PickerState> {
  state = {
    open: false,
  };

  toggleOpen = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  handleOptionClick = (value: string) => {
    this.props.onChange(value);
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="picker">
        <div className="picker__selected" onClick={this.toggleOpen}>
          {this.props.selected}
        </div>
        {this.state.open && (
          <div className="picker__options">
            {this.props.options.map((option) => (
              <div
                key={option}
                className="picker__option"
                onClick={() => this.handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default PickerComponent;
