const { error } = require('node:console');
const fs = require('node:fs/promises');
const path = require('node:path');

const carpeta = process.argv[2] ?? '.'  //argv[2] es la posición 0 es Node, 1 posición es el fichero
                                        // el 2 queremos averiguar..?? es nullis coalescing eperator

async function ls(carpeta){
   let files ;
    try{
       files = await fs.readdir(carpeta)
    } catch{
    console.error(`No se pudo leer el directorio ${carpeta}`)
    process.exit(1);
   }
   const filePromise = files.map(async file =>{
    
        const filePath = path.join(carpeta, file)
        let stats;

        try{
           stats = await fs.stat(filePath) // fs.stat nos da la info del archivo
        }catch{
            console.error(`No se pudo leer el directorio ${carpeta}`)
            process.exit(1);
        }
        
        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : '-';
        const fileSize = stats.size;
        const fileModifed = stats.mtime.toLocaleString();

        return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModifed}`
   });
   const fileInfo = await Promise.all(filePromise);
   fileInfo.forEach(fileInfos => console.log(fileInfos));
}

ls(carpeta)

