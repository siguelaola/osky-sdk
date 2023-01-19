import * as React from "react";
import "./TypeButtonLabelBig.css";

const TypeButtonLabelBig = (props: { text: string, className?: string, onClick: () => void}) => {
  return (
    <div className={`type-button-label-big ${props.className || ""}`} onClick={props.onClick}>
      {props.text || "Get Started"}
    </div>
  );
};
export default TypeButtonLabelBig;
