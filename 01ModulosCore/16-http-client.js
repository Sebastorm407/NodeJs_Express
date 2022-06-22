'use strict'

var http = require('http'),
    options = {
        host: 'bextlan.com',
        port: 80,
        path: '/'
    }

http
    .get(options, function(res){
        console.log(`El sitio ${options.host} ha respondido. Codigo de estado: ${res.statusCode}`)
    })
    .on('error', function(err){
        console.log(`El sitio ${options.host} no respondio. Codigo de estado: ${err.code}. Error: ${err.message}`)
    })