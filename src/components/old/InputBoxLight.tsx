import * as React from "react";
import "./InputBoxLight.css";

interface IInputProps {
    id: string;
  className: string;
  valueDidChange: (key: string, value: string) => void;
//   handleChange: (input: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

// const InputBoxLight: React.FC<IInputProps> = ({ key, className, handleChange, placeholder = "" }) => {
// const InputBoxLight = (props: {
//     className: String,
//     handleChange: (input: string, e: React.ChangeEvent<HTMLInputElement>) => void,
//     placeholder: ""
// }) => {

class InputBoxLight extends React.Component<IInputProps> {

    componentDidMount(): void {
        //add validation
        this.props.valueDidChange(this.props.id, "")
    }
    
    handle = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log('count: ', event.target.value);
        // console.log('count: ', this.props.id);
        this.props.valueDidChange(this.props.id, event.target.value)
  }

  render() {
    return (
      <input
        className={`input-box ${this.props.className || ""}`}
        placeholder={this.props.placeholder || ""}
        type="text"
        //   onChange={e => this.props.handleChange(this.props.key, e)}
        onChange={this.handle}
      />
    );
  }
}

export default InputBoxLight;
