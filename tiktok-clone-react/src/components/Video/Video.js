import React, { useRef, useState } from 'react';
import './Video.css';
import VideoSideBar from '../VideoSideBar/VideoSideBar';
import VideoFooter from '../VideoFooter/VideoFooter';

function Video({ vid, channel, desc, song, likes, share, messages }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className='video'>
      <video
        className='video__player'
        onClick={onVideoPress}
        ref={videoRef}
        loop
        src={vid}
      ></video>
      <VideoFooter channel={channel} description={desc} song={song} />
      <VideoSideBar likes={likes} share={share} messages={messages} />
    </div>
  );
}

export default Video;
