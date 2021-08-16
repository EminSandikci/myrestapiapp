const express = require('express')
const app = express()
const { userRouter } = require('./routers/user')

app.use(userRouter)

app.listen(3000,(err)=>{
    if(!err) console.log('listining 3000 port..')
})