const { io } = require('../server');



io.on('connection', (client) => {
    console.log("usuario conectado");

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Os saluda el administrador'
    })

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //Escuchar al cliente(fontend)
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data); // con briadcast se envia a todos los usuarios conectados

        /*if (mensaje.usuario) {
            callback({
                resp: 'Recibido'
            })
        } else {
            callback({
                resp: 'No recibido'
            })
        }*/


    })
})