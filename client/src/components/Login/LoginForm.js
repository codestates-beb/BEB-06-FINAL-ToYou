import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import "./LoginForm.css";

const LoginForm = () => {
  const navigator = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useRecoilState(userState);

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
        "http://localhost:4000/login",
        {
          id: userId,
          pwd: password,
        },
        { withCredentials: true }
      )
      .then(function (response) {
        // 로그인 성공시 메인페이지로 이동
        console.log(response.data);
        setUser(response.data);
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
      <form
        encType="multipart/form-data"
        className="login_form"
        onSubmit={handleSubmit}
      >
        <h1>로그인</h1>
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
