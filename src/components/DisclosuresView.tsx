import { Component } from "react";
import LabelField from "./css/LabelField";
import "./DisclosuresView.css";
import iconLocked from "../assets/lockIcon.svg";

interface IDisclosures {
  disclosuresURL: string;
  message: string;
}

export default class DisclosuresView extends Component<IDisclosures> {
  render() {
    return (
      <div className="footer">
        <a className="disclosures-link" href={this.props.disclosuresURL}>
          Disclosures
        </a>
        <div className="disclosures-container">
          <div className="information-container">
            <img className="icon-locked" src={iconLocked} alt="" />
            <LabelField label={this.props.message} className="small-title" />
          </div>
        </div>
      </div>
    );
  }
}
