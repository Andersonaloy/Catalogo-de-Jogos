
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

// Solicita uma versão menor da imagem quando a URL permitir.
export function otimizarImagem(url) {
  if (!url) return 'https://via.placeholder.com/300x180';

  return url.replace(
    'media.rawg.io/media/',
    'media.rawg.io/media/resize/640/-/'
  );
}

export async function buscarJogos(platformId = '') {
  try {
    let url = `${BASE_URL}/games?key=${API_KEY}&page_size=12`;

    if (platformId) {
      url += `&platforms=${platformId}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();

    return (data.results || []).map((game) => ({
      ...game,
      background_image: otimizarImagem(game.background_image),
    }));
  } catch (error) {
    console.error('Erro ao buscar jogos:', error);
    return [];
  }
}
