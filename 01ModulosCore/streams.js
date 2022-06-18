/*
Streams
    'Chorros' de informacion que se transmiten en 'Pedazos' (Chunks)
    3 tipos: Lectura / Escritura / Duplex
    Instancias de EventEmitter
    Acceso asincrono
    Es raro crear streams directamente
    Pero muchos recursos nos ofrecen este interfaz
    Detras de muchos mecanismos de Node.js
        stdin/stdout
        request de HTTP
        Sockets
        Manipulacion de ficheros/imagenes
*/
'use strict'

var fs = require('fs'),
    readStream = fs.createReadStream('assets/nombre.txt'),
    writeStream = fs.createWriteStream('assets/nombre_copia.txt')

/*
readStream.pipe(writeStream)
readStream.on('data', function(Chunks){
    console.log('He leido: ', Chunks.length, 'carateres')
})

readStream.on('end', function(){
    console.log('Termine de leer el archivo')
})
*/

readStream.pipe(writeStream)

readStream
    .on('data', function(Chunks){
        console.log('He leido: ', Chunks.length, 'carateres')
    })
    .on('end', function(){
        console.log('Termine de leer el archivo')
    })