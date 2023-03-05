import React from "react";
import API from "../network/API";
import ScreenComponent, { ScreenComponentProps } from "./ScreenComponent";
import { DashboardData, NodeScreen } from "../interfaces/types";
import DisclosuresView from "./DisclosuresView";
import logo from "../assets/moneygram.svg";
import icon from "../assets/chevron-right.svg";
import "./css/StateMachine.css";

interface StateMachineData {
  step: number;
  currentNode: NodeScreen;
  information: { [key: string]: any }
}

interface StateMachineProps {
  session: DashboardData;
}

export default class StateMachine extends React.Component<
  StateMachineProps,
  StateMachineData
> {
  state: StateMachineData = {
    step: 0,
    currentNode:
      this.props.session.nodes.find((node) => node.id === "node-0") ||
      this.props.session.nodes[this.state.step],
    information: {}
  };

  prevStep = () => {
    const prev_node = this.props.session.edges.find(
      (edge) => edge.target === this.state.currentNode.id
    )?.source;

    const node = this.props.session.nodes.find((node) => node.id === prev_node);

    if (node) {
      this.setState({
        currentNode: node,
      });
    }
  };

  onError = () => {
    //TODO: BLOCK ON DASHBOARD - Handle Error Screen
  };

  nextStep = (data: { [key: string]: any }) => {
    let canContinue = true;

    //TODO: BLOCK ON DASHBOARD - Check conditions to move to next screen

    this.setState(
        (prevState) => ({
            information: { 
                ...prevState.information,
                [this.state.currentNode.id]: data
            }
    }))

    if (canContinue) {
      API.updateSession(data);

      const next_node = this.props.session.edges.find(
        (edge) => edge.source === this.state.currentNode.id
      )?.target;

      if (next_node) {
        const node = this.props.session.nodes.find(
          (node) => node.id === next_node
        );

        if (node) {
          this.setState({
            currentNode: node,
          });
        } else {
          //HANDLE ERROR - NODE DOES NOT EXIST
          return;
        }
      } else {
        API.finish();
      }
    } else {
      //TODO: BLOCK ON DASHBOARD - HANDLE ERROR NODE BASED ON CRITERIA
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

  drawComponent() {
    const props: ScreenComponentProps = {
      node: this.state.currentNode,
      values: this.state.information[this.state.currentNode.id] ?? {},
      nextStep: this.nextStep,
      handleChange: this.handleChange,
    };

console.log("passing: ", props.values)

    return <ScreenComponent key={this.state.currentNode.id} {...props} />;
  }

  render() {
    return (
      <div className="App">
        <div className="screen-container">
          <div className="header">
            <div className="back-btn" onClick={this.prevStep}>
                <img src={icon} alt="" />
            </div>
            <img className="logo" src={logo} alt="" />
          </div>
          <div className="components-container">{this.drawComponent()}</div>
          <DisclosuresView
            disclosuresURL="https://www.olainvierte.com"
            message="Your information is secure and will not be shared"
          />
        </div>
      </div>
    );
  }
}
