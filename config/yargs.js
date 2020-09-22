const { command } = require('yargs');

const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'descripcion de la tarea por hacer'
    }
};

const actualizar = {
    descripcion: {
        demand: true,
        alias: 'd',
    },
    completado: {
        default: true,
        alias: 'c',
        type: 'boolean',
        desc: 'Marca como completado una tarea pendiente.'
    }
};

const borrar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Eliminar'
    }
};
const argv = command('crear', 'Crear las lista de tareas', descripcion)
    .command('actualizar', 'actualizar la lista de tareas', actualizar)
    .command('borrar', 'borra una tarea por hacer', borrar)
    .help().argv;

module.exports = {
    argv,
};