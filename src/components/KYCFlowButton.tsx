import * as React from "react";
// import "./ButtonLightMode.css";
import { MouseEvent } from "react";

import "./old/ButtonLightMode";
import TypeButtonLabelBig from "./old/TypeButtonLabelBig";

class KYCFlowButton extends React.Component<{
  className: string;
  text: string;
  onClick: () => void;
}> {
  Continue = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.onClick();
  };

  render() {
    return (
      <button
        className={`button-light-mode ${this.props.className}`}
        onClick={this.props.onClick}
        disabled={true}
      >
        <TypeButtonLabelBig
          className="type-button-label-big-instance-1"
          text={this.props.text}
          onClick={this.props.onClick}
        />
      </button>
    );
  }
}

export default KYCFlowButton;
