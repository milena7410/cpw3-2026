const express = require('express');
const app = express();

app.use(express.json());

let musicas = [
    {
        "id": 1, 
        "titulo": "dark red",
        "artista": "Stance",
        "nota": 8.9
    },
    {
        "id": 2, 
        "titulo": "jetski",
        "artista": "melodi",
        "nota": 9.9
    }
]

app.get('/musicas', (req, res) => {
   res.json(musicas)
});

app.get('/musicas/top', (req, res) => {
   const top = musicas.filter(m => m.nota >= 9)
   if (!top) {
      return res.status(404).json("nao tem musica boa")
   }
   return res.status(200).json(top)
});

app.get('/musicas/:id', (req, res) => {
   const id = req.params.id
   const musica = musicas.find(m => m.id == id)
   if (!musica) {
      return res.status(404).json("Musica nao encontrada")
   }
   return res.status(200).json(musica)
});

app.post('/musicas', (req, res) => {
  const {titulo, artista, nota} = req.body
  if (!titulo || !artista || !nota) {
    return res.status(400).json("Verifique a estrutura do body enviado")
  }
  const novaMusica = {
    id:  musicas.length+1,
    musica: titulo,
    musica: artista,
    musica: nota
  }
  musicas.push(novaMusica)
  res.status(201).json(novaMusica, "add com sucesso")


});









app.listen(3001, () => console.log("Servidor rodando na porta 3001"));

