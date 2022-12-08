import React from "react";
import "./comment.css"
import { useRecoilState } from "recoil";
import { boardState } from "../../recoil";


const Comment = ()=>{
    const [detailData,setdetailData] = useRecoilState(boardState);


return(
<div>

{detailData.map((number) => 

<div className="comment_Comment" >
<form className="comment_BottomLeft">
<div className="comment2">
<div className="commentUsername"><b>{number.username}</b></div>
<span className="commentComment">{number.comment}</span>
</div>
<span className="commentDate">{number.create}</span>
</form>
</div>





)}



</div>
                 
)
}

export default Comment