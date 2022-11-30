const express = require('express');
const router = express.Router();
const { user } = require("../models/user");
const { board } = require("../models/board");
const { Comment } = require('../models/comment');
const multer = require('multer');
const Upload = require('../middleware/image-upload');



const data = user.find({},function(err,docs){
   
    return docs;
})


router.post("/register", (req, res) => {

    //클라이언트 에서 받아서 DB에 저장
    const 유저 = new user(req.body)
    유저.save((err,doc)=>{
        if(err) return res.status(404).json({fail: false, err})
        return res.status(200).json({success:true})
    })

});


router.post("/login", (req, res) => {
    
    user.findOne({id: req.body.id}, (err, users)=>{
       if(!users){
        console.log(users,"로그인테스트")
        return res.status(404).json({fail:"아이디를 찾을수 없습니다", err})
    } else{
        if(req.body.pwd==users.pwd){
            return res.status(200).json(users)
        }
        return res.status(404).json({fail:"비밀번호 불일치", err})
    }
        // 요청된 이메일이 db에 있다면 비밀번호 일치여부 확인
        // 일치 시, 토큰 생성
    });  
    
});

//글쓰기
router.post("/Write", (req, res) => {

    //클라이언트 에서 받아서 DB에 저장
    const 게시물 = new board(req.body)
    게시물.save((err,doc)=>{
        if(err) return res.status(404).json({fail: false, err})
        return res.status(200).json({success:true})
    })

});

//커뮤니티페이지 게시글 세부내용 보기
router.get("/board/:boardId", (req, res) => {
    const 보드아이디 = req.params.boardId;
    console.log(보드아이디)

    board.findById(보드아이디, (err, users)=>{
        console.log(users,"유저스")
        if(!users){
            return res.status(404).json({fail: false, err})
        } else{
            return res.status(200).json(users)
        }
        
    });  

});

router.get('/community/:number', async (req, res) => {
    try {
      const number =await board.findOne({ number: req.params.number }).populate('Id'); 
      console.log(number)
      const count = number.click++;
      
      
     board.updateOne({_id:number._id},{$inc: {click:1}},function(){});
      
  
      res.json(number);
    } catch (err) {
      console.error(err);
    }
  });








//댓글 작성
router.post("/comment", (req, res) => {
    const 댓글 = new Comment(req.body)
    console.log(댓글,"댓글")
    댓글.save((err,doc)=>{
        if(err) return res.status(404).json({fail: false, err})
        
        Comment.find({'writer':doc.writer}).populate('writer').exec((err,result)=>{
            if(err) return res.json({succsess: false, err})
            res.status(200).json({success:true,result})
        })
    })


});

router.get("/comment/:id", (req, res) => {
    const 보드아이디 = req.params.id;

    board.findById(보드아이디, (err, users)=>{
        console.log(users,"유저스")
        if(!users){
            return res.status(404).json({fail: false, err})
        } else{
            return res.status(200).json(users)
        }
        
    });  

});


router.get('/:id/comment', async (req, res) => {
    try {
      const comments = await Comment.find({ boardId: req.params.id }).populate('boardId'); 
      // Comment에서 commenter를 objectId를 받아 찾은뒤 populate("commenter")를 하여 보기쉬운 객체형식으로 바꿔줍니다.
      console.log(comments);
      // 콘솔의 결과는 예를들면 이렇습니다. 위의 스키마를 확인하고 결과를 보시면 이해가 되실겁니다.
      // {
      //    _id: 61d197172b404f4d8239d7b9,
      //   commenter: {
      //     _id: 61d17d932266c80cc6256a8d,
      //     name: 'zero',
      //     age: 20,
      //     married: false,
      //     comment: '안녕하세요 몽고db 사용',
      //     createdAt: 2022-01-02T01:00:00.000Z
      //   }
      //   comment: '하나더 등록',
      //   createdAt: 2022-01-02T12:14:15.279Z,
      //   __v: 0
      // }
      res.json(comments);
    } catch (err) {
      console.error(err);
    }
  });
 






//커뮤니티 부분 댓글 업데이트
router.post("/comment/:boardId", (req, res) => {
    const 보드아이디 = req.params.boardId;
    




});






//커뮤니티 페이지 전체정보 요청 보내주기
router.get("/board", (req, res) => {
    board.find({},function(err,docs){
        return res.json(docs);
    })
});


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/profile');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage }).single("file");
  
  router.post("/board/image", (req, res) => {
    console.log(req.body,"요청")
    upload(req, res, (err) => {
      if (err) {
        res.status(400).json({ success: false });
      } else {
        res.status(200).json({success: true ,filepath:res.req.file.path })
      }
    });
  });



router.post("/regist/image", Upload.single("file"),function(req,res){
    console.log(req.body,"요청")
    res.status(200).json({success: true ,filepath:res.req.file.path })
})

module.exports = router;