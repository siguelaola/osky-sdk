import React from "react";
import "./InputValidationField.css";
import lockIcon from "../assets/lockIcon.svg";
import LabelField from "./css/LabelField";

interface InputProps {
    name: string;
    isSecure?: false;
    auxiliarMessage?: string;
    onChange: (value: string, isValid: boolean) => void;
    // validator?: (value: string) => boolean;
    // validation: ValidationType;
    // custom: string;
    validationData: [type?: ValidationType, custom?: string]
    // validationType?: ValidationType;
    validationRegex?: string;
    errorMessage: string;
}

interface InputState {
    value: string;
    isValid: boolean;
}

enum ValidationType {
    email = "email",
    ssn = "ssn",
    dateBirth = "mm/dd/yyy",
    custom = "custom",
}

// const prevStep = function (type: ValidationType, custom?: string) => string? {
//     return "";
// }

function getRegex(type?: ValidationType, custom?: string): RegExp | null {
    switch (type) {
        case ValidationType.email:
            return /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        case ValidationType.ssn:
            return /^\d{3}-\d{2}-\d{4}$/;
        case ValidationType.dateBirth:
            return /^\d{2}-\d{2}-\d{4}$/;
        case ValidationType.custom:
            if (custom !== undefined) {
                return RegExp(custom);
            }
        }
    return null;
}

class InputValidationField extends React.Component<
InputProps,
InputState
> {
    state = {
        value: "",
        isValid: false,
    };
    
    validation: (value: string) => boolean

    constructor(props: InputProps) {
        super(props)

        this.validation = (value: string) => {
            const regex = getRegex(this.props.validationData[0], this.props.validationData[1])
            if (regex !== null) {
                return regex.test(value);
            } else {
                return true
            }
        }
    }
    
    componentDidMount() {
        // let isValid = this.props.validator !== undefined ? false : true;
        let isValid = this.validation(this.state.value);
        this.props.onChange("", isValid);
    }
    
    validate(value: string) {
        let isValid =
        // this.props.validator !== undefined ? this.props.validator(value) : true;
        this.validation(value)
        
        this.setState(
            {
                value: value,
                isValid: isValid,
            },
            () => {
                this.props.onChange(value, this.state.isValid);
            }
            );
        }
        
        render() {
            const { value, isValid } = this.state;
            const showError = !isValid && this.state.value.length > 0;
            
            return (
                <div className="validation-container">
                <LabelField
                className={`input-title ${showError ? "input-invalid" : ""}`}
                label={this.props.name}
                />
                
                <div
                className={`input-container ${
                    showError ? "input-invalid-border" : ""
                }`}
                >
                <input
                className="input-field"
                type="text"
                value={value}
                onChange={(event) => {
                    this.validate(event.target.value);
                }}
                />
                
                {this.props.isSecure && (
                    <img className="input-lock" src={lockIcon} alt="Lock" />
                    )}
                    </div>
                    
                    {showError && (
                        <div className="input-error">{this.props.errorMessage}</div>
                        )}
                        
                        {this.props.auxiliarMessage && (
                            <LabelField
                            className="input-auxiliar-message"
                            label={this.props.auxiliarMessage}
                            />
                            )}
                            </div>
                            );
                        }
                    }
                    
                    export default InputValidationField;
                    