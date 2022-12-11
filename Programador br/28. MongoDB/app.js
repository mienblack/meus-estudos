const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose')
const linkRoute = require('./routes/linkRoute')
mongoose.set('strictQuery', true);
/*
let link = new Link({
    title: "Souto",
    description: "Github do souto",
    url: "https://github.com/devsoutinho",
})

link.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.log(err)
    })
*/
mongoose.connect('mongodb://127.0.0.1:27017/links')
    .then(db => {
        //console.log(db)
    })
    .catch(err => {
        //console.log(err)
    })

let db = mongoose.connection

db.on("error", () => { console.log("houve um erro") })
db.once("open", () => { console.log("Banco Carregado") })

app.use('/', linkRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})