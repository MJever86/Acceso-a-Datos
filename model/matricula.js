var mongoose = require('mongoose')

var matriculaSchema=new mongoose.Schema({
    "nombreAlumno" : String,
    "apellido" : String,
    "email" : String,
    "id" : Number,
    "nombreAsignatura" : String,
    "ciclo" : String,
    "curso" : Number,
    "inicio": Date,
    "fin": Date
},{ collection: 'matriculas' });
mongoose.model('Matricula', matriculaSchema);