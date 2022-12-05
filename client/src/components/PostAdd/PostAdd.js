import React, { useState, useRef} from 'react';
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import './PostAdd.css'
import {PermMedia, EmojiEmotions, RateReview} from "@material-ui/icons"  // 아이콘
import Picker from 'emoji-picker-react';
import { data_a } from "./AccordionData";
import AccordionItem from "./AccordionItem";
import axios from "axios";
import Swal from "sweetalert2";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/user";
import { boardState } from "../../recoil/board";

const PostAdd = () => {

    let dataURL ='';
  
    // const {image,setUsers,user} = useContext(UseContext);
    const navigator = useNavigate();

   //게시글 값 상태 저장
    const [user, setUser] = useRecoilState(userState);
    const [post, setPost] = useRecoilState(boardState);
    const [type, setType] = useState('') //타입
    const [title, setTitle] = useState('') //제목
    const [content, setContent] = useState('')  //내용
    const [imgBoxTog, setImgBoxTog] = useState(false) // 이미지 있는지 확인
    const [postimage, setPostimage] =useState('') //게시글 이미지

    // console.log(user);
    
   //게시글 선택바
    const select = [
        { value: "0", label: "전체게시판" },
        { value: "1", label: "코인잡담" },
        { value: "2", label: "코인정보" }
      ];

    // 이모지 선택 
    const [showPicker, setShowPicker] = useState(false);
  
    const onEmojiClick = (event, emojiObject) => {
      setContent(content + emojiObject.emoji) // 선택한 이모지값을 컨텐츠 값에 추가해준다.
    };
    //------------------------------------------------------------
  
    // 이미지 업로드 ---------------------------
    const selectFile = useRef("")
    const onLoadFile = (e) => {
      let input = e.target;
      let reader = new FileReader();
      reader.onload = function(){
          dataURL = reader.result;
          let upLoadIMG = document.getElementById('upload-img')
          upLoadIMG.src = dataURL;
          setImgBoxTog(true);
          setPostimage(dataURL);
      };
      reader.readAsDataURL(input.files[0]);
    }
  
    const deleteImg = () => {
      setImgBoxTog(false);
      setPostimage('');
    }
  
   const getContent =(e) =>{
     const content = e.target.value
     setContent(content);
   }
   
   const getTitle =(e) =>{
    const title = e.target.value
    setTitle(title);
  }

  const getType =(e) =>{
    console.log(e.label)
    const type = e.label
    setType(type);
  }
   // 아코디안 메뉴

   const [clicked, setClicked] = useState("0");

   const handleToggle = (index) => {
     if (clicked === index) {
       return setClicked("0");
     }
     setClicked(index);
   };
   // 버튼 클릭시 게시글 저장(axios통신)

   const Share = () => {
    const formData = new FormData();
    formData.append("image", postimage);
        // console.log(postimage)
        // console.log(formData)
    axios
     .post("http://localhost:4000/community/write1",
     {
       ID : user._id,
       title : title,
       content : content,
       Type : type,
      //  image : postimage,
      //  exp : 10,
     },
     {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    },)
    // console.log(postimage)

     // 등록 성공시 커뮤니티 메인페이지로 이동
     .then(function (response) {
      // 로그인 성공시 메인페이지로 이동
      console.log(response);
      setPost(response.data);
      setTitle('');
      setContent('');
      setImgBoxTog(false);
      setPostimage('');

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "게시글 등록 성공",
        showConfirmButton: false,
        timer: 1500,
      });
      navigator("/community");
    })
     .catch((Error)=>{
      // console.log(res.data);
       Swal.fire({
         icon: 'error',
         title:'게시글 등록 실패',
        //  text: Error,
         timer: 1500,
       })
     })  
 }


   // ----------------------------------------

  return (
    <div className='body'>
    <div className="postadd">
        <div className="postaddWrapper">
            <div className='postTitle'>글쓰기</div>
            <Select className='postaddSelect' placeholder='게시판 선택' name='select' options={select} onChange={getType}/>
            <div className="postaddTopTitle">
                <textarea className='postaddtitle' placeholder='제목을 입력해주세요.'  onChange={getTitle} value={title}></textarea>
            </div>
            <div className="postaddTop">
                <textarea id="text-area" className="postaddInput" placeholder="게시글을 입력해주세요." onChange={getContent} value={content}>
                </textarea>
            </div>
            <div className="postaddcenter">
                <div className={`postaddImgBox ${imgBoxTog ? "": "displaynone" }`}> 
                    <img id="upload-img" alt="face"></img>
                    <button className="deleteButton" onClick={deleteImg}>❌</button>
                </div>
                {showPicker && (
                  <Picker pickerStyle={{ width: "15rem", height: "15rem" }} onEmojiClick={onEmojiClick} />
                )}
            </div>
            <div className="postaddBottom">
                <div className="postaddOptions">
                    <div className="postaddOption" onClick={()=> {selectFile.current.click()}}>  
                        <PermMedia htmlColor="tomato" className="postaddIcon"/>
                        <span className="postaddOptionText">Photo</span>   
                        <input type='file' id='fileInput' accept='img/*' style={{display:"none"}} ref={selectFile} onChange={onLoadFile}></input>  
                    </div>
                    <div className="postaddOption" onClick={() => setShowPicker((val) => !val)} >
                        <EmojiEmotions htmlColor="goldenrod" className="postaddIcon"/>
                        <span className="postaddOptionText" >Emotions</span>
                    </div>   
                </div>
                    <button className="postaddButton" onClick={Share}>
                    <RateReview></RateReview>
                    </button>     
            </div>
        </div>
            
        <div className='rightbody' >
        {data_a.map((data, index) => (
          <div key={index}>
            <AccordionItem
            onToggle={() => handleToggle(index)}
            active={clicked === index}
            data={data}
            />
            </div>
        ))}
        </div>
    </div>
    </div>
  );
};

export default PostAdd;

// const select = [
//   { value: "좋아요 순", label: "좋아요 순" },
//   { value: "최신 순", label: "최신 순" },
// ];

// <Select className='inner-main-select' placeholder='정렬' name='select' options={select} />