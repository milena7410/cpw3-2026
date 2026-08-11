const express = require('express');
const app = express();

// 1. Define uma rota (endpoint)
app.get('/', (req, res) => {
  res.send('BEM-VINDOOOOOO :)');
});

app.get('/aluno', (req, res) => {
  res.send('ROTA OK');
});

app.get("/aluno/:nome", (req, res) => {
       const nome = req.params.nome;
       res.send(`Ola, ${nome}!`);
   });

app.get("/aluno/:a/:b", (req, res) => {
       const a = Number(req.params.a);
       const b = Number(req.params.b);
       const resultado = a + b ;
       res.send(`O resultado é, ${resultado}!`);
   });   



// 2. Lida o servidor para escutar na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

