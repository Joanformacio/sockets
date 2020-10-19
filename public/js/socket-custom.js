var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//escuchar (on)
socket.on('disconnect', function() {
    console.log('Perdimos la conexion con el servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Joan',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta servidor:', resp);
});

//Escuchar informacion (del servidor)
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});