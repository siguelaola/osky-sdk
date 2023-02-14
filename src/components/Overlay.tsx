import "../App.css";
import "./css/Overlay.css";
import headerLight from "../assets/headerLight.svg";
import DisclosuresView from "./DisclosuresView";

import logo from "../assets/moneygram.svg";

import StateMachine from "./StateMachine";

// import { flow } from "./Models";
import { flow } from "../models/Moneygram";

function Overlay() {
  return (
    <div className="App">
      <div className="onboarding-flow-us">

      {/* <img className="header-light" src={headerLight} alt="" /> */}

      <img className="header-light" src={logo} alt="" />

      {/* <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3400 2700" preserveAspectRatio="xMidYMid meet"> */}
      {/* <object type="image/svg+xml" width="300" height="300" data={headerLight} className="logo"> */}
      {/* <svg
        data-src={new URL(headerLight)}
        fill="currentColor"
        width="50px"
        height="50px"
        style={{
          color: "red"
        }}
      /> */}
        {/* Kiwi Logo
        </object> */}
        <div className="input-box-light">
          {/* <Onboarding /> */}

          {/* <StateMachine configuration={configuration} /> */}
          <StateMachine flow={flow} />
        </div>

      <DisclosuresView disclosuresURL="https://www.olainvierte.com" message="Your information is secure and will not be shared"/>
      </div>
    </div>
  );
}

export default Overlay;
