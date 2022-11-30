//스타트업 추천 기능

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
const likeSchema = mongoose.Schema({
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

const Like = mongoose.model('Like', likeSchema);

module.exports = { Like }