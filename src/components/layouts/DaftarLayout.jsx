import React, { useEffect } from 'react';
import useWatchlistStore from '/src/store/store.js';

const WatchlistDisplay = ({ title = "Daftar Saya", watchlist: propWatchlist, onRemove }) => {
  const { watchlist, getWatchlistByUser, removeFromWatchlist, userId } = useWatchlistStore();

  useEffect(() => {
    if (!propWatchlist && userId) {
      getWatchlistByUser(userId);
    }
  }, [propWatchlist, userId, getWatchlistByUser]);

  const listToShow = propWatchlist || watchlist;
  const handleRemove = onRemove || removeFromWatchlist;

  return (
    <section className="watchlist-page">
      <h2 className="watchlist-title">{title}</h2>
      <div className="watchlist-grid">
        {listToShow.map((movie) => (
          <div key={movie.id} className="watchlist-card">
            <div className="poster-wrapper">
              <img src={movie.src} alt={movie.alt} className="poster-img" />
              {movie.tag && (
                <span className={`tag ${movie.tag === "Top 10" ? "top10" : "new"}`}>
                  {movie.tag}
                </span>
              )}
            </div>
            <button onClick={() => handleRemove(movie.id)} className="remove-button">
              Hapus
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WatchlistDisplay;
