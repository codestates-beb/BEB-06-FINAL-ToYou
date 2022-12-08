import React from "react";
//import "./MyPageForm.css";
import { useParams } from "react-router-dom";
import { userState } from "../../recoil";
import { useRecoilValue } from "recoil";

import image from "../../icon/base.png"
const InvestForm = () => {
  const mypageData = useRecoilValue(userState);
  const { id } = useParams();


  return (
    <div className="mypage">
      <img src={image} className='App-logo' alt='React' />
      투자페이지 테스트
            


    </div>
  );
};

export default InvestForm;
