import ethereumIcon from './assets/Ethereum-ETH-icon.png';
import bitcoinIcon from './assets/bitcoin-icon.png';
import danicoinIcon from './assets/cat-icon.png';
import withdrawIcon from './assets/withdraw-icon.png';
import TransferPopup from "./TransferPopup";
import './Staking3.css';
import React, { Component , useEffect, useRef, useState} from 'react'
import Web3 from'web3'
const web3 = new Web3(window.ethereum);
//import TokenContract from "./TOKEN";


//const Staking = require('./Staking');

//const contractAbi = require('./../contractAbi.json');

const outTokenSymble = "TOYOU"
const MyContract = require("./aabi.json");
const contractAddress = "0x415afED97879597f37E02Bc57b9031289dA4d65b"
const tether = new web3.eth.Contract(MyContract, contractAddress)

const StakingCA ="0x415afED97879597f37E02Bc57b9031289dA4d65b"
const MyStaking = require('./Staking.json')
const Staking365 = new web3.eth.Contract(MyStaking, StakingCA)


class Staking3 extends Component {

  constructor(props) {
    super(props);

    this.state  = {
      listAccounts: "address",
      curentNetwork:"network",
      etherBalance:"0",
      ourTokenBalance:"0",
      price_change_pctBTC:"0.0%",
      price_change_pctETH:"0.0%",
      priceBTC:"0",
      priceETH:"0",
      showMenu: false,
      anchorEl: false,
      showPopup: false,
    }

    this.connectMetamask()

    this.checkPriceChangePct()
  }
  toggleTransferPopup = () => {
    this.setState(
      {
        showPopup: !this.state.showPopup
      }
    );
  }
  handleClick = (event) => {
    this.setState(
      {
        showMenu: true ,
        anchorEl: event.currentTarget
      }
    );

  };
  handleClose = () => {
    this.setState({ showMenu: false });
  };
  
  logTest = () =>{
   
  }

  checkPriceChangePct = async() =>{
    let priceChangePct
    await require('axios')
      .get(
       
      )
      .then(response => priceChangePct = response)

    console.log(priceChangePct,"가격")
    this.setState(      
      {
        price_change_pctBTC: priceChangePct.tradePrice, /* BTC */
        price_change_pctETH: priceChangePct[1]['1d']['price_change_pct'], /* ETH */
        priceBTC: Number(parseFloat(priceChangePct[0]['price']).toFixed(2)), /* BTC */
        priceETH: Number(parseFloat(priceChangePct[1]['price']).toFixed(2)), /* ETH */
      }
    );
  }

  connectMetamask = async() =>{
    const ethEnabled = async() => {
      const Web3 = require('web3')
      if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        var accounts = await window.web3.eth.getAccounts();
        console.log(accounts)

        const curentNetworkName = await window.web3.eth.net.getNetworkType();

        const listItems = accounts.map((account) => account);
        
        // get ethereum balance
        
        
        web3.eth.getBalance(listItems[0], (err, bal) => {
          this.setState(
            {
              etherBalance: web3.utils.fromWei(bal, 'ether').toString(),
            }
          );
            console.log('account1 balance: ' ,web3.utils.fromWei(bal, 'ether'))
        })

        // get our token balance
        
        
        tether.methods.balanceOf(listItems[0]).call((err, bal) => {
          this.setState(
            {
              ourTokenBalance: bal.toString(),
            }
          );
          console.log('balance 1: ',bal)
        })
        this.setState(
          {
            listAccounts: listItems,
            curentNetwork: curentNetworkName,
          }
        );

        return true;
      }
      return false;
    }

    if (!ethEnabled()) {
      alert("Please install MetaMask to use this dApp!");
    }
  }

  nextPath(path) {
    this.props.history.push(path);
  }


  async 권한승인(){
    const accounts = await window.web3.eth.getAccounts();
    console.log(accounts,"계정확인")
    tether.methods.approve(contractAddress,"1000000000").send({from:accounts[0]})
        .on('transactionHash', (hash) => {console.log(hash)}) 
  }
  

  render() {
    return (
      <div className="App1">
        <header title={this.state}>
        </header>
        <body>

        <div>
          <div class="card3 card--front">
              <div class="card__number">{this.state.listAccounts}</div>
              <p class="card__title-balance"> balance : </p>              
              <div class='curency-name widget-heading'>
                <img class='ethereumIcon' src={ethereumIcon}/>
                <div class="card__balance">{this.state.etherBalance} ETH</div>
              </div>

              <div class='curency-name widget-heading'>
                <img class='ethereumIcon' src={danicoinIcon}/>
                <div class="card__balance">{this.state.ourTokenBalance} {outTokenSymble}</div>
              </div>
              <div class="card__current-network">{this.state.curentNetwork}</div>
          </div>
        </div>
        
        <div id="wrapper">
          <ul>
          <li class="list-group-item">
              <div class="widget-content">
                  <div class="widget-content-wrapper">

                      <div class='curency-name widget-heading'>
                        <img class='ethereumIcon' src={ethereumIcon}/>
                        <div class='ethereumBalance'>Ethereum</div>
                      </div>
                      
                      <div class="widget-content-right"> 
                        <div class="">${this.state.priceETH}</div>
                        <div class={this.state.price_change_pctETH > 0  ? "price_change_green" : "price_change_red" }>{this.state.price_change_pctETH}</div>
                      </div>
                  </div>
              </div>
          </li>
            
          <li class="list-group-item">
              <div class="widget-content">
                  <div class="widget-content-wrapper">

                      <div class='curency-name widget-heading'>
                        <img class='ethereumIcon' src={bitcoinIcon}/>
                        <div class='ethereumBalance'>BTC</div>
                      </div>

                      <div class="widget-content-right"> 
                        <div >${this.state.priceBTC}</div>
                        <div class={this.state.price_change_pctBTC > 0  ? "price_change_green" : "price_change_red"}>{this.state.price_change_pctBTC}</div>
                      </div>
                  </div>
              </div>
          </li>
          <li class="list-group-item-simple">
              <div class="widget-content">
                  <div class="widget-content-wrapper">

                    <button class="widget-content-center clean-button" onClick={this.권한승인}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                    </svg>                      
                      <div class="small-icon-text">1.권한승인</div>
                    </button>
                    <button class="widget-content-center clean-button" onClick={this.toggleTransferPopup}> 
                      <img class='small-icon' src={withdrawIcon}/>                      
                      <div class="small-icon-text">2.스테이킹</div>
                    </button>
                    <button class="widget-content-center clean-button" onClick={this.logTest}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                   <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                  </svg>                     
                      <div class="small-icon-text">3.스테이킹 해제</div>
                    </button>
                    {this.state.showPopup ? <TransferPopup text='Close Me' closePopup={this.toggleTransferPopup.bind(this)}/>
                      : null
                    }
                    <button class="widget-content-center clean-button" onClick={this.handleClick}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg>                       
                      <div class="small-icon-text">more</div>
                    </button>
                    <div>
                      
                    </div>
                  </div>
              </div>
          </li>
          </ul>
        </div>
        </body>
      </div>
    );
  }
}

export default Staking3;
