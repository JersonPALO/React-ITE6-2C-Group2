import "./Songs.css";

const SongCard = ({ song, index, className, loading, albumTitle }) => {
  if (loading) {
    return (
      <figure className={`card ${className || ""}`}>
        <div className="card-image-wrapper skeleton" />
        <div className="card-content">
          <div className="skeleton skeleton-text title" />
        </div>
      </figure>
    );
  }

  return (
    <figure className={`card ${className || ""}`}>
      <div className="card-image-wrapper song-placeholder">
        <span>♫</span>
      </div>
      <figcaption className="card-content">
        <h2 className="title">{index + 1}. {song?.title || "Untitled Track"}</h2>
      </figcaption>
    </figure>
  );
};

export default SongCard;