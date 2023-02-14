import React from "react";
import "./InputValidationField.css";
import lockIcon from "../assets/lockIcon.svg";
import LabelField from "./css/LabelField";

interface SSNInputProps {
  name: string;
  isSecure?: false;
  auxiliarMessage?: string;
  onChange: (value: string, isValid: boolean) => void;
  validator: (value: string) => boolean;
  errorMessage: string;
}

interface SSNInputState {
  value: string;
  isValid: boolean;
}

class InputValidationField extends React.Component<
  SSNInputProps,
  SSNInputState
> {
  state = {
    value: "",
    isValid: false,
  };

  componentDidMount() {
    this.props.onChange("", this.state.isValid)
  }

//   handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = event.target;
//     this.validate(value);

//     // if (this.state.isValid) {
//     //     this.props.onChange(value)
//     // }
//   };

  validate(value: string) {
    this.setState({ 
        value: value,
        isValid: this.props.validator(value) 
    }, () => {
        this.props.onChange(value, this.state.isValid);
    })
  }

  render() {
    const { value, isValid } = this.state;
    const showError = !isValid && this.state.value.length > 0
    
    return (
      <div className="ssn-input">
        <LabelField
          className={`ssn-input__title ${showError ? "invalid" : ""}`}
          label={this.props.name}
        />

        <div className={`ssn-input__container ${showError ? "invalid-border" : ""}`}>
          <input
            className="ssn-input__field"
            type="text"
            value={value}
            
            onChange={(event) => { this.validate(event.target.value) }}
          />
          
        {this.props.isSecure && <img className="ssn-input__lock" src={lockIcon} alt="Lock" />}
        </div>

        {showError && (
          <div className="ssn-input__error">{this.props.errorMessage}</div>
        )}

        {this.props.auxiliarMessage && 
            <LabelField className="auxiliar-message" label={this.props.auxiliarMessage}/>
        }

      </div>
    );
  }
}

export default InputValidationField;
