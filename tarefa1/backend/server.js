const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('public')); // Serve a pasta com o HTML

const caminho = path.join(__dirname, 'tarefas.json');

// ROTA GET: Busca as tarefas salvas no disco
app.get('/api/tarefas', async (req, res) => {
  await fs.writeFile(caminho, '[]', { flag: 'wx' }).catch(() => {});
  const texto = await fs.readFile(caminho, 'utf-8');
  res.json(JSON.parse(texto));
});

// ROTA POST: Escreve a nova tarefa no arquivo
app.post('/api/tarefas', async (req, res) => {
  const texto = await fs.readFile(caminho, 'utf-8');
  const tarefas = JSON.parse(texto);

  tarefas.push({ id: Date.now(), descricao: req.body.descricao });

  await fs.writeFile(caminho, JSON.stringify(tarefas, null, 2));
  res.status(201).json(tarefas);
});

app.listen(3000, () => console.log('Rodando em http://localhost:3000'));