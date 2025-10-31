# Portfolio Dandanp3 🚀

Portfolio pessoal moderno e interativo desenvolvido com Next.js 16, apresentando um design sofisticado com animações dinâmicas e sistema de temas.

## ✨ Características

### Design e Interface
- **Sistema de Temas**: Alternância suave entre Light Mode e Dark Mode com animação do ícone (lua → sol)
- **Esquema de Cores**: 
  - Dark Mode: Preto e roxo com gradientes vibrantes
  - Light Mode: Branco e tons claros com acentos em roxo
- **Animações Dinâmicas**: Efeitos de fade-in, slide-in, zoom, float e glow em todas as seções
- **Design Responsivo**: Totalmente adaptável para desktop, tablet e mobile

### Seções do Portfolio

1. **Hero Section**: Apresentação inicial com efeito de digitação e partículas animadas
2. **Sobre Mim**: Descrição pessoal e profissional
3. **Tecnologias e Habilidades**: Grid de tecnologias com ícones e animações hover
4. **Projetos**: Carrossel 3D interativo com projetos em destaque
5. **Experiência**: Timeline de experiências profissionais
6. **Contato**: Formulário de contato e links para redes sociais

### Funcionalidades Especiais

#### Carrossel 3D de Projetos
- Projeto central em destaque (maior)
- Projetos laterais em escala reduzida
- Navegação por botões, clique, teclado ou indicadores
- Transições suaves com efeito de profundidade
- Loop infinito de projetos

#### Sistema de Temas
- Transição gradual entre temas
- Animação do ícone lua/sol
- Persistência da preferência do usuário
- Cores otimizadas para cada modo

## 🛠️ Tecnologias Utilizadas

### Core
- **Next.js 16**: Framework React com App Router
- **React 19**: Biblioteca JavaScript para interfaces
- **TypeScript**: Tipagem estática para JavaScript
- **Tailwind CSS v4**: Framework CSS utility-first

### UI e Animações
- **shadcn/ui**: Componentes de UI reutilizáveis
- **Lucide React**: Biblioteca de ícones
- **React Icons**: Ícones adicionais (SiPython, SiDjango, etc.)
- **Framer Motion**: Animações e transições (opcional para expansão)

### Fontes
- **Inter**: Fonte principal para texto
- **JetBrains Mono**: Fonte monoespaçada para código

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório ou baixe o ZIP do projeto

2. Instale as dependências:
\`\`\`bash
npm install
# ou
yarn install
\`\`\`

> **Nota**: O projeto inclui um arquivo `.npmrc` que resolve automaticamente conflitos de dependências entre React 19 e algumas bibliotecas. Você não precisa se preocupar com erros de peer dependencies!

3. Execute o servidor de desenvolvimento:
\`\`\`bash
npm run dev
# ou
yarn dev
\`\`\`

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

### Build para Produção

\`\`\`bash
npm run build
npm start
\`\`\`

## 🎨 Personalização

### Adicionar Novas Tecnologias

Edite o arquivo `components/skills.tsx` e adicione novos itens ao array `skills`:

\`\`\`tsx
const skills = [
  // ... tecnologias existentes
  {
    name: "Nova Tecnologia",
    icon: SiIcone, // Importe o ícone apropriado
    color: "#cor-hex"
  }
]
\`\`\`

### Adicionar Novos Projetos

Edite o arquivo `components/projects.tsx` e adicione novos projetos ao array `projects`:

\`\`\`tsx
const projects = [
  // ... projetos existentes
  {
    title: "Nome do Projeto",
    description: "Descrição do projeto",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Tag1", "Tag2", "Tag3"],
    link: "https://seu-projeto.com"
  }
]
\`\`\`

### Adicionar Experiências

Edite o arquivo `components/experience.tsx` e adicione ao array `experiences`:

\`\`\`tsx
const experiences = [
  // ... experiências existentes
  {
    title: "Cargo",
    company: "Empresa",
    period: "Período",
    description: "Descrição das responsabilidades"
  }
]
\`\`\`

### Modificar Informações Pessoais

- **Hero Section**: Edite `components/hero.tsx`
- **Sobre Mim**: Edite `components/about.tsx`
- **Contato**: Edite `components/contact.tsx`

## 🎯 Estrutura do Projeto

\`\`\`
portfolio-dandanp3/
├── app/
│   ├── layout.tsx          # Layout principal com fontes
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais e variáveis de tema
├── components/
│   ├── navigation.tsx      # Barra de navegação
│   ├── theme-toggle.tsx    # Toggle de tema
│   ├── hero.tsx            # Seção hero
│   ├── about.tsx           # Seção sobre mim
│   ├── skills.tsx          # Seção de tecnologias
│   ├── projects.tsx        # Carrossel de projetos
│   ├── experience.tsx      # Seção de experiência
│   └── contact.tsx         # Seção de contato
├── .npmrc                  # Configuração npm para resolver dependências
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions para deploy automático
└── README.md               # Este arquivo
\`\`\`

## 🚀 Deploy

### GitHub Pages (Configurado e Pronto!)

Este projeto já está totalmente configurado para deploy automático no GitHub Pages. Siga estes passos simples:

#### 1. Crie um repositório no GitHub
- Vá para [GitHub](https://github.com) e crie um novo repositório
- **IMPORTANTE**: Nomeie o repositório como `portfolio-dandanp3` (ou edite o `basePath` no `next.config.mjs`)

#### 2. Faça push do código
\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/portfolio-dandanp3.git
git push -u origin main
\`\`\`

#### 3. Configure o GitHub Pages
1. Vá para o repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione **GitHub Actions**
5. Pronto! O deploy será feito automaticamente

#### 4. Acesse seu portfolio
Após alguns minutos, seu portfolio estará disponível em:
\`\`\`
https://SEU-USUARIO.github.io/portfolio-dandanp3/
\`\`\`

#### Atualizações Futuras
Sempre que você fizer push para a branch `main`, o GitHub Actions irá automaticamente:
- Instalar as dependências
- Fazer o build do projeto
- Fazer deploy para o GitHub Pages

**Não precisa fazer mais nada!** Apenas edite o código e faça push.

### Vercel (Alternativa Recomendada)
1. Faça push do código para GitHub
2. Conecte o repositório no [Vercel](https://vercel.com)
3. Deploy automático configurado

### Outras Plataformas
O projeto é compatível com qualquer plataforma que suporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📝 Licença

Todos os direitos reservados © Dandanp3

## 🤝 Contato

Para mais informações ou colaborações, entre em contato através das redes sociais disponíveis no portfolio.

---

Desenvolvido com ❤️ usando Next.js e React
# portfolio
