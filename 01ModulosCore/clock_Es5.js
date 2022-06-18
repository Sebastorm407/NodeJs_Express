'use strict'

const { get } = require('http')

var Clock = (function(){
    var EventEmitter = require('events').EventEmitter
    const util = require('util')

    var Clock = function(){
        var self = this
        setInterval(function(){
            //console.log('Hola')
            self.emit('tictac')
        }, 1000)
    }

    util.inherits(Clock, EventEmitter)

    Clock.prototype.theTime = function(){
        var date = new Date(),
            hrsAmPm = ( date.getHours() > 12) ? (date.getHours() - 12) : date.getHours(),
            hrs = addZero(hrsAmPm),
            min = addZero(date.getMinutes()),
            sec = addZero(date.getSeconds()),
            ampm = ( date.getHours() < 12 ) ? 'am' : 'pm',
            msg = hrs + ':' + min + ':' + sec + ampm

        function addZero(num){
            return (num < 10) ? ('0' + num) : num  
        }

        console.log(msg)
    }
    return Clock
})()

module.exports = Clock