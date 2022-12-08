import React, { useEffect, useState } from "react";
import RightTab from "./RightTab";
import "./MyPageForm.css";
import { useParams } from "react-router-dom";
import { levelState, userState } from "../../recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import Web3 from'web3'
import Swal from "sweetalert2";
import LV1 from "./level/lv01.gif"
import LV2 from "./level/lv02.gif"
const web3 = new Web3(window.ethereum);

const 프로필 ="https://media.istockphoto.com/id/1210939712/vector/user-icon-people-icon-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=vKDH9j7PPMN-AiUX8vsKlmOonwx7wjqdKiLge7PX1ZQ="
const MyPageForm = () => {
  const [tab, setTab] = useState(false);
  const [LV,setLV]= useState(false)
  const mypageData = useRecoilValue(userState);
  const [레벨,set레벨]=useRecoilState(levelState)
  const { id } = useParams();


  useEffect(()=>{
 
   

    }, [])






  const 구독하기 = ()=>{
    setTab(true)
    return 3
  }

  const 보상수령 = async ()=>{
    var accounts = await web3.eth.getAccounts()
    const MyContract = require("../Invest/aabi.json");
    const contractAddress = "0x415afED97879597f37E02Bc57b9031289dA4d65b"
    const tether = new web3.eth.Contract(MyContract, contractAddress)
    //Web3.eth.persnal.unlockAccount(address,password,unlockDuration[cb])
    Web3.eth.signTransaction({
      from: "0x711E5707C4964b475C2D132c5C24a6F84D492eB1",
      gasPrice: "20000000000",
      gas: "21000",
      to: accounts[0],
      value: "1",
      data: ""
  }, 'b5b2eeebcb15ed9057d90edd34dbd031b585bb62c87c706cc7401c9f52188fea').then(console.log);

  }

  console.log(id);
  console.log(mypageData);
  return (
    <div className="mypage">
      <section className="ant_layout">
        <main className="ant_layout_content">
          <div className="index_user">
            <div className="ant_row">
              <div className="ant_col_8 index_mypage_left">
                <div className="index_profile_wrap">
                  <div className="index_profile">
                    <div className="index_profile_info">
                      <div className="ant_row" style={{ display: "flex" }}>
                        <div className="index_nickname"> 
                        {LV?<img src={LV2}alt=""/>:<img
                        src={LV1}alt=""/>  }
                        
                        
                        {mypageData.nick}</div>
                        
                       
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="level_progress_wrap">
                     {LV?<progress value={"20"} max={"100"} style={{ width: "100%"}}> </progress>:
                     <progress value={"50"} max={"100"} style={{ width: "100%"}}> </progress>
                    }  </div>
                    <div className="level_progress_level">
                      {LV?<span>Lv.3 까지 75% 남았습니다. [EXP 20 / EXP 100]</span>:<span>Lv.2 까지 50% 남았습니다. [EXP 10 / EXP 20]</span>}
                    </div>
                  </div>
                </div>
                <div className="mytab_wrapper">
                  <div className="earncc_earncc">
                    <span className="earncc_title">오늘의 활동 결과</span>
                    <div>
                      <span className="earncc_title_today">
                        - 오늘의 경험치
                      </span>
                      <div className="earncc_today_detail">
                        <span>0 EXP</span>
                      </div>
                    </div>
                    <div>
                      <span className="earncc_title_today">
                        - 누적 경험치
                      </span>
                      <div className="earncc_today_detail">
                        <span>0 EXP</span>
                      </div>
                    </div>
                  </div>
                  <div className="mytab_notice1">
                    <div>
                      <img
                        className="notice1_img"
                        src="https://storage.cobak.co/direct/kyc/infoIcon5.png"
                        alt=""
                      />
                      레벨업 보상
                    </div>
                    <div className="notice1_desc">레벨업 달성 시 투유토큰을 드려요!</div>
                    <div className="notice1_click">
                      <div className="notice1_click_click">{보상수령}보상 수령하기</div>
                    </div>
                  </div>
                  <div className="mytab_notice1">
                    <div>
                      <img
                        className="notice1_img"
                        src="https://storage.cobak.co/direct/kyc/infoIcon5.png"
                        alt=""
                      />
                      구독 서비스 
                    </div>
                    <div className="notice1_desc">투우의 프로미엄 구독서비스를 이용해보세요!</div>
                    <div className="notice1_click">
                      <div className="notice1_click_click" onClick={구독하기}>구독서비스 이용하기</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="index_right">
                <div className="index_right_tab">
               {tab?<RightTab tab={3} />:<RightTab/>}
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default MyPageForm;
