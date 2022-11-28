const router = require('express').Router();
const {user} = require("../models/user")


//로딩확인용
router.get('/toyou', function (req,res){
    res.send('우리들의 투자플랫폼 ToYou!')
})




module.exports = router;