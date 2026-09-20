import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from './App';

test('Renderiza o título principal do catálogo', () => {
  render(<App />);
  const titleElement = screen.getByText(/Catálogo de Jogos/i);
  expect(titleElement).toBeDefined();
});