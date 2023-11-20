const http = require('node:http');

const servidor= http.createServer((req,res)=> {
    res.end('Hola gente');
 })

 servidor.listen(0, ()=>{
    console.log(`Servidor listening en http://localhost:${servidor.address().port}`)
 })