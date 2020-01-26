const { argv } = require('./config/yargs');

const { crear } = require('./tareas/tareas');

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log(comando, ' - Crea una nueva tarea con una descripcion.');
        console.log(crear(argv.descripcion));
        break;
    case 'listar':
        console.log(comando, ' - Lista todas las tareas por hacer.');
        break;
    case 'actualizar':
        console.log(comando, ' - Actualiza el estado de completacion de una tarea.');
        break;
    default:
        console.log(comando, ' - Este comando no es valido.');
}