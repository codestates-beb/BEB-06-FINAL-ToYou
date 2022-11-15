//스타트업 비추 기능
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
const dislikeSchema = mongoose.Schema({
   userId: {
       type: Schema.Types.ObjectId,
       ref: 
   },
   commentId: {
       type: Schema.Types.ObjectId,
       ref: 
   },
   videoId: {
       type: Schema.Types.ObjectId,
       ref: 
   }

}, { timestamps: true })
*/

const Dislike = mongoose.model('Dislike', dislikeSchema);

module.exports = { Dislike }