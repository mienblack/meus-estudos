const express = require('express')
const path = require('path')
const app = express()

const list = ["Damien", "Felipe", "Costa", "Pereira"]
console.log(list)

app.get('/list', (req, res) => {
    res.send(list)
})

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
    console.log("Listening")
})