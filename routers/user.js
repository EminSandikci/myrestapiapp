const express = require('express')
const userRouter = express.Router()
const { userMain, userSingin, userLogin } = require('../controllers/userController')
const { authentication } = require('../middleware/authentication')

userRouter.get('/', authentication, userMain)

userRouter.post('/singin', userSingin)

userRouter.post('/login', userLogin)

module.exports = { userRouter }