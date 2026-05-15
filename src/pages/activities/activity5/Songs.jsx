import { useEffect, useState } from "react";
import "./Songs.css"; 
import SongCard from "./SongCard";

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [albumTitle, setAlbumTitle] = useState("");
  const [loader, setLoader] = useState(false);
  const [alertText, setAlertText] = useState("");

  const fetchSongData = async () => {
    try {
      setLoader(true);
      const response = await fetch("https://taylor-swift-api.sarbo.workers.dev/albums/10");
      const result = await response.json();
      
      if (Array.isArray(result)) {
        setSongs(result); 
        setAlbumTitle("MIDNIGHTS"); 
      }

      setTimeout(() => {
        setLoader(false);
      }, 2000);
      
    } catch(error) {
      setAlertText("No Internet Connection");
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchSongData();
  }, []);

  return (
    <main className="container">
      <h1 className="headerTitle">{loader ? "Loading..." : albumTitle}</h1>
      <p className="subTitle">Singer: Taylor Swift</p>
      <section className="gallery">
        {loader ? (
          Array.from({ length: 12 }).map((_, idx) => (
            <SongCard key={idx} className="item" loading />
          ))
        ) : (
          songs.map((song, index) => (
            <SongCard 
              key={index} 
              song={song}     
              index={index}    
              className="item" 
            />
          ))
        )
      }
      </section>
    </main>
  );
};

export default Songs;