import React from "react";
import { TextBlockData } from "../interfaces/types";
import { ComponentProps } from "./ScreenComponent";
import styles from "@/styles/LabelField.module.css";

interface StyleProps {
  text: string;
  level?: number;
  alignment: CanvasTextAlign;
}

class TextComponent extends React.Component<ComponentProps> {
  render() {
    const { data } = this.props;

    const config: StyleProps = {
      text: (data as TextBlockData).text,
      level: (data as TextBlockData).level,
      alignment: (data as TextBlockData).alignment ?? "left",
    };

    const Tag =
    config.level !== undefined
    //   ? (`title${style.level}` as keyof JSX.IntrinsicElements)
        ? (`title${config.level}`)
        : "label";

    return (
        
      <div className={`${styles[Tag]} ${styles.text}`} style={{ textAlign: config.alignment }}>
        {/* <Tag>{style.text}</Tag> */}
        <span>{config.text}</span>
      </div>
    );
  }
}

export default TextComponent;
