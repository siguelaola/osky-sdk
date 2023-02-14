import * as React from "react";
import "./LabelField.css";

const LabelField = (props: { 
    label: string, 
    className?: string }) => {
  return (
    <div className={`label ${props.className || ""}`}>
      <span className="">{props.label}</span>
    </div>
  );
};

export default LabelField;
