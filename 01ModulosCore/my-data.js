'use strict'

var myData = require('./08-module'),
    Clock = require('./clock_Es6'),
    cucu = new Clock()

console.log(
    myData.name,
    myData.email,
    myData._phone
)

cucu.on('tictac', function(){
    cucu.theTime()
})