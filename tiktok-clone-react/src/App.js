import React from 'react';
import './App.css';
import Video from './components/Video/Video';

function App() {
  const video1 = require('./assets/01.MP4');
  const video2 = require('./assets/02.MP4');
  const video3 = require('./assets/03.MP4');
  return (
    <div className='app'>
      <div className='app__videos'>
        <Video
          vid={video1}
          channel='shayladowning'
          desc='reposting bc they deleted the sound 😪'
          song='@Tiagz They Call Me Tiago (Her Name Is Margo)'
          likes={3700}
          share={110}
          messages={400}
        />
        <Video
          vid={video2}
          channel='lailooooarazi_'
          desc='Oops 🥴'
          song='@Megan Thee Stallion Cash Shit'
          likes={2800}
          share={210}
          messages={276}
        />
        <Video
          vid={video3}
          channel='nadeyah'
          desc='Rrrah 👑'
          song='@lauren original sound - stargirlaur'
          likes={1200}
          share={43}
          messages={309}
        />
      </div>
    </div>
  );
}

export default App;
