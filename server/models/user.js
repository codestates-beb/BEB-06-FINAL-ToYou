//*회원가입 페이지 , 로그인 페이지 , 마이페이지 

const mongoose = require('mongoose');
const moment = require('moment');
const date= moment().format('YYYY-MM-DD HH:mm:ss');

const Schema = mongoose.Schema

const userSchema= new Schema({
    id:{type: String,  maxlength : 30, unique:1, trip: true },
    pwd:{type: String,},
    name: {type:String},
    account: {type:String},
    nick:{type: String, maxlength : 10, trip: true, unique:1},
    image:{type:String},
    level:{type: Number, default:0,},
    exp:{type:String, default:0,},
    token: {type: String},
    tokenExp: {type: Number},
    token_value: {type: String},
    won_value: {type: String},
    val:{type: String,},
    up:[{type: Schema.Types.ObjectId,  ref:'board',ref:'corp'}],  
    createAT:{type:String, default: date, },
    userType:{type:Number, default:0
    }
})




const user = mongoose.model('user',userSchema)

module.exports={user}