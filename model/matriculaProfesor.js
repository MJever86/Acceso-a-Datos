var mongoose = require('mongoose')

var matriculaProfesorSchema=new mongoose.Schema({
    "nombreProfesor" : String,
    "apellido" : String,
    "email" : String,
    "id" : Number,
    "nombreAsignatura" : String,
    "ciclo" : String,
    "curso" : Number,
    "inicio": Date,
    "fin": Date,
    "horas":Number
},{ collection: 'matriculasProfesor' });
mongoose.model('MatriculaProfesor', matriculaProfesorSchema);