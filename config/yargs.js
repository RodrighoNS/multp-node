const opts = {
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
                //.command('listar','Imprime en consola la tabla de multp',{
                .command('listar','Imprime en consola la tabla de multp',opts)
                .command('crear','Crea archivo que contiene la tabla de multp',opts)
                .help()
                .argv;

module.exports = {
    argv
}
            