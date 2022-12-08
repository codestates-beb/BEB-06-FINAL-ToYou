import React, { Component, useState } from 'react'
import './TransferPopup.css';
import Web3 from'web3'
const web3 = new Web3(window.ethereum);


//var contractAbi = require('./../contractAbi.json');
const StakingCA ="0x415afED97879597f37E02Bc57b9031289dA4d65b"
const MyStaking = require('./Staking.json')
const Staking365 = new web3.eth.Contract(MyStaking, StakingCA)

const TransferPopup=(props)=>{

const [amount,SetAmount]= useState()
const [toAddress,SetToAddress]= useState()
const [invalidInputs,SetInvalidInputs] =useState()
const [ transactionSent,SettransactionSent] = useState()

  

 const ssetToAddress = async(e) =>{
  
  SetToAddress(e.target.value)
    
  }
  const ssetAmount = async(inputArg) =>{

    SetAmount(inputArg)
  }
  const setInvalidInputs = async(inputArg) =>{

    SetInvalidInputs(inputArg)
 
  }
  const setTransactionSent = async(inputArg) =>{

   
    SettransactionSent(inputArg)
  
  }

  const treansferToken = async() =>{
    const Web3 = require('web3')
    if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      window.ethereum.enable();
      var accounts = await window.web3.eth.getAccounts();

      //const accountsList = accounts.map((account) => account);
      // call transfer method
     // const contractAddres = '0x27422f52bf4cf152f2789b663229793f38cebf2e'  
      //var dappContract = new window.web3.eth.Contract(contractAbi, contractAddres)

      setTransactionSent(true)

    //  dappContract.methods.transfer(this.state.toAddress, this.state.amount).send({from:accountsList[0]}).then((err, arg) => {
      //  console.log(' transfered ')
      //  this.props.closePopup()
    //  })
    }
  }

   const stak=()=>{
    //const accounts = await window.web3.eth.getAccounts();
    //const value =this.state.amount
    console.log(this.state,"값")
   // Staking365.methods.stake(StakingCA,).send({from:accounts[0]})
        //.on('transactionHash', (hash) => {alert("스테이킹이 성공하였습니다",{hash})}) 
  }

  
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <div className="transter-popup">
            <ul>
              <li class="transter-token--input">
                  <div class="widget-content">
                      <div class="widget-content-wrapper">
                        <div class='transfer-title'>
                          스테이킹
                        </div>
                      </div>
                  </div>
              </li>

              <li class="transter-token--input">
                  <div class="widget-content">
                      <div class="widget-content-wrapper">
                        <input 
                          placeholder="to address"
                          class='nftInput widget-content nft-input'
                          onChange={ssetToAddress}
                        />
                      </div>
                  </div>
              </li>

              <li class="transter-token--input">
                  <div class="widget-content">
                      <div class="widget-content-wrapper">
                        <input 
                          placeholder="스테이킹 수량을 입력해주세요"
                          class='nftInput widget-content nft-input'
                          onChange={ssetAmount}
                          />
                      </div>
                  </div>
              </li>

              <li class="transter-token--input">
                      <div class="widget-content-wrapper">
                      {
                        this.state.invalidInputs && (
                          <div class="invalid-input">
                              ✗ invalid inputs
                          </div>
                        )
                      }
                      {
                        this.state.transactionSent && (
                          <div class="transaction-sent">
                              ⌛	 waiting for network
                          </div>
                        )
                      }
                      </div>
              </li>

              <li class="transter-token--button">
                <div class="widget-content">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left"> 
                      <button onClick={stak} className="transfer-token--transfer-button widget-content btn-ok">
                        Submit
                      </button>
                    </div>

                    <div class="widget-content-right"> 
                      <button onClick={props.closePopup} className="transfer-token--cancel-button widget-content btn-cancel">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
    );
  }


export default TransferPopup;