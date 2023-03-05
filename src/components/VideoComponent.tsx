import React from "react";
import { VideoBlockData } from "../interfaces/types";
import { ComponentProps } from "./ScreenComponent";
import "./css/VideoComponent.css";

class VideoComponent extends React.Component<ComponentProps> {
  render() {
    const { url, withBorder, withBackground, stretched, caption } = this.props.data as VideoBlockData;

    return (
      <div className="video-container">
        <video
          src={url}
          className={`video-block ${withBorder ? "with-border" : ""} ${
            withBackground ? "with-background" : ""
          } ${stretched ? "stretched" : ""}`}
          controls
        />
        {caption && <div className="video-caption">{caption}</div>}
      </div>
    );
  }
}

export default VideoComponent;
