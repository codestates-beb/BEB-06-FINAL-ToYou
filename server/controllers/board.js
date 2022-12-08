const { board } = require("../models/board");
const moment = require('moment');
const date= moment().format('YYYY-MM-DD HH:mm:ss');

exports.postImage = (req, res, next) => {
    console.log(req.file)
    const post = {
      ID: req.body.ID,
      title: req.body.title,
      content: req.body.content,
      image:req.file.path,
      createAT: date
    };
    const Submit = new board(post)
    Submit.save((err,doc)=>{
      if(err) return res.status(404).json({fail: false, err})
      return res.status(200).json({success:true})
  })
}


exports.post = (req, res, next) => {
  console.log(req.body)
  const Submit1 = {
      ID: req.body.ID,
      title: req.body.title,
      content: req.body.content,
      riple:req.body.riple
  }
  const 게시물 = new board(req.body)
  게시물.save((err,doc)=>{
    if(err) return res.status(404).json({fail: false, err})
    return res.status(200).json(doc)
})
}