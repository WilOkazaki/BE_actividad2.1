

//Construccion de mi ciudad

estructuras =  {
    estructura1: {
        id: 1,
        nombre: "C.C Vista Park",
        tipo: "Centro comercial",
        Longitud: "4000 m2",
        lugar: "Carvajal-El Amparo"
    },
    estructura2: {
        id: 2,
        nombre: "Etanislao Carillo",
        tipo: "Liceo escolar",
        Longitud: "500 m2",
        lugar: "Carvajal-La Horqueta"
    },
    estructura3: {
        id: 3,
        nombre: "Urbanizacion el Indio",
        tipo: "Casas",
        Longitud: "600 m2",
        lugar: "Carvajal-El Amparo",
    },
    estructura4: {
        id: 4,
        nombre: "Calle Principal",
        tipo: "Calle",
        Longitud: "40 m2",
        lugar: "Carvajal",
    },
    estructura5: {
        id: 5,
        nombre: "Urbanizacion la Horqueta",
        tipo: "Apartamentos",
        Longitud: "700 m2",
        lugar: "Carvajal-La Horqueta",
    },
    estructura6: {
        id: 6,
        nombre: "Universidad Valle del Momboy",
        tipo: "Edificio",
        Longitud: "1000 m2",
        lugar: "Carvajal",
    },
    estructura7: {
        id: 7,
        nombre: "Calle Campo Alegre-Carvajal",
        tipo: "Calle",
        Longitud: "30 m2",
        lugar: "Carvajal-Campo Alegre",
    },
}

//Uso de GET. POST, DELETE, UPDATE
//Muestro con el metodo FindAll las estructuras de mi ciudad

exports.findAll = (req, res) => {

    console.log(JSON.stringify(estructuras, null, 4));
    
    res.status(200).end("------BIENVENIDO A MI CIUDAD------ \n\n"+JSON.stringify(estructuras, null, 4));

    Object.keys(estructuras).length
    
};

//Creo una nueva estructura
exports.create = (req, res) => {

    var nueva_estructura = req.body;

    estructuras["estructura" + nueva_estructura.id] = nueva_estructura;

    console.log(JSON.stringify(estructuras, null, 4));
    
    res.status(201).end("*ESTRUCTURA CREADA CORRECTAMENTE* \n\n" + JSON.stringify(nueva_estructura, null, 4));
};

//Elimino una extructura
exports.delete = (req, res) => {

    var borrar_estructura = estructuras["estructura" + req.params.id];

    delete estructuras["estructura" + req.params.id];

    console.log("estructura"+JSON.stringify(estructuras, null, 4));

    res.status(200).end("*ESTRUCTURA ELIMINADA CORRECTAMENTE* \n\n"+JSON.stringify(borrar_estructura, null, 4));
};

//Actualizo una extructura
exports.update = (req, res) => {

    var id = parseInt(req.params.id);

    var updatedestructura = req.body;

    if (estructuras["estructura" + id] != null) {

        estructuras["estructura" + id] = updatedestructura;

        console.log(JSON.stringify(estructuras, null, 4))

        res.status(200).end("ESTRUCTURA ACTUALIZADA \n\n" + JSON.stringify(updatedestructura, null, 4));

    } 
    else {

        res.status(404).end("ERROR, NO SE PUDO ACTUALIZAR \n\n");
    }
};