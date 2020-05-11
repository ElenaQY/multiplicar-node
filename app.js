//requireds
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
console.log(argv);


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(`TABLA DEL ${argv.base}:\n`.cyan, tabla))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, `${archivo}`.yellow))
            .catch(err => console.log(err));

        break;
    default:
        console.log('Comando no reconocido');

}
console.log('Base: ', argv.base);
console.log('Límite: ', argv.limite);