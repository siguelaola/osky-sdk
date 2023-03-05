import React from "react";
import { BlockDataType, ImageBlockData } from "../interfaces/types";
import { ComponentProps } from "./ScreenComponent";

class ImageComponent extends React.Component<ComponentProps> {
  render() {
    const { url, withBorder, withBackground, stretched, caption } = this.props.data as ImageBlockData
    ;
    return (
        <img
        key={url}
        className="center"
        style={{ padding: "4vh" }}
        src={url}
        alt={""}
      />
    )
  }
}

export default ImageComponent;