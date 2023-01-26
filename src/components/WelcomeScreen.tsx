import * as React from "react";
import KYCFlowButton from "./KYCFlowButton";
import { StepConfiguration } from "./Interfaces";
import "./WelcomeScreen.css";

class WelcomeScreen extends React.Component<{configuration: StepConfiguration, nextStep: () => void }> {
  render() {
    return (
        <div className="welcome-screen">
          <span className="main_title">{this.props.configuration.title}</span>
          <span className="main_subtitle">
          {this.props.configuration.subtitle}
          </span>
          {/* <KYCFlowButton
          className="button-light-mode-instance-1"
          text={this.props.configuration.button?.button ?? ""}
          onClick={this.props.nextStep}
        /> */}
    </div>
    );
  }
}

export default WelcomeScreen;
