
var mongoose = require('mongoose');

var alumnoSchema= new mongoose.Schema({
    "nombre" : String,
    "apellido" : String,
    "email" : String,
    "id" : Number
},{collection:'alumnos'});

mongoose.model('Alumno',alumnoSchema);