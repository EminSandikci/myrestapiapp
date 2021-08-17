const mongoose = require('mongoose')

const userShema = mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    userName: {
        type: String,
        required: true
    },
    userSurname: {
        type:String,
        required:true
    },
    userAge: {
        type:String,
        required:true
    },
    userMail: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('User', userShema)