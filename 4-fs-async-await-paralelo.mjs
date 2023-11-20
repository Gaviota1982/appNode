// const fs = require('node:fs/promises');
import { readFile } from 'node:fs/promises';
let cl = console.log;

//asíncrono paralelo

Promise.all([
    readFile('./info2.txt', 'utf-8'),
    readFile('./info.txt', 'utf-8')
]).then(([text, segundoTexto])=>{
    cl('primer texto: ',text)
    cl('segundo texto: ', segundoTexto)
});