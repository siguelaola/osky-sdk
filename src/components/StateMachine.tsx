import React, { Component } from "react";
import { StepConfiguration, ScreenComponent, StepMap } from "./Models";
import Onboarding from "./Onboarding";
import UserDetails from "./UserDetails";
import WelcomeScreen from "./WelcomeScreen";

interface StateNode {
  nextStep: () => void;
  prevStep: () => void;
  error: () => void;
  // configuration: StepConfiguration;
  render: () => void;
}

// implements StateNode {

// export class StateMachine {

//     nodes: StateNode[] = []
//     currentNode?: StateNode = undefined

//     nextStep = () => {
//         this.currentNode?.nextStep();
//     }

//     prevStep = () => {
//         this.currentNode?.prevStep();
//     }

//     error = () => {
//         this.currentNode?.error();
//     }

//     // const configuration: StepConfiguration = {
//     //     title: "What are your funding sources?",
//     //     subtitle: "Ola is required by law to collect this information.",
//     //     items: [
//     //         { name: "Employment income", type: ComponentsType.Checkbox },
//     //         { name: "Investments", type: ComponentsType.Checkbox },
//     //         { name: "Inheritance", type: ComponentsType.Checkbox },
//     //         { name: "Family", type: ComponentsType.Checkbox },
//     //     ],
//     //     button: { button: "Continue", className: "button-light-mode-instance-1" },
//     // }
// }

// class AStep implements StateNode {

//     nextStep = () => {

//     }

//     prevStep = () => {

//     }

//     error = () => {

//     }

//     render = () => {
//         return (
//             <UserDetails handleChange={} nextStep={this.nextStep} values={} configuration={} />
//             );
//         }
//     }

//     // nextStep: function (): void {
//     //     // return
//     // },

//     // prevStep: function (): void {
//     //     // throw new Error("Function not implemented.");
//     // },
//     // error: function (): void {
//     //     throw new Error("Function not implemented.");
//     // }
//     // configuration: undefined

//     // render = () => JSX.Element {
//     //     return (
//     //     <UserDetails handleChange={} nextStep={this.nextStep} values={} configuration={} />
//     //     );
//     // }
// }

// class WelcomeScreen extends React.Component<{}> implements StateNode {

//     node: StateNode

//     constructor(node: StateNode) {
//         super(node);
//         this.node = node;
//     }

//     nextStep = (): StateNode => {
//         // this.currentNode?.nextStep();
//         console.log('next');
//         return this.node
//     }

//     prevStep = () => {
//         // this.currentNode?.prevStep();
//     }

//     error = () => {
//         // this.currentNode?.error();
//     }
// }

interface IOnboardingData {
  step: number;
  currentNode: StepConfiguration
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: String;
  country: string;
  levelOfEducation: string;
}

export default class StateMachine extends React.Component<
{ configuration: StepConfiguration[] },
// { configuration: StepConfiguration[] },
  IOnboardingData
> {
  state: IOnboardingData = {
    step: 0,
    currentNode: this.props.configuration[0],
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    country: "",
    levelOfEducation: "",
  };

  //   prevStep = () => {
  //     const { step } = this.state;
  //     this.setState({ step: step - 1 });
  //   };

//   componentDidMount() {
//     // this.setState((prevState) => {
//     //     return {
//     //       ...prevState,
//     //       ["currentNode"]: this.props.configuration,
//     //     };
//     //   });
//     this.setState({ currentNode }, this.props.configuration[0] )
//   }

  nextStep = () => {
    console.log("next");
    const step = this.state.step;

    if (this.state.currentNode.nextStep) {
        this.setState({ 
            step: step + 1,
            currentNode: this.state.currentNode.nextStep
        });
    }
  };

  handleChange = (key: string, value: string) => {
    //   handleChange = (input: string, e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  drawComponent(step: number, values: IOnboardingData) {
    // const configuration = this.props.configuration[step];
    const configuration = this.state.currentNode
    const DynamicComponent = StepMap[configuration.screen];
    const props = {
      configuration: configuration,
      values: values,
      nextStep: this.nextStep,
      handleChange: this.handleChange,
    };

    return <DynamicComponent {...props} />;
  }

  render() {
    // const { step } = this.state;
    const values = {} as IOnboardingData;

    return this.drawComponent(this.state.step, values);
  }
}
