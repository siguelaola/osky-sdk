import React from "react";
import './css/VideoComponent.css'

interface VideoComponentProps {
  data: VideoBlockData;
}

interface VideoBlockData {
  url: string;
  withBorder: boolean;
  withBackground: boolean;
  stretched: boolean;
  caption: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ data }) => {
  const { url, withBorder, withBackground, stretched, caption } = data;

  return (
    <div className="video-container">
      <video
        src={url}
        className={`video-block ${withBorder ? 'with-border' : ''} ${withBackground ? 'with-background' : ''} ${stretched ? 'stretched' : ''}`}
        controls
      />
      {caption && <div className="video-caption">{caption}</div>}
    </div>
  );
};

export default VideoComponent;
