import React from "react";
import "../App.css";
import "./Overlay.css";
import headerLight from "../assets/headerLight.svg";
import Onboarding from "./Onboarding";
import DisclosuresView from "./DisclosuresView";


import StateMachine from "./StateMachine";
import { ComponentsType, ConfigurationOptions, birthConfiguration, welcomeConfiguration, userDetailsConfiguration, addressConfiguration,
    citizenConfiguration, noAvailableConfiguration, fundingSourcesConfiguration, countrySelectorConfiguration, kycCompleted, ssnInputConfiguration} from "./Models";
    


const configuration = [
    welcomeConfiguration, 
    ssnInputConfiguration, 
    userDetailsConfiguration, 
    addressConfiguration, 
    citizenConfiguration, 
    noAvailableConfiguration, 
    birthConfiguration,
    fundingSourcesConfiguration,
    countrySelectorConfiguration,
    kycCompleted
    ]


function Overlay() {
  return (
    <div className="App">
      <div className="onboarding-flow-us">
        <img className="header-light" src={headerLight} alt="" />
        <div className="input-box-light">
          {/* <Onboarding /> */}

          <StateMachine configuration={configuration} />
        </div>
        <DisclosuresView disclosuresURL="https://www.olainvierte.com" message="Your information is secure and will not be shared"/>
      </div>
    </div>
  );
}

export default Overlay;
