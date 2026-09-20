import { useState, useEffect } from 'react';
import Header from './components/Header';
import GameCard from './components/GameCard';
import { buscarJogos } from './services/api';
import './App.css';

export default function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState('catalog'); // 'catalog' ou 'favorites'
  const [selectedPlatform, setSelectedPlatform] = useState('');
  
  // Carrega os favoritos salvos no navegador ao iniciar
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('game_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // Busca os jogos na RAWG sempre que a plataforma selecionada mudar
  useEffect(() => {
    async function loadGames() {
      setLoading(true);
      const data = await buscarJogos(selectedPlatform);
      setGames(data);
      setLoading(false);
    }
    loadGames();
  }, [selectedPlatform]);

  // Salva os favoritos no localStorage sempre que a lista de favoritos mudar
  useEffect(() => {
    localStorage.setItem('game_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Adiciona ou remove um jogo dos favoritos
  const toggleFavorite = (game) => {
    const exists = favorites.some((fav) => fav.id === game.id);
    if (exists) {
      setFavorites(favorites.filter((fav) => fav.id !== game.id));
    } else {
      setFavorites([...favorites, game]);
    }
  };

  // Define qual lista será mostrada na tela
  const displayedGames = currentTab === 'catalog' ? games : favorites;

  return (
    <div className="container">
      <Header 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        favoritesCount={favorites.length}
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
      />

      <main className="content">
        <h2>{currentTab === 'catalog' ? 'Todos os Jogos' : 'Meus Favoritos'}</h2>

        {loading && currentTab === 'catalog' ? (
          <p className="status-msg">Carregando jogos...</p>
        ) : displayedGames.length === 0 ? (
          <p className="status-msg">
            {currentTab === 'catalog' 
              ? 'Nenhum jogo encontrado.' 
              : 'Você ainda não possui jogos salvos nos favoritos.'}
          </p>
        ) : (
          <div className="game-grid">
            {displayedGames.map((game) => (
              <GameCard 
                key={game.id} 
                game={game} 
                isFavorite={favorites.some((fav) => fav.id === game.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}