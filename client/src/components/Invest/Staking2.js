import React, { useState,useEffect } from "react";
import Web3 from'web3'
import "./Staking2.css";
import TokenContract from "./TOKEN";
import CountUp from 'react-countup';
import DayJS from 'react-dayjs';
const web3 = new Web3(window.ethereum);

const date = "2000-01-31T12:59-0500";



//const web3 = new Web3('https://goerli.infura.io/v3/75b1ae1ebf744df9833553b85c693acd');
const StakingCA ="0x415afED97879597f37E02Bc57b9031289dA4d65b"
const MyStaking = require('./Staking.json')
const Staking365 = new web3.eth.Contract(MyStaking, StakingCA)





//const contract = new web3.eth.Contract(TokenContract, contractAddress)


const Staking2 = () => {
  
    const [wweb3, setWeb3] = useState();
    const [account , setAccount] = useState();
    const 시간 = 1701799680000
    var sampleTimestamp = Date.now();
    var 변환시간 = new Date(시간);
    const masTime = new Date("2022-12-25");
    const todayTime = new Date();
    const diff = 변환시간 - todayTime;
    const diffDay = Math.floor(diff / (1000*60*60*24));
    console.log(변환시간,"시간")
    console.log(todayTime,"현재시간")
    console.log(diffDay,"계산시간")


      


    useEffect(() => {
  
      

      




    }, []);


    

    
    const name = async ()=>{  
      const  accounts = await web3.eth.getAccounts()
      setAccount(accounts)
      console.log(account)

      if(account==undefined){
        alert("계정을 연결해주세요")
      }else{
        

      }
        

   

       // const tokenContract = new web3.eth.Contract(MyContract,contractAddress);

       


      




        
        //const address ="0x89cF76D48c73Fd449A65b8C2AbE40ae1469032Fc"
        //TokenContract.methods.approve(contractAddress, "10000").send({from:address},function(error, transactionHash){
       //    console.log(error)
       // });
        //TokenContract.methods.decimals().call().then( (result)=>{
        //console.log(result) })
       
       

/*
        const ToyouCA = "0xD99F86331D7f8805B6E4FbEb689eb5faEE2E4E53" 
        const accounts = "0xBF97Fb918e17ea9f994Caf587F28473d3BF280E8"  
        TokenContract.methods.approve(accounts, "10000").send({from:ToyouCA}).on('transactionHash', (hash) => {console.log(hash)}) 
        TokenContract.methods.transfer(accounts, "10000").send({from:ToyouCA}).on('transactionHash', (hash) => {console.log(hash)}) 
   */   
        
        //TokenContract.methods.transfer("0x1ECE6861D72D48d49441C61EFc971662214B6907",100).send().then( (result)=>{
           // console.log(result)
          //});
          
    }


    const Wallet = async () => {
        //https://docs.metamask.io/guide/getting-started.html#basic-considerations 
        //메타마스크 공식 독스 참고.
        try {
          if (window.ethereum) {
            //Web3 브라우저 감지
            const accounts = await window.ethereum.request({method: "eth_requestAccounts",}); 
            // connect wallet account 기능. window.ethereum.request는 프로미스라서 비동기로 구현해야됨.
            // window.ethereum.request 을 console.log 참고
    
            
            console.log(accounts);
            // 연결된 메타마스크의 주소를 useState에 담는다
    
            //getItemsByOwner
     
          } else {
            alert("Install Metamask!");
          }
        } catch (error) {
          console.error(error); 
        }
      };

const  갱신 = async()=>{
  await Staking365.methods.lastUpdateTime().call(account).then( (result)=>{
    console.log(result,"스테이킹시작시간" ) })
}


  return (
  <div class="wrapper">
<div class="container9">

<div class="card9">
    <div class="right-column background1-left-column">
    <div>
            <h4 >스테이킹 종료기한</h4>
            <h6 > Toyou - staking</h6>
        </div>
        <h2>{diffDay}일</h2>
        <button class="button background2-left-column" onClick={갱신}>정보갱신</button>
        </div>
    </div>
        <div class="card9">
    <div class="right-column background1-left-column">
        <div>
            <h4>스테이킹 보상수량</h4>
            <h6>Toyou - staking</h6>
        </div>
        <h2><CountUp  start={0} end={100000} duration={31563000} separator=" " decimals={3} decimal="." /> TOKEN</h2>
        <button class="button background2-left-column">보상수령</button>
      
       
    </div>

</div>
</div>
  </div>
  );
};


export default Staking2;