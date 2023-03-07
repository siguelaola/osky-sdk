import { Component } from "react";
import icon from '../assets/chevron-right.svg';
import styles from "@/styles/SingleChoiceOption.module.css";

class SingleChoiceOption extends Component<{
  title: string;
  onClick: () => void;
}> {
  render() {
    return (
      <div className={styles.container} onClick={this.props.onClick}>
        <span className={styles.title}>{this.props.title}</span>
        <img className={styles.icon} src={icon} alt=""/>
      </div>
    );
  }
}

export default SingleChoiceOption;
