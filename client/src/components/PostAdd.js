import React, { useState, useEffect } from 'react';
import './PostAdd.css'
import arrowdown from '../icon/arrow-down.png'
import arrowup from '../icon/arrow-up.png'

const PostAdd = () => {

  const [isCheck, setIsCheck] = useState(false)


  return (
    <div>
      <div className='Mypage__content'>
                <div className='Mypage__content-grup'>
                    <div className='Mypage__content-grup-info'>
                        게시판 작성 가이드     
                            <img className='open-transmission-container'  alt='img' src={`${isCheck? arrowup:arrowdown}`}
                            onClick={ ()=> {
                                if(isCheck === false){
                                    setIsCheck(true)
                                }else{
                                    setIsCheck(false)
                                }
                                }}/>
                            <div className={`transmission-container ${isCheck ? "displayblock" : ""}`}>
                                <div>게시물 작성 조건</div>
                                <li>정해진 폼대로 작성할 것</li>
                                <div>게시물의 이동 및 삭제 기준</div>
                                <li>욕설금지</li>
                                <li>도용금지</li>
                                <li>홍보금지</li>
                            </div>
                        </div>
                    </div>
      </div>
    </div>
  );
};

export default PostAdd;