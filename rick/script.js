async function buscar() {
  // 1. Pegar o ID do input com o mesmo ID do HTML ('personagem')
  const id = document.getElementById('personagem').value;

  // 2. Fazer a requisição na API
  const resposta = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const dados = await resposta.json();

  // 3. Exibir o resultado no elemento 'resultado'
  document.getElementById('resultado').innerHTML = `
    <h2>${dados.name}</h2>
    <img src="${dados.image}" width="150">
    <p>Status: ${dados.status}</p>
  `;
}