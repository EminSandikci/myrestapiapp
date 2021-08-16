const express = require('express')
const app = express()
const user = require('./routers/user')

app.use(user)

app.listen(3000,(err)=>{
    if(!err) console.log('listining 3000 port..')
})