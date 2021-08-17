const User = require('../models/user')

const userMain = (req, res) => {
    res.send('user main')
}

const userSingin = (req, res) => {
    res.send('user singin')
}

const userLogin = (req, res) => {
    const newUser = new User({
        userName:'Emin',
        userSurname:'Sandikci',
        userAge:'21',
        userMail:'asd@asd.as'
    })

    newUser.save().exec().then((data) => {
        console.log('singin success..')
    })

    res.send('user login')
}

module.exports = { userMain, userSingin, userLogin }