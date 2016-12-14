var mongoose = require('mongoose')

var asignaturaSchema=new mongoose.Schema({
    "nombre" : String,
    "ciclo" : String,
    "curso" : Number
},{ collection: 'asignaturas'});

mongoose.model('Asignatura', asignaturaSchema);