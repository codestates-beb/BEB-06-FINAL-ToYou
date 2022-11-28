import React from "react";
import "./Post.css";

const Post = ({board, title, comment, nickname, date, view_count, comment_count}) => {

    return (
        <div className="inner-main-body">
                    <div className="card-2">
                        <div className="card-body">
                            <div className="media">
                                <div className="media-body">
                                    <div className="text-title">{title}</div>
                                    <div className="text-comment">{comment}</div>
                                    <div className="text-nickname">{nickname}
                                    <span className="text-secondary">{date} days ago</span>
                                    </div>
                                </div>
                                <div className="text-muted">
                                    <div className="text-icon">
                                        <div className="far fa-eye">&nbsp;{view_count}</div> 
                                        <div className="far fa-comment">&nbsp;{comment_count}</div> 
                                        <div className="text-board">{board}</div>
                                    </div>        
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
);
}

export default Post;
