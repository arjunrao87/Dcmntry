import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  const gifItems = props.videos.map(
  	(image) => {
    return <VideoItem key={image.id} video={image} onVideoSelect={props.onVideoSelect} />
  });

  return (
    <div className="video-list">{gifItems}</div>
  );
};

export default VideoList;