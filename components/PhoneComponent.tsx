import React from "react";
import styles from "@/styles/PhoneComponent.module.css";
import InputComponent from "./InputComponent";
import PickerComponent from "./PickerComponent";
import { ComponentProps } from "./ScreenComponent";
import { PhoneBlockData } from "../interfaces/types";

type PhoneState = {
  number: string;
};

class PhoneComponent extends React.Component<ComponentProps, PhoneState> {
  config: PhoneBlockData;

  constructor(props: ComponentProps) {
    super(props);

    this.config = this.props.data as PhoneBlockData;

    this.state = {
      number: this.props.value ?? this.config.number,
    };
  }

  componentDidMount(): void {
    this.props.onChange(this.props.id, this.props.value, true);
  }

  handlePickerChange = (id: string, countryCode: string) => {
    this.updatePhoneNumber(countryCode + this.state.number.toString().slice(2));
  };

  handleInputChange = (id: string, phoneNumber: string) => {
    this.updatePhoneNumber(
      this.state.number.toString().slice(0, 2) + phoneNumber.toString()
    );
  };

  updatePhoneNumber = (phoneNumber: string) => {
    this.setState(
      {
        number: phoneNumber,
      },
      () => {
        this.props.onChange(this.props.id, this.state.number, true);
      }
    );
  };

  render() {
    var pickerProps = {
      id: "prefix",
      data: {
        title: "+1",
        items: [
          {
            id: "+1",
            text: "+1",
          },
          {
            id: "+2",
            text: "+2",
          },
          {
            id: "+31",
            text: "+31",
          },
          {
            id: "+40",
            text: "+40",
          },
        ],
      },
    };

    var inputProps = {
      id: "swaS-bnMP9",
      data: {
        text: "Phone",
        validation: "phone",
      },
    };

    const countryCode = this.state.number.toString().slice(0, 2)
    const number = this.state.number.toString().slice(2)

    return (
      <div className={styles["phone-container"]}>
        <PickerComponent onChange={this.handlePickerChange} value={countryCode} {...pickerProps} />
        <InputComponent onChange={this.handleInputChange} value={number} {...inputProps} />
      </div>
    );
  }
}

export default PhoneComponent;
