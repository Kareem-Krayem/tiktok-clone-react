import React, { useState } from 'react';
import './VideoSideBar.css';
import { Share, Message, Favorite, FavoriteBorder } from '@material-ui/icons';

function VideoSideBar({ likes, share, messages }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className='videoSideBar'>
      <div className='videoSideBar__button'>
        {liked ? (
          <Favorite fontSize='large' onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorder fontSize='large' onClick={(e) => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className='videoSideBar__button'>
        <Message fontSize='large' />
        <p>{messages}</p>
      </div>
      <div className='videoSideBar__button'>
        <Share fontSize='large' />
        <p>{share}</p>
      </div>
    </div>
  );
}

export default VideoSideBar;
