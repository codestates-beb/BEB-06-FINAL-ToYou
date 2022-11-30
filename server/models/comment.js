//세부 게시글 댓글기능.
const {user} = require("../models/user")
const mongoose = require('mongoose');
const { board } = require("./board");
const moment = require('moment');
const date= moment().format('YYYY-MM-DD HH:mm:ss');
const Schema = mongoose.Schema;


const commentSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref:user
    }, 
    postId: {
        type: Schema.Types.ObjectId,
        ref:user
    },
    boardId: {
        type: Schema.Types.ObjectId,
        ref:board 
    },
    content: {
        type: String
    },
    createAT:{
        type:String,
        default: date,
    }

})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment }