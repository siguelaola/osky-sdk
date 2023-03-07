import * as React from "react";
import styles from "@/styles/LabelField.module.css";

const LabelField = (props: { 
    label: string, 
    className?: string }) => {
  return (
    <div className={`${styles.label} ${props.className || ""}`}>
      <span>{props.label}</span>
    </div>
  );
};

export default LabelField;