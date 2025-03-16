# Ciclo Básico - Plataforma de Cursos Online

Uma plataforma de cursos online gratuitos produzidos por instituições públicas brasileiras, desenvolvida como um projeto de migração de um site HTML estático para uma Single Page Application (SPA) moderna com Vue 3.

## 📋 Descrição do Projeto

O Ciclo Básico é uma plataforma educacional que visa promover a educação pública, gratuita e de qualidade. Este projeto consiste na migração de um site tradicional HTML/CSS/JavaScript para uma aplicação moderna em Vue 3, mantendo toda a identidade visual e funcionalidades do site original, porém com melhorias na experiência do usuário e no código.

## 🚀 Tecnologias Utilizadas

- **Vue 3**: Framework JavaScript progressivo para construção de interfaces de usuário
- **TypeScript**: Superset de JavaScript com tipagem estática
- **Vite**: Build tool e servidor de desenvolvimento
- **Vue Router**: Sistema de rotas oficial para Vue.js
- **Bootstrap 5**: Framework CSS para desenvolvimento responsivo
- **Bootstrap Icons**: Biblioteca de ícones

## 🔧 Configuração do Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/ciclo-basico-vue.git
   cd ciclo-basico-vue
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse o projeto no navegador:
   ```
   http://localhost:5173
   ```

### Build para produção

```bash
npm run build
# ou
yarn build
```

## 📁 Estrutura do Projeto

```
src/
├── assets/       # Arquivos estáticos (imagens, CSS)
├── components/   # Componentes Vue reutilizáveis
├── pages/        # Componentes de página
├── router/       # Configuração do Vue Router
├── utils/        # Utilitários e funções auxiliares
├── App.vue       # Componente raiz
└── main.ts       # Ponto de entrada da aplicação
```

## ✨ Funcionalidades Implementadas

- **Sistema de Rotas**: Navegação suave entre páginas sem recarregamento
- **Formulário de Contato**: Com validação reativa de campos
- **Formulário de Cadastro**: Com validação e busca automática de endereço via CEP
- **Catálogo de Cursos**: Exibição de cursos recomendados e recentes
- **Página Sobre**: Informações sobre a plataforma e equipe
- **Modal**: Visualização ampliada de imagens
- **Design Responsivo**: Interface adaptável a diferentes tamanhos de tela

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença [MIT](LICENSE).
