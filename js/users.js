fetch("data/users.json")
  .then(res => res.json())
  .then(users => {
    const usuario = users.find(u => u.id === "temp-user-id");
    if (!usuario) return;

    const container = document.getElementById("perfil");
    if (!container) return;

    container.innerHTML = `
      <h2>${usuario.nome} (@${usuario.usuario})</h2>
      <p>${usuario.bio}</p>
      <p><strong>Email:</strong> ${usuario.email}</p>
      <p><strong>Localização:</strong> ${usuario.localizacao}</p>
      <p><strong>Interesses:</strong> ${usuario.interesses.join(", ")}</p>
      <p><strong>Ritmo:</strong> ${usuario.ritmo}</p>
      <p><strong>Distância Preferida:</strong> ${usuario.distanciaPreferida}</p>
      <p><strong>Nível:</strong> ${usuario.nivelExperiencia}</p>
    `;
  });
