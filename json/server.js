const fs = require('fs').promises;
const path = require('path');

const caminho = path.join(__dirname, 'uploads', 'produtos.json');

async function gerenciarProdutos() {
  // 1. Garante que o arquivo existe com um array vazio []
  await fs.mkdir(path.dirname(caminho), { recursive: true });
  await fs.writeFile(caminho, '[]', { flag: 'wx' }).catch(() => {});

  // 2. LER (Vem como TEXTO)
  const texto = await fs.readFile(caminho, 'utf-8');
  
  // 3. PARSE (Texto -> Array JS)
  const produtos = JSON.parse(texto);
  console.log('Antes do push:', produtos);

  // 4. MANIPULAR (Adiciona um novo item no Array)
  produtos.push({ id: Date.now(), nome: 'Notebook' });

  // 5. STRINGIFY (Array JS -> Texto bonito com recuo de 2 espaços)
  const textoAtualizado = JSON.stringify(produtos, null, 2);

  // 6. SALVAR DE VOLTA NO DISCO
  await fs.writeFile(caminho, textoAtualizado);
  console.log('Depois do push:', produtos);
}

gerenciarProdutos();