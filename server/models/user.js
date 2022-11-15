//*회원가입 페이지 , 로그인 페이지 , 마이페이지 

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id:{
        type: String,
        maxlength : 30,
        unique:1,
        trip: true
    },
    nick:{
        type: String,
        maxlength : 10,
        trip: true,
        unique:1
    },
    pwd:{
        type: String,
    },
    role:{
        type: Number,
        default:0,
    },
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})




const user = mongoose.model('user',userSchema)

module.exports={user}