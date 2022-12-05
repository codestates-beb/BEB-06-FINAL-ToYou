import React, {useEffect, useState} from "react";
import "./Post.css";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/user";
// import { boardState } from "../../recoil/board";

const Post = ({title, comment, createAT, Type}) => {

    const [user, setUser] = useRecoilState(userState);

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


    return (
        <div className="inner-main-body">
                    <div className="card-2">
                        <div className="card-body">
                            <div className="media">
                                <div className="media-body">
                                    <div className="text-title">{title}</div>
                                    <div className="text-comment">{comment}</div>
                                    <div className="text-nickname">{user.nick}
                                    <span className="text-secondary">{betweenTime(createAT)}</span>
                                    </div>
                                </div>
                                <div className="text-muted">
                                    <div className="text-icon">
                                        <div className="far fa-eye">&nbsp;0</div> 
                                        <div className="far fa-comment">&nbsp;0</div> 
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
