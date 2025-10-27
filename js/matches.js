fetch("data/matches.json")
  .then(res => res.json())
  .then(matches => {
    const container = document.getElementById("match-list");
    if (!container) return;

    fetch("data/users.json")
      .then(res => res.json())
      .then(users => {
        matches.forEach(match => {
          const user = users.find(u => u.id === match.usuarioRelacionadoId);
          if (!user) return;

          const card = document.createElement("div");
          card.className = "match-card";
          card.style = "border:1px solid #ccc; padding:1rem; margin-bottom:1rem; border-radius:8px;";
          card.innerHTML = `
            <h3>${user.nome} (${user.usuario})</h3>
            <p>${user.bio}</p>
            <p><strong>Compatibilidade:</strong> ${match.porcentagemCompatibilidade}%</p>
            <p><strong>Status:</strong> ${match.status}</p>
          `;
          container.appendChild(card);
        });
      });
  });
