import React, {useEffect, useState} from "react";
import "./Post.css";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/user";
import { boardState, ClickState, commentState, PathState } from "../../recoil";
// import { boardState } from "../../recoil/board";

const Post = ({title, comment, createAT, Type, _id, com,click}) => {

    const [user, setUser] = useRecoilState(userState);
    const [detailData,setDetail] = useRecoilState(boardState);
    const [path,setPath] = useRecoilState(PathState)
    const [조회수,set조회수] = useRecoilState(ClickState)
    const [댓글,set댓글] = useRecoilState(commentState)

// 시간계산

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


  const postClick = (e) => {
    
    setPath(_id)
    set조회수(Number(click)+1)
    set댓글(com)
    

    ///여기에 리코일 을 넣자

  }


    return (
        <div className="inner-main-body" onClick={postClick} key={_id}>
                    <div className="card-2">
                        <div className="card-body">
                            <div className="media">
                                <div className="media-body"  >
                                    <div className="post-id">{_id} key={_id}</div>
                                    <div className="text-title">{title}</div>
                                    <div className="text-comment">{comment}</div>
                                    <div className="text-nickname">{user.nick}
                                    <span className="text-secondary">{betweenTime(createAT)}</span>
                                    </div>
                                </div>
                                <div className="text-muted">
                                    <div className="text-icon">
                                        <div className="far fa-eye">&nbsp;{click}</div> 
                                        <div className="far fa-comment">&nbsp;{com}</div> 
                                        <div className="text-board">{Type}</div>
                                    </div>        
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
);
}

export default Post;
