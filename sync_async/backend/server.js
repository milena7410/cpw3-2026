const fs = require('fs');

// 1. SÍNCRONO (Respeita a ordem exata: 1 -> 2)
// console.log('--- TESTE SÍNCRONO ---');
// console.log('1. Pediu o arquivo no caixa eletrônico...');
// fs.readFileSync('./uploads/diario.txt', 'utf-8');
//  console.log('2. O código esperou o arquivo ler para só depois imprimir isto!');

// 2. ASSÍNCRONO (O Node fura a fila! Vai imprimir: 1 -> 3 -> 2)
console.log('\n--- TESTE ASSÍNCRONO ---');
console.log('1. Pediu o arquivo ao garçom...');
fs.promises.readFile('./uploads/diario.txt', 'utf-8').then(() => {
    console.log('2. [RESPOSTA DO DISCO] O pedido finalmente chegou!');
});

console.log('3. O Node PASSOU A FRENTE e atendeu o Cliente 2 primeiro!');