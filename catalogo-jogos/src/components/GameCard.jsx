export default function GameCard({ game, isFavorite, onToggleFavorite }) {
  return (
    <div className="game-card">
      <img 
        src={game.background_image || 'https://via.placeholder.com/300x180'} 
        alt={game.name} 
        className="game-image"
      />
      <div className="game-info">
        <h3>{game.name}</h3>
        <p className="game-rating">⭐ Nota: {game.rating} / 5</p>
        
        <button 
          className={`fav-btn ${isFavorite ? 'is-fav' : ''}`} 
          onClick={() => onToggleFavorite(game)}
        >
          {isFavorite ? '❤️ Remov dos Favoritos' : '🤍 Favoritar'}
        </button>
      </div>
    </div>
  );
}