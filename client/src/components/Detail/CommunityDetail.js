import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./CommunityDetail.css"
import { Link } from "react-router-dom";
import {QueryBuilder, SmsRounded, AddComment} from '@material-ui/icons'
import { useParams } from "react-router-dom";
import { boardState } from "../../recoil";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil";
import { useRecoilState } from "recoil";



const CommunityDetail = () => {

  const detailData = useRecoilValue(boardState);
  const [user, setUser] = useRecoilState(userState);
  const [detail, setDetail] = useState([]);
  console.log(detailData)
  // const { _id } = useParams();
  // console.log(c_id)

    // const newdata = detailData.filter((el) => el._id === c_id);
    // console.log(newdata)

    // console.log(detail)
 

  useEffect(()=>{
    axios.post(`http://localhost:4000/community/${detailData[0]._id}`,{withCredentials: true})
        .then((response) =>{
          // console.log(response.data)
           setDetail(response.data)
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
          <footer className="detail_footer">
            <span className="detail_nickname">
              {user.nick}
            </span>
            <span className="detail_date">
             <QueryBuilder fontSize='small'></QueryBuilder>
             &nbsp;{betweenTime(detail.createAT)} &nbsp;&nbsp;
             <SmsRounded fontSize='small'></SmsRounded>
             &nbsp;0
            </span>
          </footer>
        </div>
        <div className="PostDetailContent">
          <div className="detail_content">
           {detail.content}
          </div>
        </div>
        <div className="Comment">    
            <div className="comment_Wrapper">
                  <div className="comment_Top">
            {/* {commentBox.map(el => {
              return ( */}
                <div className="comment_Comment" >
                  <form className="comment_BottomLeft">
                  <div className="comment2">
                  <div className="commentUsername">닉네임</div>
                  <span className="commentComment">comment</span>
                  </div>
                  <span className="commentDate">날짜</span>
                  </form>
                </div>
              </div>
          <div className="comment_Bottom">
          <form className="comment_Bottom-container">
            <input
              type="text"
              placeholder="댓글 달기..."
              className="comment-input"
              // value={commentValue}
              // onChange={onChange}
            />
            <button className="commentButton" >
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
