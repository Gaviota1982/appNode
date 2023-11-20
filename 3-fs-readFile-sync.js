const fs = require('node:fs');
let cl = console.log;

//síncrono callback

// fs.readFile() es asíncrona
cl('Leyendo el primer archivo...');
const text = fs.readFileSync('./info2.txt', 'utf-8');
cl('Primer txt: ', text);
cl('Sigo haciendo código en javascript')

// fs.readFile() es asíncrona
cl('Leyendo el segundo archivo...');
const segundoTexto = fs.readFileSync('./info.txt', 'utf-8');
cl('Primer txt2: ', segundoTexto);

