const { corp } = require("../models/corp");
const moment = require('moment');
const date= moment().format('YYYY-MM-DD HH:mm:ss');

exports.CorpImage = (req, res, next) => {
    console.log(req.body)
    const post = {
      type: req.body.type,
      name: req.body.name,
      corp: req.body.corp,
      title: req.body.title,
      body: req.body.body,
      image:req.file.path,
      since: req.body.since,
      zone: req.body.zone,
      up:req.body.up,
      createAT: date
    };
    const Submit = new corp(post)
    Submit.save((err,doc)=>{
      if(err) return res.status(404).json({fail: false, err})
      return res.status(200).json({success:true})
  })
}