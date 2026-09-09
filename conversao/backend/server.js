const fs = require('fs/promises');
async function converterTxtParaJson() {
  try {
    const textoBruto = await fs.readFile('dados_brutos.txt', 'utf-8');
   
    const linhas = textoBruto.split('\n').filter(linha => linha.trim() !== '');
    const alunosObjeto = linhas.map(linha => {
      const [nome, nota, curso] = linha.split(','); 
      return {
        nome: nome.trim(), 
        nota: Number(nota.trim()), 
        curso: curso.trim()
      };
    });

    const textoJson = JSON.stringify(alunosObjeto, null, 2);
    // Salva no disco rígido como um arquivo .json
    await fs.writeFile('alunos_convertidos.json', textoJson);
    console.log("Sucesso! Arquivo 'alunos_convertidos.json' criado com estrutura de dados.");
  } catch (erro) {
    console.error("Erro na conversão:", erro);
  }
}
converterTxtParaJson();