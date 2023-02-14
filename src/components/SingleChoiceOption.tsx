import { Component } from "react";
import icon from '../assets/chevron-right.svg';
import "./css/SingleChoiceOption.css";

class SingleChoiceOption extends Component<{
  title: string;
  onClick: () => void;
}> {
  render() {
    return (
      <div className="container" onClick={this.props.onClick}>
        <span className="title">{this.props.title}</span>
        <img className="icon" src={icon} alt=""/>
      </div>
    );
  }
}

export default SingleChoiceOption;
