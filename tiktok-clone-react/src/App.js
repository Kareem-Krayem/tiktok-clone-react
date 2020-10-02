import React from 'react';
import './App.css';
import Video from './components/Video/Video';

function App() {
  const video1 = require('./assets/01.MP4');
  const video2 = require('./assets/02.MP4');
  const video3 = require('./assets/03.MP4');
  const video4 = require('./assets/04.MP4');
  return (
    <div className='app'>
      <div className='app__videos'>
        <Video vid={video1} />
        <Video vid={video2} />
        <Video vid={video3} />
        <Video vid={video4} />
      </div>
    </div>
  );
}

export default App;
