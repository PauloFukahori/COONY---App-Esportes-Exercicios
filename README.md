🏃‍♂️ Coony — Plataforma de Eventos Esportivos

📌 Visão Geral
Coony é uma plataforma vibrante e social voltada para atletas e entusiastas de esportes como corrida, ciclismo, yoga, trilha e natação. Ela permite que usuários descubram eventos, criem suas próprias atividades e se conectem com pessoas com interesses semelhantes — tudo em um ambiente visualmente energético e fácil de usar.

🎯 Objetivos do Projeto
- 🔍 Descobrir eventos esportivos próximos com filtros inteligentes
- 📝 Criar e compartilhar eventos personalizados
- 🤝 Conectar usuários com base em interesses, ritmo e distância
- 🌐 Construir comunidade entre atletas de todos os níveis

🧪 Tecnologias Utilizadas

Frontend:
  - 🧭 HTML5
  - 🎨 CSS3
  - ⚙️ JavaScript puro (sem frameworks)
  - 📁 JSON para armazenamento de dados simulados

Backend:
  - ❌ Ainda não implementado (previsto para futura versão com API e persistência)

📦 Estrutura de Pastas

- `/index.html` — Página inicial
- `/events.html` — Lista de eventos com visualização em grade e mapa
- `/event-detail.html` — Detalhes de cada evento
- `/event-create.html` — Formulário de criação de evento
- `/match.html` — Compatibilidade entre usuários
- `/profile.html` — Perfil do usuário

- `/data/`
  - `events.json` — Lista de eventos
  - `users.json` — Perfis de usuários
  - `matches.json` — Compatibilidades
  - `rsvps.json` — Confirmações de presença

- `/js/`
  - `events.js` — Renderiza eventos dinamicamente
  - `event-detail.js` — Exibe detalhes e participantes
  - `matches.js` — Mostra compatibilidades
  - `users.js` — Carrega perfil do usuário
  - `styles.js` — Alternância de tema claro/escuro

- `/css/`
  - `styles.css` — Estilos visuais personalizados

- `/src/ux/`
  - `design_guidelines.md` — Diretrizes de design e identidade visual

🖌️ Paleta de Cores

- 🔵 Coony Blue (#0052B3) — Navegação, cabeçalhos
- 🟢 Coony Green (#00C781) — Sucesso e confirmações
- 🔴 Coony Red (#FF4040) — Erros e alertas
- 🟡 Coony Yellow (#FFCC00) — Avisos e destaques

✨ Funcionalidades

1️⃣ Descoberta de Eventos
- 🗂️ Visualização em grade ou mapa
- 🔍 Filtros por tipo, dificuldade e localização
- 🧠 Busca inteligente
- 📍 Marcadores personalizados no mapa

2️⃣ Gestão de Eventos
- 📝 Formulário completo de criação
- 📌 Locais populares pré-definidos
- 🏷️ Classificação por esporte e dificuldade
- 👥 Limite de participantes e RSVP

3️⃣ Compatibilidade de Usuários
- 💞 Interface em cards
- 📊 Cálculo de porcentagem de compatibilidade
- ✅ Conectar ou ❌ Recusar
- 👤 Exibição de perfil com interesses e ritmo

4️⃣ Sistema de Design
- 🌙 Tema escuro por padrão (com alternância)
- 📐 Layout responsivo com CSS puro
- 🖱️ Efeitos de hover e elevação
- 🌈 Cores vibrantes e identidade visual única

🧬 Modelos de Dados

👤 Usuário
- Nome, bio, avatar, localização
- Interesses esportivos
- Ritmo, distância preferida, nível de experiência

📅 Evento
- Título, descrição, tipo de esporte
- Data, horário, localização
- Distância, dificuldade, organizador
- Limite de participantes e status de RSVP

📋 RSVP
- Conecta usuários a eventos
- Status: confirmado, interessado

💞 Match
- Conecta dois usuários
- Porcentagem de compatibilidade
- Status: pendente, aceito, recusado

🆕 Atualizações Recentes (outubro/2025)
- ✅ Estrutura completa com HTML, CSS e JS
- 🖼️ Cards dinâmicos de eventos
- 📚 Navegação entre páginas com hash
- 🔍 Filtros e busca funcional
- 🗺️ Mapa interativo com iframe
- 💞 Compatibilidade entre usuários
- 🌗 Tema escuro/claro com tokens CSS

⚙️ Preferências do Usuário
- 🌙 Tema padrão: escuro
- 🔤 Fontes: Inter (sans), JetBrains Mono (mono)
- 🎨 Design vibrante e energético
- 📱 Abordagem mobile-first

🚧 Próximos Passos
- 🔐 Autenticação de usuários
- 💾 Persistência real de dados com backend
- 🔄 CRUD completo via API
- 📡 Atualizações em tempo real
- 🛰️ Rastreamento GPS para corridas ao vivo
- 💬 Chat entre participantes
- 🧠 Refinamento do algoritmo de compatibilidade
- ⭐ Sistema de avaliações e reputação

