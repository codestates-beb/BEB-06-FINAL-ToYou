const { board } = require("../models/board");
const moment = require('moment');
const date= moment().format('YYYY-MM-DD HH:mm:ss');

exports.PostImage = (req, res, next) => {
    console.log(req.body)
    const post = {
      ID: req.body.ID,
      title: req.body.title,
      content: req.body.content,
      image:req.file.path,
      exp: req.file.exp,
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
  const postboard = {
    ID: req.body.ID,
    title: req.body.title,
    content: req.body.content,
    Type: req.body.Type,
}
const Submit = new board(postboard)
  Submit.save((err,doc)=>{
    if(err) return res.status(404).json({fail: false, err})
    return res.status(200).json(doc)
})
}