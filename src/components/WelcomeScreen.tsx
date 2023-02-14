import * as React from "react";
import { StepConfiguration } from "./Interfaces";
import "./css/WelcomeScreen.css";

class WelcomeScreen extends React.Component<{configuration: StepConfiguration, nextStep: () => void }> {
  render() {
    return (
        <div className="welcome-screen">
          <span className="main_title">{this.props.configuration.title}</span>
          <span className="main_subtitle">
          {this.props.configuration.subtitle}
          </span>
    </div>
    );
  }
}

export default WelcomeScreen;
