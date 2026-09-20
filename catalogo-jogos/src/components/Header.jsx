import React from 'react';
import { PLATAFORMAS } from '../services/api';

export default function Header({ 
  currentTab, 
  setCurrentTab, 
  favoritesCount, 
  selectedPlatform, 
  setSelectedPlatform 
}) {
  return (
    <header className="header">
      <div className="header-top">
        <h1>🎮 Catálogo de Jogos</h1>
        
        <button 
          className="tab-button"
          onClick={() => setCurrentTab(currentTab === 'catalog' ? 'favorites' : 'catalog')}
        >
          {currentTab === 'catalog' 
            ? `⭐ Ver Favoritos (${favoritesCount})` 
            : '📚 Voltar ao Catálogo'}
        </button>
      </div>

      {/* Exibe os filtros por plataforma apenas quando estamos na aba do Catálogo */}
      {currentTab === 'catalog' && (
        <div className="filter-container">
          <span>Filtrar por Plataforma:</span>
          {PLATAFORMAS.map((plat) => (
            <button
              key={plat.id}
              className={`filter-btn ${selectedPlatform === plat.id ? 'active' : ''}`}
              onClick={() => setSelectedPlatform(plat.id)}
            >
              {plat.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}