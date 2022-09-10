const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);


        this.paths = {};

       /*  // Conectar a base de datos
        this.conectarDB(); */

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        //configuracion de sockets
        this.sockets();

    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {        
        /*this.app.use( this.paths.auth, require('../routes/auth')); */        
    }

    sockets(){

        this.io.on('connection', socket =>{
            console.log('Cliente conectado es:', socket.id);
        
            socket.on('disconnect',()=>{
                console.log('Cliente esta desconectado =>', socket.id);
            })
            //el "socket.on" -> escuchando cuando el cliente lo emite
            socket.on('enviar-mensaje',(payload) =>{
                /* console.log(payload); */
                // "this.oi" es cuando el servidor de socket envia - "emit" es emitir un evento a todos los usuarios 
                this.io.emit('enviar-mensaje',payload);
            })

        });


    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;