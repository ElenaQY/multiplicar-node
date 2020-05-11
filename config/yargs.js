const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla a multiplicar', opt)
    .command('crear', 'Crea un fichero txt con la tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}