/**
 * Tablas de multiplicar en archivos
 */

// 3 tipos de REQUIRE
// para paquetes de Node
//const fs = require('fs');
// para paquetes no Nativos
// const fs = require('express');
// para archivos del proyecto
// const fs = require('../fs');


const argv = require('./config/yargs').argv;
const colors = require('colors');

// const multp = require('./mult/mult.js');
const { crearArchivo, listarTabla } = require('./mult/mult.js'); //destructuracion

let command = argv._[0];

switch(command){
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base,argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${archivo.green}`.red))
            .catch((e) => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//let base = 'abc';
// let base = 5;

// console.log(multp); // --> { crearArchivo: [Function: crearArchivo] }
// console.log(process.argv);
// let argv = process.argv;
// let argv2 = process.argv;
// console.log('Limite', argv.limite);
// console.log(argv2);

// let param = argv[2]; 
// let base = param.split('=')[1];

// crearArchivo(base)
//     .then((archivo) => console.log(`Archivo creado: ${archivo}`))
//     .catch((e) => console.log(e));