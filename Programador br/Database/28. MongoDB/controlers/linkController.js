const Link = require('../models/Link')

const redirect = async (req, res, next) => {
    let title = req.params.title
    try {
        let doc = await Link.findOneAndUpdate({ title }, { $inc: { click: 1 } })
        if (doc) {
            res.redirect(doc.url)
        } else {
            next()
        }
    } catch (err) {
        res.send(err)
    }
}

const addLink = async (req, res) => {

    let link = new Link(req.body)
    try {
        await link.save()
        res.redirect('/')
    } catch (error) {
        res.render('add', { error, body: req.body })
    }
}

const allLinks = async (req, res) => {
    try {
        let links = await Link.find({})
        res.render('all', { links })
    } catch (error) {
        res.send(error)
    }
}

const deleteLink = async (req, res) => {
    let id = req.params.id
    if (!id) {
        id = req.body.id
    }
    try {
        await Link.findByIdAndDelete(id)
        res.send(id)
    } catch (error) {
        res.send({ error })
    }
}

const loadLink = async (req, res) => {
    let id = req.params.id
    try {
        let doc = await Link.findById(id)
        res.render('edit', { error: false, body: doc })
    } catch (error) {
        res.staus(404).send(error)
    }
}

const editLink = async (req, res) => {
    let link = {}
    link.title = req.body.title
    link.description = req.body.description
    link.url = req.body.url

    let id = req.params.id
    if (!id) {
        id = req.body.id
    }

    try {
        await Link.updateOne({ _id: id }, link)
        res.redirect('/')
    } catch {
        res.render('/edit', { error, body: req.body })
    }
}

module.exports = { redirect, addLink, allLinks, deleteLink, loadLink, editLink }