import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./LoginForm.css";
// import Popup from '../components/Popup'
// import { UseContext } from '../User/UserContextProvider'

const LoginForm = () => {
  const navigator = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  // const {setCookiesHandler} =useContext(UseContext);

  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClickLogin = () => {
    axios
      .post(
        "http://localhost:5000/user/login",
        {
          id: userId,
          pwd: password,
        },
        { withCredentials: true }
      )
      .then(function (response) {
        // 로그인 성공시 메인페이지로 이동
        // setCookiesHandler(true);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "로그인 성공",
          showConfirmButton: false,
          timer: 1500,
        });
        navigator("/");
      })
      .catch((Error) => {
        Swal.fire({
          icon: "error",
          text: Error.response.data,
        });
      });
  };

  return (
    <div className="login_wrapper">
      <form className="login_form" onSubmit={handleSubmit}>
        <h1>회원가입</h1>
        <input
          type="text"
          placeholder="아이디"
          required="required"
          maxLength="20"
          onChange={onChangeUserId}
        />
        <input
          type="password"
          placeholder="비밀번호"
          required="required"
          maxLength="20"
          onChange={onChangePassword}
        />
        <button type="submit" onClick={handleClickLogin}>
          로그인
        </button>
        <Link to="/signup">
          <p>아직 회원가입을 안하셨나요?</p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
