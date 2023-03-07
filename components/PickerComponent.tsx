import React from "react";
import { PickerBlockData } from "../interfaces/types";
import { ComponentProps } from "./ScreenComponent";
import styles from "@/styles/PickerComponent.module.css";

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
      value: this.props.value ?? this.config.title,
    };

    console.log("CC: ", this.config.title)
  }

  componentDidMount() {
    this.props.onChange(this.props.id, this.props.value, false);
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
      <div className={styles["picker-container"]}>
        <div className={styles["picker-selected"]} onClick={this.toggleOpen}>
          {this.state.value}
        </div>
        {this.state.open && (
          <div className={styles["picker-items"]}>
            {this.config?.items.map((option) => (
              <div
                key={option.id}
                className={styles["picker-option"]}
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
