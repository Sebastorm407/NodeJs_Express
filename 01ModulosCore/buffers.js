/*
Buffers
    Una tira de bytes (datos binarios)
    Similar a un array de enteros
    Tamaño fijo
    Manipular datos directamente
        Sockets
        Streams
        Implementar protocolos complejos
        Manipulacion de ficheros/imagenes
        Criptografia
*/

'use strict'

var buf = new Buffer(1000),
    buf2 = new Buffer(26),
    str = '\u00bd + \u00bc = \u00be'
    i = 0

buf.write('abcd', 0, 4, 'ascii')
console.log(buf, buf.toString('ascii'), str, str.length, Buffer.byteLength(str, 'utf8'))

for(var i=0; i < buf2.length; i++) {
    buf2[i] = i + 97
}

console.log(buf2.toString('ascii'))