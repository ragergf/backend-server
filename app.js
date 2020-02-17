// Requires
var express = require('express');
var mongoose = require('mongoose');

// Inicializar variables
var app = express();

// conexion a la BD
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de Datos: \x1b[32m%s\x1b[0m', 'online');
});


//Rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: 'true',
        mensaje: 'peticion realzada correctamente'
    });
});

//Escuchar peticion
app.listen(3000, () => {

});