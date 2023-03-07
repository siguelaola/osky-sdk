import * as React from "react";
import { MouseEvent } from "react";
import styles from "@/styles/ButtonComponent.module.css";
import ButtonLabel from "./ButtonLabel";

interface ButtonProps {
  enabled: boolean;
  onClick: () => void;
}
class ButtonComponent extends React.Component<ButtonProps> {
  Continue = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.onClick();
  };

  render() {
    const title = "Continue";

    return (
      <button
        className={`${styles["standard-button"]} ${
          this.props.enabled === false ? styles.disabled : ""
        }`}
        onClick={this.props.onClick}
      >
        <ButtonLabel
          className={styles["button-label"]}
          text={title}
          onClick={this.props.onClick}
        />
      </button>
    );
  }
}

export default ButtonComponent;
