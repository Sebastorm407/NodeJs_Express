'use strict'

var express = require('express'),
    app = express()

app.get('/', (req, res) => {
    res.end('<h1>Hola mundo desde express</h1>')
})
    .listen(3000)

console.log('Iniciando express en el puerto 3000')