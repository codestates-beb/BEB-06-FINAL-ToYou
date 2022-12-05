//스타트업 페이지
const mongoose = require('mongoose');
const moment = require('moment');
const { Schema } = require('mongoose');
const AutoIncrement = require("mongoose-sequence")(mongoose);
const date= moment().format('YYYY-MM-DD HH:mm:ss');
const schema = mongoose.Schema;

const corpSchema = new schema({
     id:{
        type: Schema.Types.ObjectId,  
        ref:'user',
        require: true
    },
    type:{
        type:String,
        
    },
    name:{
        type:String,
       
    },
    corp:{
        type:String
    },
    symbol:{
        type:String
    },
    image:[{
        type:String
    }],
    body: {
        type: String
    },
    since: {
        type: String
    },
    zone: {
        type: String
    },
    upz:[{type: Schema.Types.ObjectId, ref:'user'}],
    createAT:{
        type:String,
        default: date,
    },
})

// {
//     "type": "sad",
//     "name" : "asd",
//     "corp" : "sda/sda",
//     "symbol" : "asd",
//     "image" : "sda",
//     "body" : "sad sad",
//     "since" : "1",
//     "zone" : "seou."
//     }
corpSchema.plugin(AutoIncrement, { inc_field: "num" });

const corp = mongoose.model('corp',corpSchema)

module.exports={corp}