import React from "react";
import { birthConfiguration, welcomeConfiguration, userDetailsConfiguration, addressConfiguration,
citizenConfiguration, noAvailableConfiguration, fundingSourcesConfiguration, countrySelectorConfiguration, kycCompleted, ssnInputConfiguration} from "./Models";

import UserDetails from "./UserDetails";
import "./Onboarding.css";
import ReactDOM from "react-dom";

interface IOnboardingData {
  step: number;
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: String;
  country: string;
  levelOfEducation: string;
}

export default class Onboarding extends React.Component<{}, IOnboardingData> {
  state: IOnboardingData = {
    step: 1,
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    country: "",
    levelOfEducation: "",
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleChange = (key: string, value: string) => {
//   handleChange = (input: string, e: React.ChangeEvent<HTMLInputElement>) => {
    // No longer need to cast to any - hooray for react!
    // this.setState({[temperature]: e.target.value});
    this.setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  drawComponent(step: number, values: IOnboardingData) {
    switch (step) {
      case 1:
        return (
            <a></a>
        //   <WelcomeScreen
        //     configuration={welcomeConfiguration}
        //     onClick={this.nextStep}
        //   />
        );
      case 2:
        return (
          <UserDetails
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            values={values}
            configuration={userDetailsConfiguration}
          />
        );
    case 3:
        return (
            <UserDetails
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            values={values}
            configuration={birthConfiguration}
          />
        )
      case 4:
        return (
          <UserDetails
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            values={values}
            configuration={addressConfiguration}
          />
        );
      case 5:
        return (
          <UserDetails
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            values={values}
            configuration={citizenConfiguration}
          />
        );
      case 10:
        return (
            <a></a>
        //   <WelcomeScreen configuration={kycCompleted} onClick={this.nextStep} />
        );
      case 6:
        return (
            <a></a>
        //   <WelcomeScreen
        //     configuration={noAvailableConfiguration}
        //     onClick={this.nextStep}
        //   />
        );
        case 7:
          return (
            <UserDetails
              handleChange={this.handleChange}
              nextStep={this.nextStep}
              values={values}
              configuration={fundingSourcesConfiguration}
            />
          );
          case 8:
            return (
              <UserDetails
                handleChange={this.handleChange}
                nextStep={this.nextStep}
                values={values}
                configuration={countrySelectorConfiguration}
              />
            );
            case 9:
              return (
                <UserDetails
                  handleChange={this.handleChange}
                  nextStep={this.nextStep}
                  values={values}
                  configuration={ssnInputConfiguration}
                />
              );
      default:
      // do nothing
    }
  }

  render() {
    const { step } = this.state;
    const {
      email,
      username,
      password,
      firstName,
      lastName,
      country,
      levelOfEducation,
    } = this.state;
    const values = {} as IOnboardingData;

    return this.drawComponent(step, values);
  }
}
