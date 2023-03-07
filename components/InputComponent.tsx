import React from "react";
import styles from "@/styles/InputComponent.module.css";
import lockIcon from "../assets/lockIcon.svg";
import LabelField from "@/components/LabelField";
import { ComponentProps } from "./ScreenComponent";
import { InputBlockData } from "../interfaces/types";
import Image from 'next/image';

interface InputState {
  value: string;
  isValid: boolean;
}

enum ValidationType {
  email = "email",
  ssn = "ssn",
  dateBirth = "mm/dd/yyy",
  phone = "phone",
  custom = "custom",
}

function getRegex(type?: ValidationType, custom?: string): RegExp | null {
  switch (type) {
    case ValidationType.email:
      return /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    case ValidationType.ssn:
      return /^\d{3}-\d{2}-\d{4}$/;
    case ValidationType.dateBirth:
      return /^\d{2}-\d{2}-\d{4}$/;
    case ValidationType.phone:
      return /^\d+$/;
    case ValidationType.custom:
      if (custom !== undefined) {
        return RegExp(custom);
      }
  }
  return null;
}

class InputComponent extends React.Component<ComponentProps, InputState> {
  validation: (value: string) => boolean;

  config: InputBlockData;

  constructor(props: ComponentProps) {
    super(props);

    this.config = props.data as InputBlockData;

    const currentValue = this.props.value

    this.state = {
        value: currentValue ?? "",
        isValid: currentValue !== "",
      };

    this.validation = (value: string) => {
      const regex = getRegex(
        this.config.validation as ValidationType,
        this.config.regex
      );
      if (regex !== null) {
        return regex.test(value);
      } else {
        return true;
      }
    };
  }

  componentDidMount() {
    let isValid = this.validation(this.state.value);
    this.props.onChange(this.props.id, this.state.value, isValid);
  }

  validate(value: string) {
    let isValid = this.validation(value);

    this.setState(
      {
        value: value,
        isValid: isValid,
      },
      () => {
        this.props.onChange!(this.props.id, value, this.state.isValid);
      }
    );
  }

  render() {
    const { value, isValid } = this.state;
    const showError = !isValid && this.state.value.length > 0;

    return (
      <div className={styles["validation-container"]}>
        {/* <LabelField
          className={`${styles["input-title"]} ${showError ? styles["input-invalid"] : ""}`}
          label={this.config.title}
        /> */}

        <div
          className={styles["input-container"]}
        >
          <input
            className={`${styles["input-field"]} ${
                showError ? styles["input-invalid-border"] : ""
              }`}
            type="text"
            value={value}
            onChange={(event) => {
              this.validate(event.target.value);
            }}
          />

          {this.config.isSecure && (
            // <Image className={styles["input-lock"]} src="/lockIcon.svg" alt="Secure"/>
            <img className={styles["input-lock"]} src="/lockIcon.svg" alt="Lock" />
          )}
        </div>

        {showError && (
          <div className={styles["input-error"]}>{this.config.errorMessage}</div>
        )}

        {/* {this.config.auxiliaryMessage && (
          <LabelField
            className={styles["input-auxiliar-message"]}
            label={this.config.auxiliaryMessage}
          />
        )} */}
      </div>
    );
  }
}

export default InputComponent;
