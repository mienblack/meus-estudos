const Link = require('../models/Link')

const redirect = async (req, res) => {
    let title = req.params.title
    try {
        let doc = await Link.findOne({ title })
        res.redirect(doc.url)
    } catch (err) {
        res.send(err)
    }
}

const addLink = async (req, res) => {

    let link = new Link(req.body)
    try {
        let doc = await link.save()
        res.send(doc)
    } catch (err) {
        res.send(err)
    }
}

module.exports = { redirect, addLink }