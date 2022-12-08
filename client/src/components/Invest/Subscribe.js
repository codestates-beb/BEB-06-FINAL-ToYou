import React, { useEffect, useState } from "react";
import "./Subscribe.css";
import { useParams } from "react-router-dom";
import { userState } from "../../recoil";
import { useRecoilValue } from "recoil";
import Web3 from'web3'
import Swal from "sweetalert2";
const web3 = new Web3(window.ethereum);

//import image from "../../icon/base.png"
const SubscribeForm = () => {
  const mypageData = useRecoilValue(userState);
  const { id } = useParams();
  const [구독,set구독] = useState(false)
  const [구독자,set구독자] = useState("구독자가 아닙니다")

 
 
if(구독){
  set구독자("30일남았습니다")
}





  const 전송 =async ()=>{
    var accounts = await web3.eth.getAccounts()
    const MyContract = require("./aabi.json");
    const contractAddress = "0x415afED97879597f37E02Bc57b9031289dA4d65b"
    const tether = new web3.eth.Contract(MyContract, contractAddress)
    tether.methods.transfer(contractAddress, "1000").send({from:accounts[0]}).on('receipt', function(receipt){
      console.log(receipt) // contains the new contract address
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: receipt.contractAddress,
        showConfirmButton: false,
        timer: 1500,
      });
      set구독(true)
   })
  }



  return (
    <div class="wrapper3">
    <input type="radio" name="slider" id="tab-1"/>
    <input type="radio" name="slider" id="tab-2" checked/>
    <input type="radio" name="slider" id="tab-3"/>
    <header>
      <label for="tab-1" class="tab-1">Basic</label>
      <label for="tab-2" class="tab-2">Standard</label>
      <label for="tab-3" class="tab-3">premium</label>
      <div class="slider"></div>
    </header>
    <div class="card-area">
      <div class="cards">
        <div class="row row-1">
          <div class="price-details">
            <span class="price">500</span>
            <p>For beginner use</p>
          </div>
          <ul class="features">
            <li><i class="fas fa-check"></i><span>100 GB Premium Bandwidth</span></li>
            <li><i class="fas fa-check"></i><span>FREE 50+ Installation Scripts WordPress Supported</span></li>
            <li><i class="fas fa-check"></i><span>One FREE Domain Registration .com and .np extensions only</span></li>
            <li><i class="fas fa-check"></i><span>Unlimited Email Accounts & Databases</span></li>
          </ul>
        </div>
        <div class="row">
          <div class="price-details">
            <span class="price">1000</span>
            <b class="godok">{구독자}</b>
          </div>
          <ul class="features">
            <li><i class="fas fa-check"></i><span>투유의 계약 전문가들로 구성된 고급 정보제공</span></li>
            <li><i class="fas fa-check"></i><span>비트코인&이더리움 차트 분석</span></li>
            <li><i class="fas fa-check"></i><span>국내,해외 주요 크립토 경제기사</span></li>
            <li><i class="fas fa-check"></i><span>애널리스트 추천 / 주목해야될 종목</span></li>
            <li><i class="fas fa-check"></i><span>세계 증권시세 , 중장기 전략 리포트</span></li>
          </ul>
        </div>
        <div class="row">
          <div class="price-details">
            <span class="price">5000</span>
            <p>프리미엄 구독서비스는 곧 오픈예정입니다</p>
          </div>
          <ul class="features">
            <li><i class="fas fa-check"></i><span></span></li>
            <li><i class="fas fa-check"></i><span></span></li>
          </ul>
        </div>
      </div>
    </div>
    <button onClick={전송}>구독하기</button>
  </div>
  );
};

export default SubscribeForm;
