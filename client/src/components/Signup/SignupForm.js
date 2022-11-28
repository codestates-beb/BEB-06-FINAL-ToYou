import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
// import Popup from "../Popup";
import "./SignupForm.css";

const SignupForm = () => {
  const navigator = useNavigate();
  const [positionSelect, setPositionSelect] = useState("");
  const [isSelectPosition, setIsSelectPosition] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState(""); // 이메일
  const [nickName, setNickName] = useState(""); //닉네임
  const [profileImage, setProfileImage] = useState(""); //프로필 이미지
  const [businessImage, setBusinessImage] = useState(""); //사업자 등록증 이미지
  const [certificateImage, setCertificateImage] = useState(""); //자격증 이미지

  const [userIdMsg, setUserIdMsg] = useState(""); //아이디
  const [passwordMsg, setPasswordMsg] = useState(""); //비밀번호
  const [passwordConfirmMsg, setPasswordConfirmMsg] = useState(""); //비밀번호 확인
  const [emailMsg, setEmailMsg] = useState(""); // 이메일
  const [nickNameMsg, setNickNameMsg] = useState(""); //닉네임

  const [isUserId, setIsUserId] = useState(false); //아이디
  const [ispassword, setIsPassword] = useState(false); //비밀번호
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false); //비밀번호 확인
  const [isEmail, setIsEmail] = useState(false); // 이메일
  const [isNickName, setIsNickName] = useState(false); //닉네임

  const onChangeSelect = (e) => {
    setPositionSelect(e.target.value);
    if (positionSelect === "0") {
      return setIsSelectPosition(true);
    }
    if (positionSelect === "1") {
      return setIsSelectPosition(true);
    }
    if (positionSelect === "2") {
      return setIsSelectPosition(true);
    }
  };

  const onChangeProfileImage = (e) => {
    setProfileImage(e.target.value);
  };
  const onChangeBusinessImage = (e) => {
    setBusinessImage(e.target.value);
  };
  const onChangeCertificateImage = (e) => {
    setCertificateImage(e.target.value);
  };

  const onChangeUserId = (e) => {
    const checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;
    setUserId(e.target.value);
    if (checkSpc.test(e.target.value)) {
      setIsUserId(false);
      setUserIdMsg("아이디에 특수문자는 넣을 수 없습니다.");
    } else if (e.target.value.length === 0) {
      setIsUserId(false);
    } else if (!(e.target.value.length >= 5 || e.target.value.length > 15)) {
      setIsUserId(false);
      setUserIdMsg("아이디는 5글자 이상 15글자 미만으로 입력해주세요.");
    } else {
      setIsUserId(true);
      setUserIdMsg("사용가능한 아이디 입니다.");
      setUserId(e.target.value);
    }
  };

  const onChangePassword = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);
    if (!passwordRegex.test(e.target.value)) {
      setIsPassword(false);
      setPasswordMsg("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
    } else {
      setIsPassword(true);
      setPasswordMsg("사용가능한 비밀번호 입니다.");
    }
  };

  const onChangePasswordConfirm = (e) => {
    const passwordConfirmCurrent = e.target.value;
    setPasswordConfirm(passwordConfirmCurrent);
    if (password === passwordConfirmCurrent) {
      setIsPasswordConfirm(true);
      setPasswordConfirmMsg("비밀번호를 똑같이 입력했어요.");
    } else {
      setIsPasswordConfirm(false);
      setPasswordConfirmMsg("비밀번호가 다릅니다.");
    }
  };

  const onChangeEmail = (e) => {
    const checkSpc =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    setEmail(e.target.value);
    if (!checkSpc.test(e.target.value)) {
      setIsEmail(false);
      setEmailMsg("이메일형식이 틀렸어요 다시 확인해주세요");
    } else {
      setIsEmail(true);
      setEmailMsg("사용가능한 아이디 입니다.");
      setEmail(e.target.value);
    }
  };

  const onChangeNickName = (e) => {
    const checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;
    setNickName(e.target.value);

    if (checkSpc.test(e.target.value)) {
      setIsNickName(false);
      setNickNameMsg("닉네임에 특수문자는 넣을 수 없습니다.");
    } else if (e.target.value.length === 0) {
      setIsNickName(false);
    } else if (!(e.target.value.length >= 2 || e.target.value.length > 15)) {
      setIsNickName(false);
      setNickNameMsg("닉네임은 2글자 이상 15글자 미만으로 입력해주세요.");
    } else {
      setIsNickName(true);
      setNickNameMsg("사용가능한 닉네임 입니다.");
      setNickName(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubmitClick = (e) => {
    if (positionSelect === "0") {
      return axios
        .post("http://localhost:5000/user/regist", {
          id: userId,
          pwd: password,
          email: email,
          nick: nickName,
          profile: profileImage,
        })
        .then(function (response) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "회원가입에 성공했습니다",
            showConfirmButton: false,
            timer: 1500,
          });
          navigator("/login");
        })
        .catch((Error) => {
          Swal.fire({
            icon: "error",
            text: Error.response.data,
          });
        });
    }

    if (positionSelect === "1") {
      return axios
        .post("http://localhost:5000/user/regist", {
          id: userId,
          pwd: password,
          email: email,
          nick: nickName,
          profile: profileImage,
          business: businessImage,
        })
        .then(function (response) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "회원가입에 성공했습니다",
            showConfirmButton: false,
            timer: 1500,
          });
          navigator("/login");
        })
        .catch((Error) => {
          Swal.fire({
            icon: "error",
            text: Error.response.data,
          });
        });
    }

    if (positionSelect === "2") {
      return axios
        .post("http://localhost:5000/user/regist", {
          id: userId,
          pwd: password,
          email: email,
          nick: nickName,
          profile: profileImage,
          certificate: certificateImage,
        })
        .then(function (response) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "회원가입에 성공했습니다",
            showConfirmButton: false,
            timer: 1500,
          });
          navigator("/login");
        })
        .catch((Error) => {
          Swal.fire({
            icon: "error",
            text: Error.response.data,
          });
        });
    }
  };

  return (
    <div className="signup_wrapper">
      <form className="signup_form" onSubmit={handleSubmit}>
        <h1>회원가입</h1>
        <select onChange={onChangeSelect} value={positionSelect}>
          <option>직책을 선택해주세요</option>
          <option value={"0"}>개인</option>
          <option value={"1"}>기업</option>
          <option value={"2"}>전문가</option>
        </select>
        <input
          type="text"
          placeholder="이름"
          required="required"
          maxLength="20"
          onChange={onChangeUserId}
        />
        {userId.length > 0 && (
          <span className={`message${isUserId ? "success" : "error"}`}>
            {userIdMsg}
          </span>
        )}
        <input
          type="password"
          placeholder="비밀번호"
          required="required"
          maxLength="20"
          onChange={onChangePassword}
        />
        {password.length > 0 && (
          <span className={`message${ispassword ? "success" : "error"}`}>
            {passwordMsg}
          </span>
        )}
        <input
          type="password"
          placeholder="비밀번호 확인"
          required="required"
          maxLength="20"
          onChange={onChangePasswordConfirm}
        />
        {passwordConfirm.length > 0 && (
          <span className={`message${isPasswordConfirm ? "success" : "error"}`}>
            {passwordConfirmMsg}
          </span>
        )}
        <input
          type="email"
          placeholder="이메일"
          required="required"
          maxLength="20"
          onChange={onChangeEmail}
        />
        {email.length > 0 && (
          <span className={`message${isEmail ? "success" : "error"}`}>
            {emailMsg}
          </span>
        )}
        <input
          type="text"
          placeholder="닉네임"
          required="required"
          maxLength="20"
          onChange={onChangeNickName}
        />
        {nickName.length > 0 && (
          <span className={`message${isNickName ? "success" : "error"}`}>
            {nickNameMsg}
          </span>
        )}

        <input
          type="file"
          placeholder="이미지"
          onChange={onChangeProfileImage}
        />
        {positionSelect === "1" && (
          <>
            <span className="signup_form_position_text">사업자 등록증</span>
            <input
              type="file"
              placeholder="이미지"
              onChange={onChangeBusinessImage}
            />
          </>
        )}
        {positionSelect === "2" && (
          <>
            <span className="signup_form_position_text">자격증</span>
            <input
              type="file"
              placeholder="이미지"
              onChange={onChangeCertificateImage}
            />
          </>
        )}
        <button type="submit" onClick={handleSubmitClick}>
          회원가입
        </button>
        <Link to="/login">
          <p>이미 회원가입을 하셨나요?</p>
        </Link>
      </form>
    </div>
  );
};

export default SignupForm;
