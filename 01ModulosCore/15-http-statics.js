/*
htpps://nodejs.org/api/path.html
Contiene utilidades para manejar y transformar las rutas de los
directorios y archivos a formato de cadena. El sistema de archivos
no es consultado para comprobar si los cambios son validos.
*/

'use strict'

var http = require('http').createServer(webServer),
    fs = require('fs'),
    path = require('path/posix'),
    url = require('url'),
    urls = [
        {
            id: 1,
            route: '',
            output: 'assets/index.html'
        },
        {
            id: 2,
            route: 'acerca',
            output: 'assets/acerca.html'
        },
        {
            id: 3,
            route: 'contacto',
            output: 'assets/contacto.html'
        }
    ]

function webServer(req, res) {
    var pathUrl = path.basename(req.url),
        id = url.parse(req.url, true).query.id

    console.log(`path:${pathUrl}, id:${id}`)

    urls.forEach(function(pos){
        if(pos.route == pathUrl || pos.id == id){
            res.writeHead(200, {'Content-Type':'text/html'})
            fs.readFile(pos.output, function(err, data){
                if(err) throw err
                res.end(data)
            })
        }
    })

    if(!res.finished){
        res.writeHead(404, {'Content-Type':'text/html'})
        fs.readFile('assets/404.html', function(err, data){
            if(err) throw err
            res.end(data)
        })
    }
}

http.listen(3000)
console.log(`El servidor se está ejecutando en http://localhost:3000`);