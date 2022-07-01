'use strict'

var express = require('express'),
    app = express()

app
    .get('/', (req, res) => {
    res.end(`<h1>Hola mundo desde express</h1>`)
    })
    
    .get('/user/:id-:name-:age', (req, res) => {
        res.end(`
            <h1>
                ${req.params.name} bienvenido a express tu id es ${req.params.id}
                y tienes ${req.params.age} annios
            </h1>
        `)
    })

    .get('/search', (req, res) => {
        res.end(`
            <h1>
                Bienvenido a express, los resultados de tu b&uacute;squeda son:
                <mark>${req.query.s}</mark>
            </h1>
        `)
    })

    .listen(3000)

console.log('Iniciando express en el puerto 3000')