const express = require('express')
const router = express.Router()
const Hoering = require('../models/hoeringer')

router.get('/', async (req, res) => {
    try {
        const hoeringer = await Hoering.find()
        res.send(hoeringer)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

router.post('/', async (req, res) => {
    console.log(req.body.hoering_id, req.body.tittel)
    const hoering = new Hoering({
        hoering_id: req.body.hoering_id,
        tittel: req.body.tittel,
        frist: req.body.frist
    }
    )
    try {
        const nyHoering = await hoering.save()
        res.status(201).json(nyHoering)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router