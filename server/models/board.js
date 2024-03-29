//커뮤니티 페이지 / 게시물 목록
const mongoose = require('mongoose');
const moment = require('moment');
const { Schema } = require('mongoose');
const date= moment().format('YYYY-MM-DD HH:mm:ss');
const AutoIncrement = require("mongoose-sequence")(mongoose);

const schema = mongoose.Schema;

const boardSchema =new schema({
    ID:{
        type: Schema.Types.ObjectId,  
        ref:'user',
        require: true
    },
    number:{
        type: Number,
        default:0,
        
    },
    title:{
        type: String,
        index: true
    },
    click:{
        type:String,
        default:0,
    },
    
    content:{
        type: String,
        default:0,
    },
    image:{
        type:String
    },
    Type:{
        type: String
    },
    up:[{type: Schema.Types.ObjectId,  ref:'user'}],
    riple:[{user:{type: Schema.Types.ObjectId,  ref:'comment'},comment:{type:String},username:{type:String},create:{type:String,default:date}}],  
    createAT:{
        type:String,
        default: date,
    },
    
})
boardSchema.plugin(AutoIncrement, { inc_field: "number" });


const board = mongoose.model('board',boardSchema)

module.exports={board}