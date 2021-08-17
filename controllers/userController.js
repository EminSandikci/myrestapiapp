const User = require('../models/user')

const userMain = (req, res) => {
    res.send('user main')
}

const userSingin = (req, res) => {
    const newUser = new User({
        userName: 'Emin',
        userSurname: 'Sandikci',
        userAge: '21',
        userMail: 'asd@asd.as'
    })

    newUser.save().exec().then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json(err)
    })
}

const userLogin = (req, res) => {
    res.send('ok')
}

module.exports = { userMain, userSingin, userLogin }