import React, { ChangeEvent, Component, MouseEvent } from "react";
import { StepConfiguration } from "./Interfaces";
import KYCStep from "./KYCStep";

interface OnboardingData {
  step: number;
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: String;
  country: string;
  levelOfEducation: string;
}

interface IUserDetailsData {
  nextStep: () => void;
  handleChange: (key: string, value: string) => void;
  // handleChange: (input: string, e: React.ChangeEvent<HTMLInputElement>) => void,
  values: OnboardingData;
  configuration: StepConfiguration;
}

class UserDetails extends Component<IUserDetailsData> {
//   constructor(props: IUserDetailsData) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }

  // for continue event listener
  Continue = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.nextStep();
  };

//   handleChange = (key: string, value: string) => {
//     this.props.handleChange(key, value);
//   };

  render() {
    return (
      // <button onClick={(event) => {
      //     this.props.handleChange(event, 'alex')
      // }}
      // />
      // <div>
      // <input onChange={(event) => {
      //     this.props.handleChange("firstName", event)
      // }}
      // placeholder="placeholder"
      // type="text"
      // />

      // <input onChange={(event) => {
      //     this.props.handleChange("lastName", event)
      // }}
      // placeholder="placeholder"
      // type="text"
      // />

      // <button onClick={this.Continue}> CLICK </button>
      // </div>

      <KYCStep
        configuration={this.props.configuration}
        values={this.props.values}
        handleChange={(key, value) => {
          this.props.handleChange(key, value);
        }}
        nextStep={this.props.nextStep}
      />
    );
  }
}

export default UserDetails;
