const os = require('node:os');
let cl = console.log;

cl('Información del sistema Operativo');
cl('---------------------------------');
cl('Nombre del Sistema Operativo ', os.platform());
cl('Versión del Sistema Operativo ', os.release());
cl('Arquitectura ', os.arch());
cl('CPUs ', os.cpus());
cl('Memoria libre ', os.freemem() /1024 / 1024 );
cl('Memoria total ', os.totalmem() /1024 / 1024);
cl('---------------------------------');