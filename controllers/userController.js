const userMain = (req, res) => {
    res.send('user main')
}

const userSingin = (req, res) => {
    res.send('user singin')
}

const userLogin = (req, res) => {
    res.send('user login')
}

module.exports = { userMain, userSingin, userLogin }