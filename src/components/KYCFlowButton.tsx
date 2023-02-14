import * as React from "react";
import { MouseEvent } from "react";

// import "./css/ButtonLightMode";
import "./css/KYCFlowButton.css";
import ButtonLabel from "./ButtonLabel";

class KYCFlowButton extends React.Component<{
  className: string;
  text: string;
  enabled: boolean;
  onClick: () => void;
}> {
  Continue = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.onClick();
  };

  render() {
    return (
      <button
        className={`standard-button ${this.props.className} ${this.props.enabled === false ? "disabled" : ""}`}
        onClick={this.props.onClick}
      >
        <ButtonLabel
          className="button-label"
          text={this.props.text}
          onClick={this.props.onClick}
        />
      </button>
    );
  }
}

export default KYCFlowButton;
