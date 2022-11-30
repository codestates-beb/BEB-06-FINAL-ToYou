const router = require('express').Router();
const { board } = require('../models/board');
const {user} = require("../models/user")


//초기데이터 메인화면
router.get('/toyou', function (req,res){
    return res.send("투유프로젝트")
})

//초기 데이터 커뮤니티

router.get('/community2222', function (req,res){
    const data1 = board.find().sort('up:-1')
    board.find({},function(err,data){
        if(err) return res.status(500).send({error: 'database err'});
        res.json(data);
    }).sort('-up');
    
})

router.get('/community/up', function (req,res){
    board.find({}).populate('Id').limit(3).sort({up:-1}).exec((err,data)=>{
        if(err) return res.status(500).send({error: 'database err'});
        res.json(data);
    })
    
})

router.get('/community', function (req,res){
    board.find({}).limit(10).sort({number:-1}).exec((err,data)=>{
        if(err) return res.status(500).send({error: 'database err'});
        res.json(data);
    })
    
})









module.exports = router;