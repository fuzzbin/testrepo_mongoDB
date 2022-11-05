const express = require('express')
const router = express.Router()
const path = require('path')
const Hoering = require('../models/hoeringer')

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, "../pages", "index.html"))
  })

module.exports = router