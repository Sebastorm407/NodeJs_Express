'use strict'

var express = require('express'),
    app = express()

app
    .get('/', (req, res) => {
        //res.end('<h1>Hola mundo desde express</h1>')
        res.send('<h1>Hola mundo desde express</h1>')
    })

    .get('/bextlan', (req, res) => {
        //res.end('<h1>Hola mundo desde express</h1>')
        //res.send('<h1>Hola mundo desde express</h1>')
        res.redirect(301, 'https://github.com/')
    })

    .get('/json', (req, res) => {
        res.json({
            name: 'Sebas',
            edad: 16,
            correo: 'asvc36@gmail.com'
        })
    })

    .listen(3000)

console.log('Iniciando express en el puerto 3000')