import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./CreateProjectForm.css";

const CreateProjectForm = () => {
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [corpSymbol, setCorpSymbol] = useState("");
  const [desc, setDesc] = useState("");
  const [zone, setZone] = useState("");

  const navigator = useNavigate();

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleCorpSymbolChange = (e) => {
    setCorpSymbol(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  const handleZoneChange = (e) => {
    setZone(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    axios
      .post(
        "http://localhost:4000/project/edit",
        {
          type: type,
          year: year,
          title: title,
          name: name,
          corp_symbol: corpSymbol,
          desc: desc,
          zone: zone,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "프로젝트 등록에 성공했습니다.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigator("/startup");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "프로젝트 등록에 실패했습니다.",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <form
      encType="multipart/form-data"
      className="ant_layout"
      onSubmit={handleSubmit}
    >
      <div className="index_content_qx ant_layout_content">
        <div className="index_main_area">
          <div className="index_section_title">프로젝트 만들기</div>
          <div className="index_write_area">
            <div className="index_menu_board">
              <p>카테고리</p>
              <select
                className="index_select_box"
                onChange={handleTypeChange}
                value={type}
              >
                <option value={"0"}>개인</option>
                <option value={"1"}>기업</option>
                <option value={"2"}>전문가</option>
              </select>
            </div>
            <div className="index_input_title">
              <p>프로젝트 제목</p>
              <input
                type={"text"}
                value={title}
                placeholder="프로젝트 제목을 입력하세요."
                onChange={handleTitleChange}
              />
            </div>
            <div className="index_input_title">
              <p>회사명</p>
              <input
                value={name}
                type={"text"}
                placeholder="회사명을 입력하세요."
                onChange={handleNameChange}
              />
            </div>
            <div className="index_input_title">
              <p>회사 로고</p>
              <input
                value={corpSymbol}
                type={"file"}
                onChange={handleCorpSymbolChange}
              />
            </div>

            <div>
              <p>프로젝트 내용</p>
              <textarea
                value={desc}
                type={"text"}
                className="index_input_desc"
                placeholder="프로젝트 내용을 입력하세요."
                onChange={handleDescChange}
              />
            </div>
            <div className="index_input_title">
              <p>회사 설립일</p>
              <input type={"date"} onChange={handleYearChange} value={year} />
            </div>
            <div className="index_input_title">
              <p>회사 위치</p>
              <input
                value={zone}
                type={"text"}
                placeholder="회사명을 입력하세요."
                onChange={handleZoneChange}
              />
            </div>
            <div className="index_empty"></div>
          </div>
        </div>
        <div className="inex_side_area">
          <div className="index_side_button">
            <button
              type="submit"
              className="index_confirm index_comfirm_btn"
              onClick={handleClick}
            >
              등록
            </button>
          </div>
          <div className="index_guide_area">
            <div className="index_guide_title">프로젝트 작성 가이드</div>
            <div className="index_guide_desc">
              <div className="index_guide_desc_title">게시물 작성 조건</div>
              <div className="index_guied_desc_content">
                <p className="index_icon">
                  코박은 코인 커뮤니티로써, 자유게시판을 제외하고는 코인 및
                  블록체인 관련 내용만 게시물 작성이 가능합니다.
                  <br />
                </p>
              </div>
              <div className="index_guide_desc_title">게시물 작성 조건</div>
              <div className="index_guied_desc_content">
                <p className="index_icon">
                  코박은 코인 커뮤니티로써, 자유게시판을 제외하고는 코인 및
                  블록체인 관련 내용만 게시물 작성이 가능합니다.
                  <br />
                </p>
              </div>
              <div className="index_guide_desc_title">게시물 작성 조건</div>
              <div className="index_guied_desc_content">
                <p className="index_icon">
                  코박은 코인 커뮤니티로써, 자유게시판을 제외하고는 코인 및
                  블록체인 관련 내용만 게시물 작성이 가능합니다.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateProjectForm;
