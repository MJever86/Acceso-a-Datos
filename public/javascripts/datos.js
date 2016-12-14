var mongoose = require('mongoose');
var db= require('../../model/db.js');
var profesor=require('../../model/profesor.js');
var alumno=require('../../model/alumno.js');
var asignatura=require('../../model/asignatura.js');
var matricula=require('../../model/matricula.js');
var matriculaProfesor=require('../../model/matriculaProfesor.js');

//metodos para generar los datos de alumnos, profesores y asignaturas, en este caso 10
generaAlumnos(10);
generaProfesores(10);
generaAsignaturas();

function aleatorio(tamano)  {
    return ( Math.floor(Math.random() * tamano) ); 
}

//inserta datos de alumnos
function generaAlumnos(cuantas){
    var nombres = [ 'Pedro', 'Juan', 'Pablo', 'Miguel', 'Jacinto', 'José', 'Samuel', 'Ángel', 'Ramón', 'Julian', 'Lola', 'María', 'Antonia', 'Josefa', 'Teresa', 'Manuela', 'Inmaculada'];
    var apellidos = [ 'Antón', 'Baeza', 'Caparrós', 'Díaz' , 'Esteban', 'Fernández' , 'García' , 'Heredia' , 'Iniesta', 'Jiménez', 'Lara', 'Martínez', 'Navarro', 'Ortega', 'Pérez', 'Quesada', 'Ruiz', 'Sánchez', 'Toledano', 'Ureña', 'Vega', 'Yeguas', 'Zamorano'  ];

    console.log('Nombres disponibles: '+ nombres.length);
    console.log('Apellidos disponibles: '+ apellidos.length);
    var persona;
    var nombre;
    var apellido1, apellido2;

    for (var i=0; i<cuantas; i++) {
        nombre=nombres[aleatorio(nombres.length)];
        apellido1=apellidos[aleatorio(nombres.length)];
        apellido2=apellidos[aleatorio(nombres.length)];
        var Alumno=mongoose.model('Alumno');
      Alumno.create({
      "nombre": nombre,
      "apellido":apellido1+" "+apellido2,
      "email": nombre[0]+apellido1+apellido2+"@inventado.es",
      "id": i
    }, function (err, alumnos){
      if(!err){
       console.log("Alumnos insertados correctamente")
       }else
        console.log("Error al insertar alumnos")
    });
    }
}

// inserta datos de profesores
function generaProfesores(cuantas){
    var nombres = [ 'Pedro', 'Juan', 'Pablo', 'Miguel', 'Jacinto', 'José', 'Samuel', 'Ángel', 'Ramón', 'Julian', 'Lola', 'María', 'Antonia', 'Josefa', 'Teresa', 'Manuela', 'Inmaculada'];
    var apellidos = [ 'Antón', 'Baeza', 'Caparrós', 'Díaz' , 'Esteban', 'Fernández' , 'García' , 'Heredia' , 'Iniesta', 'Jiménez', 'Lara', 'Martínez', 'Navarro', 'Ortega', 'Pérez', 'Quesada', 'Ruiz', 'Sánchez', 'Toledano', 'Ureña', 'Vega', 'Yeguas', 'Zamorano'  ];

    console.log('Nombres disponibles: '+ nombres.length);
    console.log('Apellidos disponibles: '+ apellidos.length);

    for (var i=0; i<cuantas; i++) {
        nombre=nombres[aleatorio(nombres.length)];
        apellido1=apellidos[aleatorio(nombres.length)];
        apellido2=apellidos[aleatorio(nombres.length)];
        var Profesor=mongoose.model('Profesor');
      Profesor.create({
      "nombre": nombre,
      "apellido":apellido1+" "+apellido2,
      "email": nombre[0]+apellido1+apellido2+"@inventado.es",
      "id": i
    }, function (err, profesores){
      if(!err){
       console.log("Profesores insertados correctamente")
       }else
        console.log("Error al insertar profesores")
    });
    }
}

// inserta asignaturas (segundo curso)
function generaAsignaturas(){
var array_asignaturas = [ 'Acceso a datos','Programación multimedia y dispositivos móviles','Programación de servicios y procesos',
'Sistemas de gestión empresarial','Desarrollo de interfaces','Empresa e iniciativa emprendedora'];
    var curso=2;
      var Asignatura=mongoose.model('Asignatura');
      for(var i=0;i<array_asignaturas.length;i++){
        
      Asignatura.create({
      "nombre": array_asignaturas[i],
      "ciclo":"DAM",
      "curso":curso
    }, function (err, asignaturas){
      if(!err){
       console.log("Asignaturas insertadas correctamente")
       }else
        console.log("Error al insertar asignaturas")
    });
}
}


