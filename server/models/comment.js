//세부 게시글 댓글기능.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
const commentSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 
    }, 
    postId: {
        type: Schema.Types.ObjectId,
        ref: 
    },
    responseTo: {
        type: Schema.Types.ObjectId,
        ref: 
    },
    content: {
        type: String
    }

}, { timestamps: true })
*/

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment }