const fs = require('node:fs');
let cl = console.log;

//asíncrono callback

// fs.readFile() es asíncrona
cl('Leyendo el primer archivo...');
fs.readFile('./info2.txt', 'utf-8', (err, text) =>{
    cl(text);
});

cl('Sigo haciendo código en javascript')

// fs.readFile() es asíncrona
cl('Leyendo el segundo archivo...');
fs.readFile('./info.txt', 'utf-8', (err, text) =>{
    cl(text);
});