const { user } = require("../models/user");
const moment = require('moment');
const date= moment().format('YYYY-MM-DD HH:mm:ss');

exports.imageUp = (req, res, next) => {

    const regist = {
      id: req.body.id,
      pwd: req.body.pwd,
      nick: req.body.nick,
      image: req.file.path,
      userTpye: req.body.userTpye,
      createAT: date
    };
    const rest = new user(regist)
    rest.save((err,doc)=>{
      console.log(rest)
      if(err) return res.status(404).json({fail: false, err})
      return res.status(200).json({success:true})
  })
  
}