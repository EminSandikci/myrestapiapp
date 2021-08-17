const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { userRouter } = require('./routers/user')

require('dotenv/config')

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) console.log('db connect..')
})

app.use(userRouter)

app.listen(3000, (err) => {
    if (!err) console.log('listining 3000 port..')
})