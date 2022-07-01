'use strict'

var http = require('http').createServer(serverUpload),
    util = require('util'),
    formidable = require('formidable'),
    fse = require('fs-extra')

function serverUpload(req, res){
    if(req.method.toLowerCase() == 'get'){
        let form = `
        <h3>Uploader de Archivos</h3>
        <form action="/upload" enctype="multipart/form-data" method="post">
            <div>
                <input type="file" name="upload" required>
            </div>
            <div>
                <input type="submit" name="Subir archivo">
            </div>
        </form>
        `
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end(form)
    }
    if(req.method.toLowerCase() == 'post' && req.url == '/upload'){
        let form = new formidable.IncomingForm()

        form
            .parse(req, function(err, fields, files){
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write('<h1>Archivos Recibidos</h1><a href="/">Vuelve al Home</a>' + util.inspect({files:files}))
                res.end()
            })
            .on('progress', function(bytesReceived, bytesExpected){
                let percentCompleted = (bytesReceived/bytesExpected) * 100
                console.log(percentCompleted)
            })
            .on('error', function(err){
                console.log(err)
            })
            .on('end', function(fields, files){
                //Ubicacion temporal del archivo que se sube
                let tempPath = this.openedFiles[0].path,
                    //El nombre del archivo subido
                    fileName = this.openedFiles[0].name,
                    //Nueva ubicacion
                    newLocation = './upload/' + fileName
                
                fse.copy(tempPath, newLocation, function(err){
                    return (err) ? console.log(err) : console.log('El archivo se subio con exito!')
                })
            })

        return
    }
}

http.listen(3000)

console.log(`El servidor se está ejecutando en http://localhost:3000`);