import React from "react";
import { TextBlockData } from "../interfaces/types";
import { ComponentProps } from "./ScreenComponent";
import "./css/LabelField.css";

interface StyleProps {
  text: string;
  level?: number;
  alignment: CanvasTextAlign;
}

class TextComponent extends React.Component<ComponentProps> {
  render() {
    const { data } = this.props;

    const style: StyleProps = {
      text: (data as TextBlockData).text,
      level: (data as TextBlockData).level,
      alignment: (data as TextBlockData).alignment ?? "left",
    };

    const Tag =
      style.level !== undefined
        ? (`h${style.level}` as keyof JSX.IntrinsicElements)
        : "span";

    return (
      <div className="label" style={{ textAlign: style.alignment }}>
        <Tag>{style.text}</Tag>
      </div>
    );
  }
}

export default TextComponent;
