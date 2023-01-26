import React, { Component } from "react";
import { StepConfiguration, ScreenComponent, StepMap } from "./Interfaces";
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
  past_declined: boolean;
  past_services: boolean;
  transfer_services: boolean;
}


interface IStepFlow {
    nextStep?: StepConfiguration
    onError?: StepConfiguration
    prevStep?: StepConfiguration
    condition?: string
}

export default class StateMachine extends React.Component<
{ flow: Map<StepConfiguration, IStepFlow> },
// { configuration: StepConfiguration[] },
  IOnboardingData
> {
  state: IOnboardingData = {
    step: 0,
    // currentNode: {title: "", items: [], screen: ScreenComponent.welcomeScreen },
    currentNode: this.props.flow.keys().next().value,
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    country: "",
    levelOfEducation: "",
    past_declined: true,
    past_services: true,
    transfer_services: true
  };

  //   prevStep = () => {
  //     const { step } = this.state;
  //     this.setState({ step: step - 1 });
  //   };

  onError = () => {
    const currentFlow = this.props.flow.get(this.state.currentNode)

    if (currentFlow?.onError) {
        this.setState({ 
            currentNode: currentFlow.onError
        });
    }
  }

  nextStep = () => {
    const currentFlow = this.props.flow.get(this.state.currentNode)

    let canContinue = true

    if (currentFlow?.condition) {
        console.log(currentFlow.condition)
        canContinue = !(this.state.past_declined || this.state.past_services || this.state.transfer_services)

        // if (this.state.)

        // canContinue = Function("return " + currentFlow?.condition)();
    }

    if (canContinue) {
        if (currentFlow?.nextStep) {
            this.setState({ 
                currentNode: currentFlow.nextStep
            });
        }
    } else {
        this.onError();
    }
  };

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  handleChange = (key: string, value: string) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  drawComponent(values: IOnboardingData) {
    const configuration = this.state.currentNode
    const DynamicComponent = StepMap[configuration.screen];
    const props = {
      configuration: configuration,
      values: values,
      nextStep: this.nextStep,
      handleChange: this.handleChange,
    };

    return <DynamicComponent key={this.state.currentNode.title} {...props} />;
  }

  render() {
    const values = {} as IOnboardingData;

    return this.drawComponent(values);
  }
}
