

const socketController = (socket) => {

    console.log('Cliente conectado', socket.id );  

    socket.on('disconnect',() => {
        console.log('Cliente desconectado', socket.id );
    })
    //el "socket.on" -> escuchando cuando el cliente lo emite
    socket.on('enviar-mensaje',(payload , callback) =>{

        const id = 12334999;
        callback({id, fecha: Date().toString()});

        socket.broadcast.emit('enviar-mensaje',payload);

    })

}

module.exports = {
    socketController
  }