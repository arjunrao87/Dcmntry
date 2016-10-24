import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
  return (
    <div className="video-item" onClick={() => onVideoSelect(video)}>
      <img alt="" src={video.images.downsized.url} />
    </div>
  )
};
export default VideoItem;