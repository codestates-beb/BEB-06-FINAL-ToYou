const router = require('express').Router();
const { board } = require('../models/board');
const {user} = require("../models/user")


//초기데이터 메인화면
router.get('/toyou', function (req,res){
    return res.send("투유프로젝트")
})

//초기 데이터 커뮤니티--------------------------------------------------
//업로드 순
router.get('/community/up', function (req,res){
    const data1 = board.find().sort('up:-1')
    board.find({},function(err,data){
        if(err) return res.status(500).send({error: 'database err'});
        res.json(data);
    }).sort('-up');
    
})


//테스트용 API 사용X
router.get('/commun', function (req,res){
    board.find({}).populate('Id').limit(3).sort({up:-1}).exec((err,data)=>{
        if(err) return res.status(500).send({error: 'database err'});
        res.json(data);
    })
    
})
// 모든 게시글 요청
router.get('/community', function (req,res){
    board.find({}).limit(10).sort({number:-1}).exec((err,data)=>{
        if(err) return res.status(500).send({error: 'database err'});
        res.json(data);
    })
    
})









module.exports = router;