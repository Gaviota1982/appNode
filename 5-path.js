const path = require('node:path');

console.log(path.sep)
//unir rutas con path.join
const filePath = path.join('./contenido','micarpeta','info.txt');
console.log(filePath)

const nombreBase = path.basename('./contenido/micarpeta/info.txt');
console.log(nombreBase);

const nombreFile = path.basename('./contenido/micarpeta/info.txt', '.txt');
console.log(nombreFile);
