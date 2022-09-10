//Referencias del html
const lblonline = document.querySelector('#lblonline');
const lbloffline = document.querySelector('#lbloffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');



const socket = io();

socket.on('connect', ()=>{
/*     console.log('conectado'); */
    lbloffline.style.display = 'none';
    lblonline.style.display = '';
});

socket.on('disconnect', ()=>{
/*     console.log('desconectado del servidor'); */
    lbloffline.style.display = '';
    lblonline.style.display = 'none';
});

socket.on('enviar-mensaje',(payload) => {
console.log(payload);
});

// on -> es para escuchar un evento
//emit -> es para emitir un evento

btnEnviar.addEventListener('click',()=>{

    const mensaje = txtMensaje.value;    
    // este payload es el que se mandará al servidor
    const payload = {
        mensaje,
        id:'123abc',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload);

});

