//Referencias del html
const lblonline = document.querySelector('#lblonline');
const lbloffline = document.querySelector('#lbloffline');


const socket = io();

socket.on('connect', ()=>{
    console.log('conectado');

    lbloffline.style.display = 'none';
    lblonline.style.display = '';
});

socket.on('disconnect', ()=>{
    console.log('desconectado del servidor');
    lbloffline.style.display = '';
    lblonline.style.display = 'none';
});