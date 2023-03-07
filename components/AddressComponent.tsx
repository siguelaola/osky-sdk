import React from "react";
import TextComponent from "./TextComponent";
import InputComponent from "./InputComponent";
import PickerComponent from "./PickerComponent";
import { ComponentProps } from "./ScreenComponent";
import { AddressBlockData } from "../interfaces/types";
import styles from "@/styles/AddressComponent.module.css";

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

    this.state = this.props.value as unknown as AddressState ?? {
      address: null,
      address1: null,
      postalCode: null,
      city: null,
      country: null,
    };
  }

  handleInputChange = (id: string, value: any, isValid: boolean) => {
    this.setState(
      (prevState) => ({
        ...prevState,
        [id]: value,
      }),
      () => {
        this.props.onChange(this.props.id, this.state, true);
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
      <div className={styles.address}>
        <div className={styles["address-container"]}>
          <TextComponent {...addressText} onChange={() => {}} />
          <InputComponent value={this.state.address} onChange={this.handleInputChange} {...addressInput} />
          <InputComponent
           value={this.state.address1}
            onChange={(_, value) =>
              this.handleInputChange("address1", value, true)
            }
            {...addressInput}
          />
        </div>
        <div className={`${styles["address-container"]} ${styles.horizontal}`}>
          <div className={`${styles.column} ${styles.column25}`}>
            <TextComponent {...postalText} onChange={() => {}} />
            <InputComponent value={this.state.postalCode} onChange={this.handleInputChange} {...zipInput} />
          </div>
          <div className={`${styles.column} ${styles.column75}`}>
            <TextComponent {...cityText} onChange={() => {}} />
            <InputComponent value={this.state.city} onChange={this.handleInputChange} {...cityInput} />
          </div>
        </div>
        <div>
          <TextComponent {...countryText} onChange={() => {}} />
          <PickerComponent value={this.state.country} onChange={this.handleInputChange} {...pickerProps} />
        </div>
      </div>
    );
  }
}

export default AddressComponent;
