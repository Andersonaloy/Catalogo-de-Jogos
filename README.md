# 🎮 Catálogo de Jogos com Lista de Favoritos

Uma aplicação web desenvolvida com **React** e **Vite**, que consome a [RAWG API](https://rawg.io/apidocs) para listar jogos, permitir o filtro por plataformas e salvar jogos favoritos no armazenamento local do navegador (`localStorage`).

---

## ⚙️ Pipeline CI/CD

O projeto utiliza GitHub Actions para automatizar a validação e o deploy.

A cada push ou pull request na branch `main` são executadas as seguintes etapas:

- Instalação das dependências (`npm ci`)
- Verificação do código (`npm run lint`)
- Execução dos testes (`npm run test`)
- Geração do build (`npm run build`)
- Publicação automática no GitHub Pages

---

## 🔗 Link da Aplicação em Produção

- 🌐 **Site Publicado:** [https://andersonaloy.github.io/Catalogo-de-Jogos/](https://andersonaloy.github.io/Catalogo-de-Jogos/)

---

## 💻 Pré-requisitos para Execução Local

Antes de começar, você precisará ter instalado em sua máquina:

* **Node.js**: Versão `22.x` ou superior.
* **npm**: Gerenciador de pacotes (geralmente vem instalado junto com o Node.js).
* **Git**: Para clonagem do repositório.
* **Chave de API da RAWG**: Gratuita, obtida cadastrando-se em [rawg.io/apidocs](https://rawg.io/apidocs).

---

## 🛠️ Passo a Passo para Executar o Projeto Localmente

### 1. Clonar o repositório
Abra o terminal e execute o comando abaixo para clonar o repositório:

```bash
git clone https://github.com/Andersonaloy/Catalogo-de-Jogos.git