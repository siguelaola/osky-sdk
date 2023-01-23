import React from "react";
import "./PickerComponent.css";

interface PickerProps {
  options: string[];
  placeholder?: string;
  onChange: (value: string, isValid: boolean) => void;
}

interface PickerState {
  open: boolean;
  value: string
}

class PickerComponent extends React.Component<PickerProps, PickerState> {
  state = {
    open: false,
    value: this.props.placeholder || "Select"
  };

    componentDidMount() {
        this.props.onChange("", false)
    }

  toggleOpen = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  handleOptionClick = (value: string) => {
    this.props.onChange(value, true);

    this.setState({ 
        open: false,
        value: value
     });
  };

  render() {
    return (
      <div className="picker">
        <div className="picker__selected" onClick={this.toggleOpen}>
          {this.state.value}
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
