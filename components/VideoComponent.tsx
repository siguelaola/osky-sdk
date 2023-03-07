import React from "react";
import { VideoBlockData } from "../interfaces/types";
import { ComponentProps } from "./ScreenComponent";
import styles from "@/styles/VideoComponent.module.css";

class VideoComponent extends React.Component<ComponentProps> {
  render() {
    const { url, withBorder, withBackground, stretched, caption } = this.props.data as VideoBlockData;

    return (
      <div className={styles["video-container"]}>
        <video
          src={url}
          className={`${styles["video-block"]} ${withBorder ? styles["with-border"] : null} ${
            withBackground ? styles["with-background"] : null
          } ${stretched ? styles.stretched : null}`}
          controls
        />
        {caption && <div className={styles["video-caption"]}>{caption}</div>}
      </div>
    );
  }
}

export default VideoComponent;
