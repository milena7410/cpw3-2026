const fs = require('fs/promises');
async function converterJSON() {
  try { 
    const textoJSON = await fs.readFile('dados.json', 'utf-8');
   
    const jsonConvertido = JSON.parse(textoJSON);

    const jsonFormatado = jsonConvertido.map(chave => {
      return ` nome: ${chave.nome}\n
      email: ${chave.email} 
      telefone: ${chave.telefone}`
    });

    // Salva no disco rígido como um arquivo .json
    await fs.writeFile('jsonConvertido.txt', jsonFormatado);
    console.log("Sucesso....");
  } catch (erro) {
    console.error("Erro na conversão:", erro);
  }
}
converterJSON();