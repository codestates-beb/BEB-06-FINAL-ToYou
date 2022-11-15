const router = require('express').Router();


//로딩확인용
router.get('/', function (req,res){
    res.send('우리들의 투자플랫폼 ToYou!')
})




module.exports = router;