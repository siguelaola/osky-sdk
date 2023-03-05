import React from "react";
import { ComponentProps } from "./ScreenComponent";

interface LineStyle {
  color: string;
  height: number;
}

class LineComponent extends React.Component<ComponentProps> {
    render() {

        const style: LineStyle = {
            color: "#F2F2F7",
            height: 1
        }

        return <hr style={{ borderColor: style.color, borderWidth: style.height, borderStyle: "solid", width: "100%" }} />;
    }
}

export default LineComponent;