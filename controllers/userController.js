const User = require('../models/userModel')

const userMain = (req, res) => {
    res.send('user main')
}

const userSingin = async (req, res) => {
    const newUser = new User({
        userName: 'Emin',
        userSurname: 'Sandikci',
        userAge: '21',
        userMail: 'asd@asd.as'
    })

    try {
        const saveUser = await newUser.save()
        res.json(saveUser)
    } catch (error) {
        res.json(error)
    }
}

const userLogin = (req, res) => {
    res.send('ok')
}

module.exports = { userMain, userSingin, userLogin }