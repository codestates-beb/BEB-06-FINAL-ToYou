const { corp } = require("../models/corp");
const moment = require('moment');
const date= moment().format('YYYY-MM-DD HH:mm:ss');

exports.corpImage = (req, res, next) => {
    console.log(req.file)
    const corp = {
      ID: req.body.ID,
      title: req.body.title,
      content: req.body.content,
      image:req.file.path,
      createAT: date
    };
    const Submit = new board(corp)
    Submit.save((err,doc)=>{
      if(err) return res.status(404).json({fail: false, err})
      return res.status(200).json({success:true})
  })
}