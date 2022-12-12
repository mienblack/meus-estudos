const express = require('express')
const router = express.Router()
const linkController = require('../controlers/linkController')

router.get('/:title', linkController.redirect)

router.post('/', express.urlencoded({ extended: true }), linkController.addLink)

router.get('/', (req, res) => {
    res.send('Hello World')
})

module.exports = router