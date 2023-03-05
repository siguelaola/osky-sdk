import * as React from "react";
import { MouseEvent } from "react";
import "./css/ButtonComponent.css";
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
        className={`standard-button ${
          this.props.enabled === false ? "disabled" : ""
        }`}
        onClick={this.props.onClick}
      >
        <ButtonLabel
          className="button-label"
          text={title}
          onClick={this.props.onClick}
        />
      </button>
    );
  }
}

export default ButtonComponent;
