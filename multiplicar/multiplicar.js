const fs = require('fs'); //-> package de node

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base introducia, no es un número');
            return;
        }
        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += `${base}*${i}=${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });

    });
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base introducida, no es un número');
            return;
        }
        if (!Number(limite)) {
            reject('El limite introducido, no es un número');
            return;
        }
        let data = '\n';
        for (let i = 0; i <= limite; i++) {
            data += `${base}*${i}=${base * i} \n`;
        }
        resolve(data);
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}