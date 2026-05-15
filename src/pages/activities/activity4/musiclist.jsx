import { useState, useEffect } from 'react';
import './musiclist.css'; 

const MusicList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("/musiclist.json");
        const result = await response.json();
        setSongs(result.music_list);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="music-container">
        <h1>My Playlist</h1>
        
        <div className="header-row">
          <span>#</span>
          <span>Title</span>
          <span>Album</span>
          <span>Time</span>
        </div>

        <div className="list-body">
          {songs.map((song) => (
            <div key={song.id} className="track-row">
              <span className="track-number">{song.id}</span>
              <div className="track-main-info">
                <p className="track-name">{song.title}</p>
                <p className="track-sub">{song.artist}</p>
              </div>
              <span className="track-album-name">{song.album}</span>
              <span className="track-duration-time">{song.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default MusicList;