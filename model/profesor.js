/* var mongoose = require('mongoose');  
var blobSchema = new mongoose.Schema({  
  name: String,
  badge: Number,
  dob: { type: Date, default: Date.now },
  isloved: Boolean
});
mongoose.model('Blob', blobSchema);*/

var mongoose = require('mongoose');

var profesorSchema= new mongoose.Schema({
    "nombre" : String,
    "apellido" : String,
    "email" : String,
    "id" : Number
},{collection:'profesores'}); //aquí cambiamos el nombre de la coleccion
//dentro de rockMongo

mongoose.model('Profesor',profesorSchema);

