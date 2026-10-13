
export default function GameCard({
  game,
  isFavorite,
  onToggleFavorite,
  isPriorityImage = false,
}) {
  return (
    <div className="game-card">
      <img
        src={
          game.background_image ||
          'https://via.placeholder.com/300x180'
        }
        alt={game.name}
        className="game-image"
        width="300"
        height="150"
        decoding="async"
        loading={isPriorityImage ? 'eager' : 'lazy'}
        fetchPriority={isPriorityImage ? 'high' : 'auto'}
      />

      <div className="game-info">
        <h3>{game.name}</h3>

        <p className="game-rating">
          ⭐ Nota: {game.rating} / 5
        </p>

        <button
          className={`fav-btn ${isFavorite ? 'is-fav' : ''}`}
          onClick={() => onToggleFavorite(game)}
        >
          {isFavorite
            ? '❤️ Remov dos Favoritos'
            : '🤍 Favoritar'}
        </button>
      </div>
    </div>
  );
}
