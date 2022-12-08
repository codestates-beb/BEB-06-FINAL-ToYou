import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { userState } from "../../recoil";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Header.css";
import 로고 from "./LOGO.png"
const Header = () => {
  const [user, setUser] = useRecoilState(userState);
  const navigator = useNavigate();
  const 이미지 =`http://localhost:4000/image/1670386549781_스크린샷 2022-11-08 오후 2.00.47.png`

  return (
    <div className="header_wrapper">
      <div className="header_container">
        {/* 로고 */}
        <li className="header__logo">
          <Link to="/" className="link">
          <img className="profileLOGO" src={로고} width="80" alt=''/>
            <span className="header__navmenu__button__icon"></span>
          </Link>
        </li>
        {/* 네비게이션 메뉴(왼쪽) */}
        <ul className="header__navmenu_left">
          {/* 커뮤니티 버튼 */}
          <li className="header__navmenu__button">
            <Link to="/community" className="link">
              <span className="header__navmenu__button__icon">커뮤니티</span>
            </Link>
          </li>
          {/* 투자 버튼 */}
          <li className="header__navmenu__button">
            <Link to="/invest" className="link">
              <span className="header__navmenu__button__icon">투자</span>
            </Link>
          </li>
          {/* 스타트업 버튼 */}
          <li className="header__navmenu__button">
            <Link to="/startup" className="link">
              <span className="header__navmenu__button__icon">스타트업</span>
            </Link>
          </li>
        </ul>

        <ul className="center"></ul>

        {/* 네비게이션 메뉴(오른쪽) */}
        <ul className="header__navmenu_right">
          {/* user 값이 null 일 경우에는 로그인 회원가입 화면이 보이고 로그인을 하면 로그아웃 프로젝트 만들기 버튼이 보인다 */}
          {user ? (
            <>
              {/* 유저 닉네임 */}
              
              <li className="header__navmenu__button2">
              <img className="profile" src={이미지} alt=''/>
                <Link to={`/mypage/${user.id}`}>
                  <span className="header__navmenu__button__icon2">
                    {`${user.nick}`}
                  </span>
                </Link>
              </li>
              {/* 로그아웃 버튼 */}
              <li className="header__navmenu__button">
                <span
                  className="header__navmenu__button__icon"
                  onClick={() => {
                    setUser(null);
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "로그아웃 완료",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    navigator("/");
                  }}
                >
                  로그아웃
                </span>
              </li>{" "}
              {/* 프로젝트 생성 버튼 */}
              <li className="header__project__button">
                <Link to="/project">
                  <button className="project__button" type="button">
                    <span>프로젝트 만들기</span>
                  </button>
                </Link>
              </li>
            </>
            
          ) : (
            <>
              {/* 로그인 버튼 */}
              <li className="header__navmenu__button">
                <Link to="/login" className="link">
                  <span className="header__navmenu__button__icon">로그인</span>
                </Link>
              </li>
              {/* 회원가입 버튼 */}
              <li className="header__navmenu__button">
                <Link to="/signup">
                  <span className="header__navmenu__button__icon">
                    회원가입
                  </span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      
    </div>
  );
};

export default Header;
