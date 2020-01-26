const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {
    let tarea = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(tarea);

    return tarea;
}

module.exports = {
    crear
};