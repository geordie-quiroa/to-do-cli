const opcs_crear = {
    descripcion: {
        desc: 'Descripcion de la tarea.',
        alias: 'd',
        demand: true
    }
};

const opcs_actualizar = {
    descripcion: {
        desc: 'Nombre de la tarea a actualizar.',
        alias: 'd',
        demand: true
    },
    completado: {
        desc: 'Estado al que se cambiara la tarea.',
        alias: 'c',
        default: true

    }
};

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea con la descripción esperada.', opcs_crear)
    .command('actualizar', 'Actualiza el estado de una tarea.', opcs_actualizar)
    .help()
    .argv;

module.exports = {
    argv
};