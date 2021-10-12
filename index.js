//Mi primer servidor Backend
//Actividad 2.1
//Wilmer Villarreal
//Universidad Valle del Momboy

const express = require("express");

const servidor = express();

servidor.use(express.json());

require('./servidor/rutas/enlaces')(servidor); 

servidor.listen(5000, () => {
    console.log("El servidor se encuentra activo en el puerto 5000")
});