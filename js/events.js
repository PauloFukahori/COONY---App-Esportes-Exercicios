fetch("data/events.json")
  .then(res => res.json())
  .then(eventos => {
    const container = document.getElementById("event-list");
    if (!container) return;

    container.innerHTML = ""; // Limpa conteúdo anterior

    eventos.forEach(evento => {
      const card = document.createElement("div");
      card.className = "evento-card";
      card.style = `
        border: 1px solid hsl(var(--border));
        border-radius: var(--radius);
        padding: 1rem;
        box-shadow: var(--shadow);
        margin-bottom: 1.5rem;
        background-color: var(--background);
      `;

      card.innerHTML = `
        <img src="${evento.imagem}" alt="${evento.titulo}" style="width:100%; max-width:400px; border-radius: var(--radius); margin-bottom: 1rem;" />
        <h2 style="margin-bottom: 0.5rem;">${evento.titulo}</h2>
        <p><strong>📍 Local:</strong> ${evento.local}</p>
        <p><strong>📅 Data:</strong> ${new Date(evento.data).toLocaleString("pt-BR")}</p>
        <p><strong>📏 Distância:</strong> ${evento.distancia || "Não especificada"}</p>
        <p><strong>🔥 Dificuldade:</strong> ${evento.dificuldade}</p>
        <p><strong>👥 Máx. Participantes:</strong> ${evento.maxParticipantes}</p>
        <p style="margin-top: 1rem; color: hsl(var(--muted-foreground));">${evento.descricao}</p>
        <a href="event-detail.html#${evento.id}" class="button" style="margin-top: 1rem; display: inline-block;">Ver Detalhes</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Erro ao carregar eventos:", err);
    const container = document.getElementById("event-list");
    if (container) {
      container.innerHTML = "<p>Não foi possível carregar os eventos no momento.</p>";
    }
  });
