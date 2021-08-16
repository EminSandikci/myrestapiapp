const express = require('express')
const router = express.Router()
const { userMain, userSingin, userLogin } = require('../controllers/userController')
const { authantication } = require('../middleware/authantication')

router.get('/', authantication, userMain)

router.post('/singin', userSingin)

router.post('/login', userLogin)

module.exports = { router }