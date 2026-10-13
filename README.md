
# 🎮 Catálogo de Jogos

Aplicação web desenvolvida com React e Vite que permite consultar jogos, filtrar por plataforma e salvar jogos favoritos. O projeto utiliza a API da RAWG para obter as informações dos jogos.

## 🔗 Acesse o projeto

[Catálogo de Jogos — versão publicada](https://andersonaloy.github.io/Catalogo-de-Jogos/)

## 🛠️ Tecnologias utilizadas

- React
- JavaScript
- Vite
- CSS
- API REST da RAWG
- Git e GitHub
- GitHub Actions para publicação

## ✨ Funcionalidades

- Listagem de jogos obtidos pela API da RAWG.
- Filtro de jogos por plataforma.
- Adição e remoção de jogos dos favoritos.
- Armazenamento dos favoritos no navegador usando `localStorage`.
- Interface responsiva para diferentes tamanhos de tela.

## ⚡ Otimização de desempenho

O projeto foi analisado com o Lighthouse, disponível nas ferramentas de desenvolvedor do Google Chrome. Após a análise inicial, foram realizadas melhorias para reduzir o carregamento de recursos e otimizar a exibição das imagens.

### Melhorias implementadas

- **Otimização de imagens:** ajuste das URLs das imagens da RAWG para solicitar versões redimensionadas, reduzindo a quantidade de dados transferidos pela rede.
- **Carregamento de imagens:** configuração de carregamento prioritário para a primeira imagem visível e carregamento tardio (`loading="lazy"`) para as demais imagens, conforme a implementação do componente `GameCard`.
- **Decodificação assíncrona:** utilização de `decoding="async"` nas imagens.
- **Tratamento de erros da API:** verificação da resposta HTTP e tratamento de falhas durante a busca dos jogos.
- **Medição com Lighthouse:** comparação dos resultados antes e depois das otimizações para avaliar o impacto das mudanças.


## 📊 Resultados do Lighthouse

| Métrica | Antes | Depois |
|---|---:|---:|
| Performance | 96 | 99 |
| First Contentful Paint (FCP) | 0,3 s | 0,3 s |
| Largest Contentful Paint (LCP) | 1,4 s | 1,0 s |
| Total Blocking Time (TBT) | 0 ms | 0 ms |
| Cumulative Layout Shift (CLS) | 0 | 0 |
| Speed Index (SI) | 0,7 s | 0,4 s |


### Relatório antes das otimizações

![Relatório Lighthouse antes das otimizações](relatorios/Antes.pdf)

### Relatório depois das otimizações

![Relatório Lighthouse depois das otimizações](relatorios/Depois.pdf)


## 🚀 Como executar o projeto localmente

### Pré-requisitos

- Node.js instalado.
- npm instalado.
- Uma chave de API da RAWG.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Andersonaloy/Catalogo-de-Jogos.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd catalogo-de-Jogos
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e configure sua chave da RAWG:

   ```env
   VITE_RAWG_API_KEY=sua_chave_aqui
   ```

5. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

6. Abra no navegador o endereço informado pelo Vite no terminal.

### Gerar a versão de produção

Para gerar a versão otimizada do projeto, execute:

```bash
npm run build
```

Para visualizar a versão de produção localmente, execute:

```bash
npm run preview
```

## 📚 Aprendizados

Este projeto permitiu praticar o consumo de uma API REST, o desenvolvimento de interfaces com React, o gerenciamento de estado, a persistência de dados no navegador e a análise de desempenho com o Lighthouse.

A atividade de otimização também ajudou a compreender como o tamanho das imagens, as prioridades de carregamento e as métricas de desempenho influenciam a experiência do usuário.

## 👨‍💻 Autor

**Anderson Altenhofen Aloy Ferreira**

[GitHub](https://github.com/Andersonaloy)
