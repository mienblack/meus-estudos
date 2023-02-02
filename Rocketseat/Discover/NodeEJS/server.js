const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    const items = [
        {
            title: "D",
            message: "esenvolvedor Fullstack"
        },
        {
            title: "E",
            message: "JS usa Javascript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito simples de usar"
        },
        {
            title: "A",
            message: "dorável"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "intaxe simples"
        },
    ]
    res.render("pages/index",
        {
            items
        })
})

app.get("/sobre", (req, res) => {
    res.render("pages/about")
})

app.listen(8080, () => {
    console.log("listening")
})