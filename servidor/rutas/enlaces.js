


//Enlaces

module.exports = (servidor) => { 

    var estructuras = require('../ciudad/estructura');
    
    servidor.get('/ciudad/estructuras', estructuras.findAll);

    servidor.post('/ciudad/estructuras', estructuras.create);

    servidor.put('/ciudad/estructuras/:id', estructuras.update);

    servidor.delete('/ciudad/estructuras/:id', estructuras.delete);


}