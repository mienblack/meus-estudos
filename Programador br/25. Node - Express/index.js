const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
app.use(express.static(path.join(__dirname, 'client')))

let consoleMethod = (req, res, next) => {
    console.log(req.method)
    next()
}

let consoleBody = (req, res, next) => {
    console.log(req.body)
    next()
}

let hello = (req, res) => {
    res.send("hello world!")
}

app.use("/", bodyParser.json())
app.use("/", consoleBody)
//app.get("/",consoleMethod, hello)
//app.post("/",consoleMethod, hello)
/*
app.post("/", (req, res) => {
    //req.set("Content-Type", "text/html")
    console.log(req)
    res.type("html")
    res.send("<h1>HELLO WORLD!<small>from post</small></h1>")
})

app.put("/", (req, res) => {
    //req.set("Content-Type", "text/html")
    console.log(req)
    res.type("html")
    res.send("<h1>HELLO WORLD!<small>from put</small></h1>")
})

app.delete("/", (req, res) => {
    //req.set("Content-Type", "text/html")
    console.log(req)
    res.type("html")
    res.send("<h1>HELLO WORLD!<small>from delete</small></h1>")
})
*/
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`)
})