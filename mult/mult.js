const fs = require('fs');
const colors = require('colors');

// let listarTabla = (base,limite = 10) => {
//     return new Promise((resolve,reject)=>{
//         for(let i = 1; i<=limite; i++){
//             console.log(`${base} * ${i} = ${base * i}`);
//         }
//     });
// };

let listarTabla = (base,limite = 10) => {

    console.log('================'.yellow);
    console.log(`Tabla de ${base}`.green);
    console.log('================'.blue);

    for(let i = 1; i<=limite; i++){
        console.log(`${base} * ${i} = ${base * i}`);
    }
    
};

let crearArchivo = (base,limite = 10) =>{    
    return new Promise((resolve,reject)=>{
        
        if(!Number(base)){
            reject(`El valor introducido "Base = ${base}" no es un número!`);
            return;
        }else if(!Number(limite)){
            reject(`El valor introducido "Limite = ${limite}" no es un número!`);
            return;
        };
        
        let data = '';

        for(let i = 1; i<=limite; i++){
            data += `${base} * ${i} = ${base * i}\n`;
        };
        
        fs.writeFile(`tables/tabla-${base}-lim${limite}.txt`,data,(e)=>{
            if (e) 
                reject(e);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

// Para exportar funciones y objetos
module.exports = {
    crearArchivo,
    listarTabla
}
