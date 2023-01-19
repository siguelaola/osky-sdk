import * as React from "react";
import "./ButtonLightMode.css";

class KYCFlowInput extends React.Component<{className: string, placeholder: string}> {
    // state = { name: 0};
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         value: null;
    //     }
    // }
    
    render() {
        return (
            <input
            className={`input-box ${this.props.className || ""}`}
            placeholder={this.props.placeholder || ""}
            type="text"
            />);
        }
    }

export default KYCFlowInput;