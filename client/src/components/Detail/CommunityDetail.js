import React, { useState, useEffect } from "react";
import axios from "axios";
import Comment from "./comment";
import Swal from "sweetalert2";
import "./CommunityDetail.css"
import { Link } from "react-router-dom";
import {QueryBuilder, SmsRounded, AddComment} from '@material-ui/icons'
import { useParams } from "react-router-dom";
import { boardState, ClickState, commentState, PathState } from "../../recoil";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil";
import { useRecoilState } from "recoil";




const CommunityDetail = () => {
  const [path,setPath] = useRecoilState(PathState)
  const [detailData,setdetailData] = useRecoilState(boardState);
  const [user, setUser] = useRecoilState(userState);
  const [detail, setDetail] = useState([]);
  const [댓글,set댓글] = useRecoilState(commentState)
  const [comm,setComm] = useState()
  const [조회수,set조회수] = useRecoilState(ClickState)
  // const { _id } = useParams();
  

    // const newdata = detailData.filter((el) => el._id === c_id);
    // console.log(newdata)

    // console.log(detail)
    //${detailData[0]._id

  useEffect(()=>{
    
    console.log(조회수,"조회수")
    
    axios.post(`http://localhost:4000/community/${path}`,{"click":조회수})
        .then((response) =>{
          
           setDetail(response.data)
           setdetailData(response.data.riple)
        })
        .catch((Error)=>{
            Swal.fire({
                icon: 'error',
                text: Error,
            })
            
        })

    }, [])

    const betweenTime = (value) =>{
      const date_at=new Date(value);
      const date_now=new Date();
      const date=Math.floor((date_now.getTime() - date_at.getTime())/1000/60);
      if(date < 1) return '방금전';
      if(date <60) return `${date}분전`;
      const betweenTimeHour = Math.floor(date/60);
      if(betweenTimeHour<24) return `${betweenTimeHour}시간전`;
      const betweenTimeDay = Math.floor(betweenTimeHour/60/24);
      if(betweenTimeDay < 365) return `${betweenTimeDay}일전`;
      
      return `${Math.floor(betweenTimeDay / 365)}년전`;
  };

  const 댓글저장 = (e)=>{
    setComm(e.target.value)
  }

  const 댓글전송 = ()=>{
    const 데이터 ={
     "ID":user._id,
     "postID":detail._id,
     "riple":{
      "user": user._id,
      "comment":comm,
      "username":user.nick
     }


        
    }

    axios.put(`http://localhost:4000/write/1`,데이터)
    .then((response) =>{
      console.log(response.data,"리스폰스")
       setDetail(response.data)
       setdetailData(response.data.riple)
    })
    .catch((Error)=>{
        Swal.fire({
            icon: 'error',
            text: Error,
        })})


  }
  
    return(
      <div className="detail">
        <div className="detail_container">
        <div className="PostDetailContainer">
        <div className="PostDetailCard">
          <li className="detail_project_button">
            <Link to="/community">
                  <button className="detail_button" type="button">
                    <span>Back</span>
                  </button>
            </Link>
          </li> 
          <div>
            <h1>{detail.title}</h1>
          </div>
          <hr></hr>
          <footer className="detail_footer">
            <span className="detail_nickname">
              {user.nick}
            </span>
            <span className="detail_date">
             <QueryBuilder fontSize='small'></QueryBuilder>
             &nbsp;{betweenTime(detail.createAT)} &nbsp;&nbsp;
             <SmsRounded fontSize='small'></SmsRounded>
             &nbsp;{댓글}&nbsp;조회수&nbsp;{detail.click}

            </span>
          </footer>
        </div>
        <div className="PostDetailContent">
          <div className="detail_content">
          
           <p>{detail.content}</p>
          </div>
         <button className="likke">좋아요 👍 </button> 
        </div>

                    
        <div className="Comment">    
            <div className="comment_Wrapper">
                  <div className="comment_Top">
            {/* {commentBox.map(el => {
              return ( */}
                <Comment/>





              </div>
          <div className="comment_Bottom">
          <form className="comment_Bottom-container">
               <input
                type="text"
                placeholder="댓글 달기..."
                className="comment-input"
                // value={commentValue}
                onChange={댓글저장}
              />
           
            <button className="commentButton" onClick={댓글전송} >
              <AddComment></AddComment>
              </button>
          </form>
          </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default CommunityDetail;
