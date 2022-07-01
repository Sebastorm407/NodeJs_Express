//Hacer Debug con el core de Node.js
//https://nodejs.org/api/debugger.html
//En la terminar ejecutar: node debug nombre-script.js

'use strict'

var http = require('http').createServer()

function webServer(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    debugger;
    res.end('<h1>Hola Mundo</h1>');
};

http
    .on('request', webServer)
    .listen(3000, 'localhost')

console.log(`El servidor se está ejecutando en http://localhost:3000`);

/*
Supervisor, Nodemon --> Son paquetes globales los cuales supervisan el codigo que
esta disponible y lo actualizan con las librerias unicamente de .js automaticamente
sin tener que para el servidor para hacerlo.
*/