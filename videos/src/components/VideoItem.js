import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  const { thumbnails, title } = video.snippet;
  return (
    <div onClick={() => onVideoSelect(video)} className='video-item item'>
      <img alt={title} className='ui image' src={thumbnails.medium.url} />
      <div className='content'>
        <div className='header'>{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
