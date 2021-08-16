const express = require('express')
const router = express.Router()
const { userMain, userSingin, userLogin } = require('../controllers/userController')
const { authentication } = require('../middleware/authentication')

router.get('/', authentication, userMain)

router.post('/singin', userSingin)

router.post('/login', userLogin)

module.exports = { router }