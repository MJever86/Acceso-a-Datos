var express = require('express');
var mongoose= require('mongoose');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'G.A' });
});

/**Metodos de profesores */

/**CRUD PROFESORES */
router.get('/ProfesorRead', function(req, res, next) {
  var Profesor= mongoose.model('Profesor');
  Profesor.find({},function(err, data){
      if(!err){
          res.render('ProfesorRead',{"profesores":data});
        }else{
            res.send('Error al leer Profesores');
        }
    });
});

router.get('/ProfesorCreate', function(req,res,next){
    res.render('ProfesorCreate');
});

router.post('/ProfesorCreate',function(req,res,next){
    var profesor=mongoose.model('Profesor');
    var nombre=req.body.nombre
    var apellido=req.body.apellido
     var email=req.body.email
    var id=req.body.iden

    profesor.create({
      "nombre": nombre,
      "apellido":apellido,
      "email": email,
      "id": id
    }, function (err, profesores){
      if(!err){
          //redirijo a ProfesorRead
        res.redirect('/ProfesorRead')
        console.log(profesores)
       }else
        res.send("Error al crear un profesor nuevo")
    });
});

router.get('/ProfesorDelete', function (req, res, next) {
    var id = req.body.id;
    var Profesor = mongoose.model('Profesor')
    Profesor.find({},function(error,data){
        if(!error){
            res.render('ProfesorDelete',{"profesores":data});
        }else{
            res.send('ERROR!!');
        }
    });
});



router.post('/ProfesorDelete', function (req,res,next){
    var id= req.body.id;
    var Profesor= mongoose.model('Profesor')
    Profesor.remove({"_id":id},function(err,data){
        if(!err){
             
        }else{
          
        }
    });
    res.redirect('/ProfesorDelete')
});

router.get('/ProfesorUpdate', function (req, res, next) {
    var Profesor = mongoose.model('Profesor')
    Profesor.find({},function(error,data){
        if(!error){
            res.render('ProfesorUpdate',{"profesores":data});
        }else{
            res.send('ERROR!!');
        }
    });
});
router.post('/ProfesorUpdate', function(req, res, next) {
  var profesor=mongoose.model('Profesor');
  var iden=[]
  var id=[]
  var nombre=[]
  var apellido=[];
  var email=[];
  
  if(typeof req.body.id_json=='object'){
    id=req.body.id_json;
    iden=req.body.iden;
    nombre=req.body.nombre;
    apellido=req.body.apellido;
    email=req.body.email;
  }else{
    id[0]=req.body.id_json;
    iden[0]=req.body.iden;
    nombre[0]=req.body.nombre;
    apellido[0]=req.body.apellido;
    email[0]=req.body.email;
  }
console.log(id.length)
  for(var i=0;i<id.length;i++){
    profesor.update({"_id":id[i]}, {"id":iden[i],"nombre": nombre[i], "apellido":apellido[i],"email":email[i]} ,function(err,doc){
        
    })
  }
  res.redirect('/ProfesorRead')
});



router.put('/ProfesorUpdate',function(req,res,next){
    var Profesor= mongoose.model('Profesor');
    
    var nombre= req.body.nombre;
    var apellido=req.body.apellido;
    var email= req.body.email;
    var id= req.body.id;
    var _id=req.body._id;

    Profesor.update({"_id":_id},{},function(){

    });

});

/**Metodos de alumnos */

/**CRUD ALUMNOS */
router.get('/AlumnoRead', function(req, res, next) {
  var alumno= mongoose.model('Alumno');
  alumno.find({},function(err, data){
      if(!err){
          res.render('AlumnoRead',{"alumnos":data});
  }else{
      res.send('Error!!!');
  }
    });
});

router.get('/AlumnoCreate', function(req,res,next){
    res.render('AlumnoCreate');
});

router.post('/AlumnoCreate',function(req,res,next){
    var alumno=mongoose.model('Alumno');
    var nombre=req.body.nombre
    var apellido=req.body.apellido
     var email=req.body.email
    var id=req.body.iden

    alumno.create({
      "nombre": nombre,
      "apellido":apellido,
      "email": email,
      "id": id
    }, function (err, alumnos){
      if(!err){
          //redirijo al AlumnoRead
        res.redirect('/AlumnoRead')
        console.log(alumnos)
       }else
        res.send("Error al crear un alumno nuevo")
    });
});

router.get('/AlumnoDelete', function (req, res, next) {
    var id = req.body.id;
    var alumno = mongoose.model('Alumno')
    alumno.find({},function(error,data){
        if(!error){
            res.render('AlumnoDelete',{"alumnos":data});
        }else{
            res.send('ERROR!!');
        }
    });
});


router.post('/AlumnoDelete', function (req,res,next){
    var id= req.body.id;
    var alumno= mongoose.model('Alumno')
    alumno.remove({"_id":id},function(err,data){
        if(!err){
             
        }else{
          
        }
    });
    res.redirect('/AlumnoDelete')
});

router.get('/AlumnoUpdate',function(req,res,next){
    var alumno=mongoose.model('Alumno');
    alumno.find({}, function (err, alumnos){
        //creamos una lista con los datos de alumnos
  res.render('AlumnoUpdate', {"alumnos":alumnos});
    });
});

router.post('/AlumnoUpdate', function(req, res, next) {
  var alumno=mongoose.model('Alumno');
  var iden=[]
  var id=[]
  var nombre=[]
  var apellido=[];
  var email=[];
  
  if(typeof req.body.id_json=='object'){
    id=req.body.id_json;
    iden=req.body.iden;
    nombre=req.body.nombre;
    apellido=req.body.apellido;
    email=req.body.email;
  }else{
    id[0]=req.body.id_json;
    iden[0]=req.body.iden;
    nombre[0]=req.body.nombre;
    apellido[0]=req.body.apellido;
    email[0]=req.body.email;
  }
console.log(id.length)
  for(var i=0;i<id.length;i++){
    alumno.update({"_id":id[i]}, {"id":iden[i],"nombre": nombre[i], "apellido":apellido[i],"email":email[i]} ,function(err,doc){        
        
    })
  }
  res.redirect('/AlumnoRead')
});

/** Métodos de asignaturas */

/**CRUD ASIGNATURAS */
router.get('/AsignaturaRead', function(req, res, next){
    var asignatura=mongoose.model('Asignatura');
    asignatura.find({}, function (err, asignaturas){
    res.render('AsignaturaRead', {"asignaturas":asignaturas});
    });
});

router.get('/AsignaturaCreate', function(req, res, next) {
  res.render('AsignaturaCreate');
    });

router.post('/AsignaturaCreate', function(req, res, next) {
  var asignatura=mongoose.model('Asignatura');
  var nombre=req.body.nombre
  var ciclo=req.body.ciclo
  var curso=req.body.curso

    asignatura.create({
      "nombre": nombre,
      "ciclo":ciclo,
      "curso":curso
    }, function (err, asignaturas){
      if(!err){
       res.redirect('/AsignaturaRead')
       }else
        res.send("Error al crear asignatura")
    });
});

router.get('/AsignaturaUpdate', function(req, res, next) {
   var asignatura=mongoose.model('Asignatura');
    asignatura.find({}, function (err, asignaturas){
  res.render('AsignaturaUpdate', {"asignaturas":asignaturas});
    });
});

router.post('/AsignaturaUpdate', function(req, res, next) {
  var asignatura=mongoose.model('Asignatura');
  var id=[]
  var nombre=[];
  var ciclo=[];
  var curso=[];
  
  if(typeof req.body.id_json=='object'){
    id=req.body.id_json;
    nombre=req.body.nombre;
    ciclo=req.body.ciclo;
    curso=req.body.curso;
  }else{
    id[0]=req.body.id_json;
    nombre[0]=req.body.nombre;
    ciclo[0]=req.body.ciclo;
    curso[0]=req.body.curso;
  }
  for(var i=0;i<id.length;i++){
    asignatura.update({"_id":id[i]}, {"nombre": nombre[i], "ciclo":ciclo[i],"curso":curso[i]} ,function(err,doc){
        if(err){
            console.log("Error al actualizar asignaturas")
        }     
    })
  }
  res.redirect('/AsignaturaUpdate')
});


router.get('/AsignaturaDelete', function(req, res, next) {
  var asignatura=mongoose.model('Asignatura');
    asignatura.find({}, function (err, asignaturas){
  res.render('AsignaturaDelete', {"asignaturas":asignaturas});
    });
});

router.post('/AsignaturaDelete', function(req, res, next) {
  var asignatura=mongoose.model('Asignatura');
  var id=[];
  if(typeof req.body.id=="object")
       id=req.body.id;
  else
    id[0]=req.body.id;

  for(var i = 0; i<id.length;i++){
    asignatura.remove({ _id: id [i]}, function(err) {
        if (!err) {
                
        }
        else {
                res.send("ERROR!!");
        }
        });
    }
    res.redirect('/AsignaturaDelete')
});

/**Matricular alumnos */

/**CRUD MATRICULACION ALUMNOS */
router.get('/MatriculaAlumnoCreate',function(req, res, next) {
  
    var asignatura=mongoose.model('Asignatura');
    asignatura.find({}, function (err, asignaturas){
    var alumno=mongoose.model('Alumno');
    alumno.find({}, function (err, alumnos){
    res.render('MatriculaAlumnoCreate', {"alumnos":alumnos,"asignaturas":asignaturas});
    });
    });
});
router.post('/MatriculaAlumnoCreate',function(req, res, next) {
   var matricula=mongoose.model('Matricula');
   var alumno=req.body.alumno.split(",");
   var asignatura=req.body.asignatura.split(",");
   var inicio=req.body.inicio;
   var fin=req.body.fin
   //buscamos en los alumnos que estan matriculados y si existe mandamos que el alumno ya existe, si no lo creamos
     matricula.findOne({"nombreAlumno" : alumno[1],"apellido" : alumno[2],"email" : alumno[3],"id" : alumno[0],"nombreAsignatura" : asignatura[0],
      "ciclo" : asignatura[1],"curso" : asignatura[2],"inicio": new Date(inicio), "fin": new Date(fin)}, function (err, matriculas){
       if(matriculas==null){
         matricula.create({
      "nombreAlumno" : alumno[1],
      "apellido" : alumno[2],
      "email" : alumno[3],
      "id" : alumno[0],
      "nombreAsignatura" : asignatura[0],
      "ciclo" : asignatura[1],
      "curso" : asignatura[2],
      "inicio": new Date(inicio),
      "fin": new Date(fin)
    }, function (err, matriculas){
      if(!err){
       res.redirect('/MatriculaAlumnoRead')
       }else
        res.send("Error al crear la matricula")
    });
       }else{
        res.send("Este alumno ya ha sido creado")
       }
    });
    
});
router.get('/MatriculaAlumnoRead',function(req, res, next) {
  
    var matricula=mongoose.model('Matricula');
    matricula.find({}, function (err, matriculas){
      res.render('MatriculaAlumnoRead', {"matriculas":matriculas});
    });
});

router.get('/DesmatricularAlumno',function(req, res, next) {
  
    var matricula=mongoose.model('Matricula');
    matricula.find({}, function (err, matriculas){
      res.render('DesmatricularAlumno', {"matriculas":matriculas});
    });
});

router.post('/DesmatricularAlumno', function(req, res, next) {
  var matricula=mongoose.model('Matricula');
  var id=[];
  if(typeof req.body.id=="object")
       id=req.body.id;
  else
    id[0]=req.body.id;


  for(var i = 0; i<id.length;i++){
    matricula.remove({ _id: id [i]}, function(err) {
        if (!err) {
                
        }
        else {
                res.send("error");
        }
        });
    }
    res.redirect('/DesmatricularAlumno')
});

router.get('/MatriculaAlumnoUpdate', function(req, res, next) {
  var asignatura=mongoose.model('Asignatura');
    var matricula=mongoose.model('Matricula');
    asignatura.find({}, function (err, asignaturas){
      matricula.find({}, function (err, matriculas){
    res.render('MatriculaAlumnoUpdate', {"matriculas":matriculas, "asignaturas":asignaturas});
      });
    });
});

router.post('/MatriculaAlumnoUpdate', function(req, res, next) {
  var matricula=mongoose.model('Matricula');
  var nombreAlumno=[];
  var apellido=[];
  var email=[];
  var id=[];
  var nombreAsignatura=[]
  var inicio=[];
  var fin=[];
  var _id=[];
  
  if(typeof req.body.id_json=='object'){
    _id=req.body.id_json
    nombreAlumno=req.body.nombre;
    apellido=req.body.apellido
    email=req.body.email
    id=req.body.iden
    nombreAsignatura=req.body.asignatura
    inicio=req.body.inicio
    fin=req.body.fin
    console.log(nombreAsignatura)
for(var i=0;i<id.length;i++){
    matricula.update({"_id":_id[i]}, {"nombreAlumno": nombreAlumno[i],"apellido": apellido[i],"email": email[i],"id": id[i],
    "nombreAsignatura": nombreAsignatura[i].split(",")[0],"ciclo" : nombreAsignatura[i].split(",")[1],"curso" : nombreAsignatura[i].split(",")[2],"inicio": inicio[i],"fin": fin[i]} ,function(err,doc){
        if(err){
            console.log("Error al actualizar matriculas")
        }     
    })
  }

  }else{
    _id[0]=req.body.id_json
    nombreAlumno[0]=req.body.nombre;
    apellido[0]=req.body.apellido
    email[0]=req.body.email
    id[0]=req.body.iden
    nombreAsignatura[0]=req.body.asignatura.split(",")
    inicio[0]=req.body.inicio
    fin[0]=req.body.fin

    for(var i=0;i<id.length;i++){
    matricula.update({"_id":_id[i]}, {"nombreAlumno": nombreAlumno[i],"apellido": apellido[i],"email": email[i],"id": id[i],
    "nombreAsignatura": nombreAsignatura[i][0],"ciclo" : nombreAsignatura[i][1],"curso" : nombreAsignatura[i][2],"inicio": inicio[i],"fin": fin[i]} ,function(err,doc){
        if(err){
            console.log("Error al actualizar matriculas")
        }     
    })
  }
  }  
  res.redirect('/MatriculaAlumnoRead')
});

/**Matricular profesores */

/**CRUD MATRICULACION PROFESORES */
router.get('/MatriculaProfesorCreate',function(req, res, next) {
  
    var asignatura=mongoose.model('Asignatura');
    asignatura.find({}, function (err, asignaturas){
    var profesor=mongoose.model('Profesor');
    profesor.find({}, function (err, profesores){
    res.render('MatriculaProfesorCreate', {"profesores":profesores,"asignaturas":asignaturas});
    });
    });
});

router.post('/MatriculaProfesorCreate',function(req, res, next) {
   var matriculaProfesor=mongoose.model('MatriculaProfesor');
   var profesor=req.body.profesor.split(",");
   var asignatura=req.body.asignatura.split(",");
   var inicio=req.body.inicio;
   var fin=req.body.fin
   var horas=req.body.horas;
   //buscamos en los matriculados y si existe mandamos que el profesor ya existe, si no lo creamos
     matriculaProfesor.findOne({"nombreProfesor" : profesor[1],"apellido" : profesor[2],"email" : profesor[3],"id" : profesor[0],"nombreAsignatura" : asignatura[0],
      "ciclo" : asignatura[1],"curso" : asignatura[2],"inicio": new Date(inicio), "fin": new Date(fin)}, function (err, matriculas){
       if(matriculas==null){
         matriculaProfesor.create({
      "nombreProfesor" : profesor[1],
      "apellido" : profesor[2],
      "email" : profesor[3],
      "id" : profesor[0],
      "nombreAsignatura" : asignatura[0],
      "ciclo" : asignatura[1],
      "curso" : asignatura[2],
      "inicio": new Date(inicio),
      "fin": new Date(fin),
      "horas": horas
    }, function (err, matriculas){
      if(!err){
       res.redirect('/MatriculaProfesorRead')
       }else
        res.send("Error al crear la matricula")
    });
       }else{
        res.send("El profesor insertado ya ha sido creado")
       }
    });
    
});

router.get('/MatriculaProfesorRead',function(req, res, next) {
    var matriculaProfesor=mongoose.model('MatriculaProfesor');
    matriculaProfesor.find({}, function (err, matriculasProfesores){
    res.render('MatriculaProfesorRead', {"matriculas":matriculasProfesores});
    });
});

router.get('/DesmatricularProfesor',function(req, res, next) {
  
    var matriculaProfesor=mongoose.model('MatriculaProfesor');
    matriculaProfesor.find({}, function (err, matriculas){
      res.render('DesmatricularProfesor', {"matriculas":matriculas});
    });
});

router.post('/DesmatricularProfesor', function(req, res, next) {
  var matriculaProfesor=mongoose.model('MatriculaProfesor');
  var id=[];
  if(typeof req.body.id=="object")
       id=req.body.id;
  else
    id[0]=req.body.id;


  for(var i = 0; i<id.length;i++){
    matriculaProfesor.remove({ _id: id [i]}, function(err) {
        if (!err) {
                
        }
        else {
                res.send("Error");
        }
        });
    }
    res.redirect('/DesmatricularProfesor')
});

router.get('/MatriculaProfesorUpdate', function(req, res, next) {
  var asignatura=mongoose.model('Asignatura');
    var matriculaProfesor=mongoose.model('MatriculaProfesor');
    asignatura.find({}, function (err, asignaturas){
      matriculaProfesor.find({}, function (err, matriculas){
    res.render('MatriculaProfesorUpdate', {"matriculas":matriculas, "asignatura":asignaturas});
      });
    });
});

router.post('/MatriculaProfesorUpdate', function(req, res, next) {
  var matriculaProfesor=mongoose.model('MatriculaProfesor');
  var nombreProfesor=[];
  var apellido=[];
  var email=[];
  var id=[];
  var nombreAsignatura=[]
  var inicio=[];
  var fin=[];
  var horas=[];
  var _id=[];
  
  if(typeof req.body.id_json=='object'){
    _id=req.body.id_json
    nombreProfesor=req.body.nombre;
    apellido=req.body.apellido
    email=req.body.email
    id=req.body.iden
    nombreAsignatura=req.body.asignatura
    inicio=req.body.inicio
    fin=req.body.fin
    horas=req.body.horas
for(var i=0;i<id.length;i++){
    matriculaProfesor.update({"_id":_id[i]}, {"nombreProfesor": nombreProfesor[i],"apellido": apellido[i],"email": email[i],"id": id[i],
    "nombreAsignatura": nombreAsignatura[i].split(",")[0],"ciclo" : nombreAsignatura[i].split(",")[1],"curso" : nombreAsignatura[i].split(",")[2],"inicio": inicio[i],"horas":horas[i], "fin": fin[i]} ,function(err,doc){
        if(err){
            console.log("Error al actualizar matriculas")
        }     
    })
  }

  }else{
    _id[0]=req.body.id_json
    nombreProfesor[0]=req.body.nombre;
    apellido[0]=req.body.apellido
    email[0]=req.body.email
    id[0]=req.body.iden
    nombreAsignatura[0]=req.body.asignatura.split(",")
    inicio[0]=req.body.inicio
    fin[0]=req.body.fin
    horas[0]=req.body.horas

    for(var i=0;i<id.length;i++){
    matriculaProfesor.update({"_id":_id[i]}, {"nombreProfesor": nombreProfesor[i],"apellido": apellido[i],"email": email[i],"id": id[i],
    "nombreAsignatura": nombreAsignatura[i][0],"ciclo" : nombreAsignatura[i][1],"curso" : nombreAsignatura[i][2],"inicio": inicio[i],"horas":horas[i], "fin": fin[i]} ,function(err,doc){
        if(err){
            console.log("Error al actualizar matriculas")
        }     
    })
  }
  }  
  res.redirect('/MatriculaProfesorRead')
});

module.exports = router;
