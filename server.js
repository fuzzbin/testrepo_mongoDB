require('dotenv').config()

const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('erros', (error) => {console.error(error)})
db.once('open', () => {console.log('DB ok!')})

const apiRouter = require('./routes/api')
const homeRouter = require('./routes/home')
app.use('/api', apiRouter)
app.use('/', homeRouter)

app.listen(3000, () => {console.log("Server kjører på port 3000")})