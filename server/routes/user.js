const express = require('express');
const router = express.Router();
const { user } = require("../models/user");
const { board } = require("../models/board");
const { Comment } = require('../models/comment');
const { corp } = require('../models/corp');
const multer = require('multer');
const Upload = require('../middleware/image-upload');
const { imageUp } = require('../controllers/user');
const { PostImage } = require('../controllers/board');
const { CorpImage } = require('../controllers/corp');



const data = user.find({},function(err,docs){
   
    return docs;
})

//회원가입-------------------------회원가입/로그인
router.post("/register",Upload.single('image'),imageUp)




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


//글쓰기--------------------------------------커뮤니티
router.post("/write",Upload.single('image'),PostImage)

//커뮤니티페이지 게시글 세부내용 보기
router.get("/post/:post_id", (req, res) => {
    const 보드아이디 = req.params.post_id;
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

// 커뮤니티페이지 게시글 조회수 기능테스트
router.post('/community/:number', async (req, res) => {
    console.log(req.body)
    try {
      const number =await board.findOne({ _id: req.params.number }).then(num =>{
        const count = req.body.click
         board.updateOne({_id:num._id},{$set: {click:count}},function(){});
        return res.status(200).json(num);
       
      })
    
      
  
      
    } catch (err) {
      console.error(err);
    }
  });


// 게시물 좋아요 기능
  router.put('/community/:number/up', async (req, res) => {
    try {
      const postID = req.body.postID;
      const userID = req.body._id;
      const Up = req.body.up && req.body.up.includes(postID)

      const option = Up ? "$pull" : "$addToSet";
        console.log(option)
      req.body._id = await board.findByIdAndUpdate(postID, { [option]: {up:userID} },{new:true})
      .catch(err =>{
        res.status(400).json({success:false})
      })
       
  
        res.status(200).json({success:true})
    } catch (err) {
      console.error(err);
    }
  });








//댓글 작성-----------------------------------------------------
router.post("/comment", (req, res) => {
    const 댓글 = new Comment(req.body)
    console.log(댓글,"댓글")
    댓글.save((err,doc)=>{
        if(err) return res.status(404).json({fail: false, err})
        
        Comment.find({'ID':doc.ID}).populate('ID').exec((err,result)=>{
            if(err) return res.json({succsess: false, err})
            res.status(200).json({success:true,result})
        })
    })


});

//   댓글조회

router.get('/comment/:id', async (req, res) => {
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




//이미지 업로드 부분.  
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


router.post("/regist/image", Upload.single("image"),function(req,res){
    console.log(req.body,"요청")
    res.status(200).json({success: true ,filepath:res.req.file.path })
})


//스타트업글쓰기
router.post("/corpWrite",Upload.single('image'),CorpImage)


//스타트업게시판
router.get("/startUp", async (req, res) => {
    const corplist =  corp.find({})
    res.status(200).json(corplist);
    
});

//메인 페이지
router.get("/main", async (req, res) => {
    const corplist = await corp.find({});
    res.status(200).json(corplist);
});

router.post('/corp/:num', async (req, res) => {
  console.log(req.body)
  try {
    const num =await corp.findOne({ _id: req.params.num }).then(num =>{
      const count = req.body.click
      corp.updateOne({_id:num._id},{$set: {click:count}},function(){});
      return res.status(200).json(num);
     
    })
} catch (err) {
  console.error(err);
}
});




module.exports = router;
