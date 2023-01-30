const events = require('events')
const { EventEmitter } = require('stream')

const event = new EventEmitter()

event.on('Diga algo', (text) => {
    console.log("Eu ouvi", text)
})

event.emit("Diga algo", "Nada demais")
