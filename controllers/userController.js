const userMain = (req, res) => {
    req.send('user main')
}

const userSingin = (req, res) => {
    req.send('user singin')
}

const userLogin = (req, res) => {
    req.send('user login')
}

module.exports = { userMain, userSingin, userLogin }