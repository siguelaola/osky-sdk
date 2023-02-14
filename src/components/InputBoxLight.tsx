import * as React from "react";
import "./css/InputBoxLight.css";

interface IInputProps {
    id: string;
  className: string;
  valueDidChange: (key: string, value: string) => void;
  placeholder: string;
}

class InputBoxLight extends React.Component<IInputProps> {

    componentDidMount(): void {
        //add validation
        this.props.valueDidChange(this.props.id, "")
    }
    
    handle = (event: React.ChangeEvent<HTMLInputElement>) => {
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
