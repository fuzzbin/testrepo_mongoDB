const mongoose = require('mongoose')

const hoeringSchema = new mongoose.Schema({
    hoering_id: {
        type: String,
        required: true
    },
    tittel: {
        type: String,
        required: true
    },
    frist: {
        type: Date,
        required: true,
        default: Date.now
    }
}, { collection: 'hoeringer' })

module.exports = mongoose.model('Hoering', hoeringSchema)