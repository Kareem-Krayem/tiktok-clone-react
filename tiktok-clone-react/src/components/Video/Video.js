import React from 'react';
import './Video.css';
import VideoSideBar from '../VideoSideBar/VideoSideBar';
import VideoFooter from '../VideoFooter/VideoFooter';

function Video() {
  return (
    <div className='video'>
      <h1>Video</h1>
      <VideoSideBar />
      <VideoFooter />
    </div>
  );
}

export default Video;
