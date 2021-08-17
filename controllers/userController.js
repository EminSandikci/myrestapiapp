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
        console.log('ok..')
        res.json({ message: "ok.." })
    } catch (error) {
        console.log('error..')
        res.json({ message: "error.." })
    }
}

const userLogin = (req, res) => {
    res.send('ok')
}

module.exports = { userMain, userSingin, userLogin }