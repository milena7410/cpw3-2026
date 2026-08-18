const express = require('express');
const app = express();

// 1. Define uma rota (endpoint)
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Menu Principal</title>
      <style>
        body { font-family: sans-serif; padding: 2rem; }
        ul { line-height: 2; }
      </style>
    </head>
    <body>
      <h1>API - Menu Principal</h1>
      <ul>
       
        <li><a href="/aluno">/aluno - Status do Aluno</a></li>
      </ul>
    </body>
    </html>
  `);
});

// app.get('/', (req, res) => {
//   res.send('BEM-VINDOOOOOO :)');
// });

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

app.get('/status', (req, res) => {
  res.send(`
    <h2>Status do Servidor</h2>
    <p><strong>Estado:</strong>blablablaab</p>
    <p><strong>Tempo no ar:</strong> ${Math.floor(process.uptime())} segundos</p>
    <p><strong>Horário do Servidor:</strong> ${new Date().toLocaleString('pt-BR')}</p>
  `);
});

// 2. Lida o servidor para escutar na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

