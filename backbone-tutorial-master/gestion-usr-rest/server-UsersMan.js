

var fs=require("fs");
var config=JSON.parse(fs.readFileSync("config.json"));
var host=config.host;
var port=config.port;
var application_root = __dirname,
    path = require( 'path' ); //Utilities for dealing with file paths
var exp=require("express"),
    mongoose = require('mongoose');
var app=exp(); //el tutorial indicaba exp.createServer()

//routes = require('./js/routes/apiUsers')(app);

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
app.get( '/users', function( request, response ) {
    return UserModel.find( function( err, users ) {
        if( !err ) {
            //console.log(users);
            return response.send( users );
        } else {
            return console.log( err );
        }
    });
});

//Insert a new user
app.post( '/users', function( request, response ) {
    var user = new UserModel({
        nombre: request.body.nombre,
        apellidos: request.body.apellidos,
        email: request.body.email,
        sexo:request.body.sexo
    });
    user.save( function( err ) {
        if( !err ) {
            return console.log( 'created server' );
        } else {
            return console.log( err );
        }
    });
    return response.send( user );
});

console.log("servidor iniciado...");
app.listen(port,host);

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var User = new Schema({
  nombre:String,
  apellidos:String,
  email: String ,
  sexo:String//, enum:
  //['Hombre', 'Mujer']
});


//Obtener un usuario por id
app.get( '/users/:id', function( request, response ) {
    return UserModel.findById( request.params.id, function( err, user ) {
        if( !err ) {
            return response.send( user );
        } else {
            return console.log( err );
        }
    });
});

//Actualizar un usuario
app.put( '/users/:id', function( request, response ) {
    console.log( 'Actualizar usuario ' + request.body.nombre );
    return UserModel.findById( request.params.id, function( err, user ) {
        user.nombre = request.body.nombre;
        user.apellidos = request.body.apellidos;
        user.email = request.body.email;
        user.sexo = request.body.sexo;

        return user.save( function( err ) {
            if( !err ) {
                console.log( 'usuario actualizado' );
            } else {
                console.log( err );
            }
            return response.send( user );
        });
    });
});

//Eliminar un usuario
app.delete( '/users/:id', function( request, response ) {
    console.log( 'Eliminar usuario con id: ' + request.params.id );
    return UserModel.findById( request.params.id, function( err, user ) {
        return user.remove( function( err ) {
            if( !err ) {
                console.log( 'Usuario eliminado' );
                return response.send( '[{"ok":"ok"}]' );
            } else {
                console.log( err );
            }
        });
    });
});

//module.exports = mongoose.model('User', User);
var UserModel = mongoose.model('User', User);

mongoose.connect('mongodb://localhost/usersdb', function(err, res) {
  if(err) {
    console.log('ERROR: al intentar conectar con la base de datos. ' + err);
  } else {
    console.log('Conectado a la base de datos');
  }
});

