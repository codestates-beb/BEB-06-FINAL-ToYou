import React, { Component } from 'react'
import './TransferPopup.css';
import Web3 from'web3'
const web3 = new Web3(window.ethereum);


//var contractAbi = require('./../contractAbi.json');
const StakingCA ="0x415afED97879597f37E02Bc57b9031289dA4d65b"
const MyStaking = require('./Staking.json')
const Staking365 = new web3.eth.Contract(MyStaking, StakingCA)

class TransferPopup extends Component{

  constructor(props) {
    super(props);


    this.state  = {
      toAddress: "",
      amount: "",
      invalidInputs: "",
      transactionSent: false,
    }
  }

  setToAddress = async(inputArg) =>{

    this.setState(
      {
        toAddress: inputArg,
      }
    );
  }
  setAmount = async(inputArg) =>{

    this.setState(
      {
        amount: inputArg,
      }
    );
  }
  setInvalidInputs = async(inputArg) =>{

    this.setState(
      {
        invalidInputs: inputArg,
      }
    );
  }
  setTransactionSent = async(inputArg) =>{

    this.setState(
      {
        transactionSent: inputArg,
      }
    );
  }

  treansferToken = async() =>{
    const Web3 = require('web3')
    if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      window.ethereum.enable();
      var accounts = await window.web3.eth.getAccounts();

      const accountsList = accounts.map((account) => account);
      // call transfer method
      const contractAddres = '0x27422f52bf4cf152f2789b663229793f38cebf2e'  
      //var dappContract = new window.web3.eth.Contract(contractAbi, contractAddres)

      this.setTransactionSent(true)

    //  dappContract.methods.transfer(this.state.toAddress, this.state.amount).send({from:accountsList[0]}).then((err, arg) => {
      //  console.log(' transfered ')
      //  this.props.closePopup()
    //  })
    }
  }

   stak= async()=>{
    const accounts = await window.web3.eth.getAccounts();
    const value =this.state.amount
    console.log(this.state.amount)
    Staking365.methods.stake(StakingCA,).send({from:accounts[0]})
    .on('transactionHash', (hash) => {alert("스테이킹이 성공하였습니다",{hash})}) 
  }
  
  render() {
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
                        <input type="date"
                          placeholder="스테이킹 기간은 1년입니다"
                          value="2023-12-06"
                          class='nftInput widget-content nft-input'
                          onChange={e => this.setToAddress(e.target.value)}
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
                          onChange={e => this.setAmount(e.target.value)}
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
                      <button onClick={this.stak} className="transfer-token--transfer-button widget-content btn-ok">
                        Submit
                      </button>
                    </div>

                    <div class="widget-content-right"> 
                      <button onClick={this.props.closePopup} className="transfer-token--cancel-button widget-content btn-cancel">
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
}

export default TransferPopup;