const fs = require('node:fs/promises');
const { text } = require('stream/consumers');
let cl = console.log;

// fs.readFile() es asíncrona
cl('Leyendo el primer archivo...');
fs.readFile('./info2.txt', 'utf-8')
    .then(text =>{
        cl('Este es el 1° texto', text);
    })

cl('Sigo haciendo código en javascript')

// fs.readFileSync() es síncrona
cl('Leyendo el segundo archivo...');
fs.readFile('./info.txt', 'utf-8')
    .then(text =>{
        cl('Este es el 2° texto', text);
    })