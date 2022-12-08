import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { levelState, userState } from "../../recoil";
import SubscribeForm from "../Invest/Subscribe";
import DummyPost from "./DummyPost";
import axios from "axios";
import Swal from "sweetalert2";


const Tab = styled.div`
  display: inline-block;
  width: 100px;
  height: 40px;
  background-color: #eee;
  text-align: center;
  line-height: 40px;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  margin: 0 10px;
`;

const TabList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const TabContent = styled.div`
  margin-top: 20px;
  border: 1px solid #eee;
  padding: 10px;
`;

const RightTab = (props) => {
  const [user,setuser]=useRecoilState(userState)
  const [tab, setTab] = useState(1);
  const [레벨,set레벨] = useRecoilState(levelState)
  let test =props.tab


  const handleTab = (idx) => {
    axios.get(`http://localhost:4000/mypage/${user._id}`)
    .then((response) =>{
      console.log(response.data.length)
      set레벨(response.data)
      
       
      //  setPost1(response.data)
    })
    .catch((Error)=>{
        Swal.fire({
            icon: 'error',
            text: Error,
        })
    })



    if(test==3){
      setTab(test);
    }else{
      setTab(idx)
    }

 
    
    
      
    
    
  };

  return (
    <div>
      <TabList>
        <Tab onClick={() => handleTab(1)}>구독</Tab>
        <Tab onClick={() => handleTab(2)}>내가 작성한 글</Tab>
        <Tab onClick={() => handleTab(3)}>내가 작성한 댓글</Tab>
        <Tab onClick={() => handleTab(4)}>구매 내역</Tab>
      </TabList>
      <TabContent>
        {tab === 1 && (
          <div>
            <SubscribeForm/>
            
          </div>
        )}
        {tab === 2 && <div>내 댓글</div>}
        {tab === 3 && <DummyPost />}
        {tab === 4 && <div>구매내역</div>}
      </TabContent>
    </div>
  );
};

export default RightTab;
