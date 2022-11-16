import React from 'react'
import './Footer.css'

import {Instagram, Facebook, Twitter, YouTube, GitHub} from '@material-ui/icons'
const Footer = () => {

  return (
    <div className='footer'>

    <div className='footer-container'>

    <section className='left'>
    <div className='title' align="left">ToYou</div>
    {/* <h5 align="left">2022@codeStates BEB-06-ToYou</h5> */}
    <h3 align="left">투자위험고지</h3> 
    <h5 align="left">스타트업 투자는 원금 손실과 유동성 및 현금성에 대한 투자위험을 가지고 있습니다. 투자 전에 투자위험고지를 꼭 확인해주세요.</h5> 
    <h5 align="left">ToYou는 중개업(온라인소액투자중개 및 통신판매중개)을 영위하는 플랫폼 제공자로 자금을 모집하는
                    당사자가 아닙니다. 따라서 투자손실의 위험을 보전하거나 리워드 제공을 보장해 드리지 않으며 이에 대한 법적인 책임을 지지 않습니다.</h5> 
    <h5 align="left">2022@codeStates BEB-06-ToYou</h5> 
    </section>

    <section className='right'>
    <h2>Join the community</h2> 
    <div className='footer-icon-container'>
        <a className='footer-icon' href='https://www.instagram.com' target='_blank' rel="noreferrer">
            <Instagram fontSize='large'></Instagram>
        </a>
        <a className='footer-icon' href='https://www.facebook.com' target='_blank' rel="noreferrer">
            <Facebook fontSize='large'></Facebook>
        </a>
        <a className='footer-icon' href='https://twitter.com' target='_blank' rel="noreferrer">
            <Twitter fontSize='large'></Twitter>
        </a>
        <a className='footer-icon' href='https://www.youtube.com' target='_blank' rel="noreferrer">
            <YouTube fontSize='large'></YouTube>
        </a>
        <a className='footer-icon' href='https://github.com/codestates-beb/BEB-06-FINAL-ToYou' target='_blank' rel="noreferrer">
            <GitHub fontSize='large'></GitHub>
        </a>
    </div>
    </section>
    </div>
</div>

  )
}

export default Footer;