// 투자페이지 

//커뮤니티 페이지 / 게시물 목록
const mongoose = require('mongoose');
const moment = require('moment');
const { Schema } = require('mongoose');
const { memoryStorage } = require('multer');
const date= moment().format('YYYY-MM-DD HH:mm:ss');
const AutoIncrement = require("mongoose-sequence")(mongoose);

const schema = mongoose.Schema;

const stockSchema =new schema({
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
    corp:{
        type: String,
        index: true
    },
    arp:{
        type:String,
        default:0,
    },
    daily:{
        type: String,
        default:0,
    },
    adminAccount:{
        type:String,
        default:0,
    },
    contract:{
        write:[{type:String,dfrault:''}],
        postUp:[{type:String,dfrault:''}],
        staking:[{type:String,dfrault:''}]
    },
    image:{
        type:String
    },
    time:{
        type:String
    },
    Type:{
        type: String
    },
    createAT:{
        type:String,
        default: date,
    },
    
})
stockSchema.plugin(AutoIncrement, { inc_field: "number" });


const stock = mongoose.model('stock',stockSchema)

module.exports={stock}



