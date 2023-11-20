// const fs = require('node:fs/promises');
import { readFile } from 'node:fs/promises';
let cl = console.log;

// fs.readFile() es asíncrona
cl('Leyendo el primer archivo...');
const text = await readFile('./info2.txt', 'utf-8');

cl('Este es el 1° texto', text);

cl('Sigo haciendo código en javascript')

// fs.readFileSync() es síncrona
cl('Leyendo el segundo archivo...');

const segundoTexto = await readFile('./info.txt', 'utf-8');

cl('Este es el 2° texto', segundoTexto);