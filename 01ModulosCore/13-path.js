/*
htpps://nodejs.org/api/path.html
Contiene utilidades para manejar y transformar las rutas de los
directorios y archivos a formato de cadena. El sistema de archivos
no es consultado para comprobar si los cambios son validos.
*/

'use strict'

var http = require('http').createServer(webServer),
    path = require('path/posix'),
    urls = [
        {
            route: '',
            output: '<h2>Home</h2>'
        },
        {
            route: 'acerca',
            output: '<h2>Acerca</h2>'
        },{
            route: 'contacto',
            output: '<h2>Contacto</h2>'
        }
    ]

function webServer(req, res) {
    var message = '<h1>Hola Node.js</h1>',
        pathUrl = path.basename(req.url)
    console.log(pathUrl)
    urls.forEach(function(pos){
        if(pos.route == pathUrl){
            res.writeHead(200, {'Content-Type':'text/html'})
            res.end(message + pos.output)
        }
    })
    if(!res.finished){
        res.writeHead(404, {'Content-Type':'text/html'})
        res.end('<h1>Error 404: Not Found</h1>')
    }
}

http.listen(3000)
console.log(`El servidor se está ejecutando en http://localhost:3000`);