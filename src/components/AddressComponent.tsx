import React from "react";
import TextComponent from "./TextComponent";
import InputComponent from "./InputComponent";
import { AddressBlockData } from "../interfaces/types";
import { ComponentProps } from "./ScreenComponent";
import "./css/AddressComponent.css";
import PickerComponent from "./PickerComponent";

interface AddressState {
  address: string;
  address1: string;
  city: string;
  postalCode: string;
  country: string;
}

class AddressComponent extends React.Component<ComponentProps, AddressState> {
  config: AddressBlockData;

  constructor(props: ComponentProps) {
    super(props);

    this.config = props.data as AddressBlockData;

    this.state = {
      address: "",
      address1: "",
      postalCode: "",
      city: "",
      country: "",
    };
  }

  handleInputChange = (id: string, value: any, isValid: boolean) => {
    this.setState(
      (prevState) => ({
        ...prevState,
        [id]: value,
      }),
      () => {
        const address = Object.values(this.state).reduce((address, value) => {
          return address + " " + value;
        });
        this.props.onChange("address", address, true);
      }
    );
  };

  render() {
    const addressText = {
      id: "address",
      type: "paragraph",
      data: {
        text: "Address",
      },
    };

    const postalText = {
      id: "postalCode",
      type: "paragraph",
      data: {
        text: "Postal Code",
      },
    };

    const cityText = {
      id: "city",
      type: "paragraph",
      data: {
        text: "City",
      },
    };

    const countryText = {
      id: "country",
      type: "paragraph",
      data: {
        text: "Country",
      },
    };

    const addressInput = {
      id: "address",
      type: "input",
      data: {
        text: "",
      },
    };

    const zipInput = {
      id: "postalCode",
      type: "input",
      data: {
        text: "",
      },
    };

    const cityInput = {
      id: "city",
      type: "input",
      data: {
        text: "",
      },
    };

    var pickerProps = {
      id: "country",
      data: {
        title: "Select your country",
        items: [
          {
            id: "spain",
            text: "Spain",
          },
          {
            id: "usa",
            text: "USA",
          },
          {
            id: "venezuela",
            text: "Venezuela",
          },
          {
            id: "belgium",
            text: "Belgium",
          },
        ],
      },
    };
    return (
      <div className="address">
        <div className="address-container">
          <TextComponent {...addressText} onChange={() => {}} />
          <InputComponent onChange={this.handleInputChange} {...addressInput} />
          <InputComponent
            onChange={(_, value) =>
              this.handleInputChange("address1", value, true)
            }
            {...addressInput}
          />
        </div>
        <div className="address-container horizontal">
          <div className="column">
            <TextComponent {...postalText} onChange={() => {}} />
            <InputComponent onChange={this.handleInputChange} {...zipInput} />
          </div>
          <div className="column">
            <TextComponent {...cityText} onChange={() => {}} />
            <InputComponent onChange={this.handleInputChange} {...cityInput} />
          </div>
        </div>
        <div>
          <TextComponent {...countryText} onChange={() => {}} />
          <PickerComponent onChange={this.handleInputChange} {...pickerProps} />
        </div>
      </div>
    );
  }
}

export default AddressComponent;
