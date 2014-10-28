

var fs=require("fs");
var config=JSON.parse(fs.readFileSync("config.json"));
var host=config.host;
var port=config.port;
var application_root = __dirname,
    path = require( 'path' ); //Utilities for dealing with file paths
var exp=require("express"),
    mongoose = require('mongoose');
var app=exp(); //el tutorial indicaba exp.createServer()

//routes = require('./js/routes/apiTfgs')(app);

//app.use(app.router);
//app.use('/',exp.static(__dirname)); // + "/public"));

app.configure( function() {
    //parses request body and populates request.body
    app.use( exp.bodyParser() );

    //checks request.body for HTTP method overrides
    app.use( exp.methodOverride() );

    //perform route lookup based on url and HTTP method
    app.use( app.router );

    //Where to serve static content
    //app.use( exp.static( path.join( application_root, 'site') ) );
    app.use('/',exp.static(__dirname));

    //Show all errors in development
    app.use( exp.errorHandler({ dumpExceptions: true, showStack: true }));
});


app.get("/",function(request,response){
	var contenido=fs.readFileSync("./index-backbone.html");
	response.setHeader("Content-type","text/html");
	response.send(contenido);
});

//check API
app.get( '/api', function( request, response ) {
    response.send( 'Librería API en marcha' );
});

//Get a list of all books
app.get( '/tfgs', function( request, response ) {
    return TfgModel.find( function( err, tfgs ) {
        if( !err ) {
            //console.log(tfgs);
            return response.send( tfgs );
        } else {
            return console.log( err );
        }
    });
});

//Insert a new tfg
app.post( '/tfgs', function( request, response ) {
    var tfg = new TfgModel({
        titulo: request.body.titulo,
        descripcion: request.body.descripcion,
        alumno: request.body.alumno
    });
    tfg.save( function( err ) {
        if( !err ) {
            return console.log( 'created server' );
        } else {
            return console.log( err );
        }
    });
    return response.send( tfg );
});

console.log("servidor iniciado...");
app.listen(port,host);

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var Tfg= new Schema({
  titulo:String,
  descripcion:String,
  alumno: String 
});


//Obtener un tfg por id
app.get( '/tfgs/:id', function( request, response ) {
    return TfgModel.findById( request.params.id, function( err, tfg ) {
        if( !err ) {
            return response.send( tfg );
        } else {
            return console.log( err );
        }
    });
});

//Actualizar un tfg
app.put( '/tfgs/:id', function( request, response ) {
    console.log( 'Actualizar tfg ' + request.body.titulo );
    return TfgModel.findById( request.params.id, function( err, tfg ) {
        tfg.titulo = request.body.titulo;
        tfg.descripcion = request.body.descripcion;
        tfg.alumno = request.body.alumno;

        return tfg.save( function( err ) {
            if( !err ) {
                console.log( 'tfg actualizado' );
            } else {
                console.log( err );
            }
            return response.send( tfg );
        });
    });
});

//Eliminar un tfg
app.delete( '/tfgs/:id', function( request, response ) {
    console.log( 'Eliminar tfg con id: ' + request.params.id );
    return TfgModel.findById( request.params.id, function( err, tfg ) {
        return tfg.remove( function( err ) {
            if( !err ) {
                console.log( 'Tfg eliminado' );
                return response.send( '[{"ok":"ok"}]' );
            } else {
                console.log( err );
            }
        });
    });
});

//module.exports = mongoose.model('Tfg', Tfg);
var TfgModel = mongoose.model('Tfg', Tfg);

mongoose.connect('mongodb://localhost/tfgsdb', function(err, res) {
  if(err) {
    console.log('ERROR: al intentar conectar con la base de datos. ' + err);
  } else {
    console.log('Conectado a la base de datos');
  }
});

