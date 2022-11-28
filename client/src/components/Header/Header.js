import React, { useState, useContext, useEffect } from 'react'
import {Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header_wrapper'>
        <div className='header_container'>
        {/* 로고 */}
        <li className='header__logo'>
                <Link to="/" className='link'>
                    <span className='header__navmenu__button__icon'>
                        To-You
                    </span>
                </Link>
            </li>
        {/* 네비게이션 메뉴(왼쪽) */}
        <ul className='header__navmenu_left'>
            {/* 커뮤니티 버튼 */}
            <li className='header__navmenu__button'>
                <Link to="/community" className='link'>
                    <span className='header__navmenu__button__icon'>
                        커뮤니티
                    </span>
                </Link>
            </li>
            {/* 투자 버튼 */}
            <li className='header__navmenu__button'>
                <Link to="/invest" className='link'>
                    <span className='header__navmenu__button__icon'>
                        투자
                    </span>
                </Link>
            </li>
            {/* 스타트업 버튼 */}
            <li className='header__navmenu__button'>
                <Link to="/startup" className='link'>
                    <span className='header__navmenu__button__icon'>
                        스타트업
                    </span>
                </Link>
            </li>
        </ul>

        <ul className='center'></ul>

        {/* 네비게이션 메뉴(오른쪽) */}
        <ul className='header__navmenu_right'>
            {/* 로그인 버튼 */}
            <li className='header__navmenu__button'>
                <Link to="/login" className='link'>
                    <span className='header__navmenu__button__icon'>
                        로그인
                    </span>
                </Link>
            </li>
            {/* 회원가입 버튼 */}
            <li className='header__navmenu__button'>
                <Link to="/signup">
                    <span className='header__navmenu__button__icon'>
                        회원가입
                    </span>
                </Link>
            </li>
            {/* 프로젝트 생성 버튼 */}
            <li className='header__project__button'>
                <Link to="/project">
                    <button className="project__button" type="button">
                        <span>프로젝트 만들기</span>
                    </button>
                </Link>
            </li>
            {/* 로그아웃 버튼 */}
            {/* <li className='header__navmenu__button'>
                <Link>
                <span className='header__navmenu__button__icon' onClick={Logout}>
                    LogOut
                </span>
                </Link>
            </li> */}
        </ul>
    </div>
  </div>    
)
}

export default Header;