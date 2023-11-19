const fs = require('node:fs');
const stats = fs.statSync('./info.txt');
let cl = console.log;

cl(
    stats.isDirectory(), //si es un directorio
    stats.isFile(), //si es un fichero
    stats.isSymbolicLink(), //Si es un enlace simbólico
    stats.size, //Tamaño en byte
)