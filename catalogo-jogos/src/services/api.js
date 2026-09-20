const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api';

// Mapeamento das principais plataformas na RAWG API
export const PLATAFORMAS = [
  { id: '', name: 'Todas' },
  { id: '4', name: 'PC' },
  { id: '187', name: 'PlayStation 5' },
  { id: '1', name: 'Xbox One' },
  { id: '7', name: 'Nintendo Switch' },
];

export async function buscarJogos(platformId = '') {
  try {
    let url = `${BASE_URL}/games?key=${API_KEY}&page_size=12`;
    
    // Se selecionou uma plataforma específica, adiciona ao parâmetro da requisição
    if (platformId) {
      url += `&platforms=${platformId}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Erro ao buscar jogos:', error);
    return [];
  }
}