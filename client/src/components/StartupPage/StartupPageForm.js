import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import { useRecoilState } from "recoil";
import { projectState } from "../../recoil";
import data from "./data.json";
import "./StartupPageForm.css";

const StartupPageForm = () => {
  const projectData = data.createpj;

  // 서버 연동시 주석 해제 line 12 ~ line 30, line 10 삭제
  // const [projectData, setProjectData] = useRecoilState(projectState);

  // useEffect(() => {
  //   const getProjectData = async () => {
  //     try {
  //       const result = await axios.get("http://localhost:5000/createpj");
  //       setPopProjectData(result.data);
  //       console.log(result.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   getProjectData();
  // }, []);

  // if (!popProjectData) {
  //   return null;
  // }

  return (
    <div className="stu_container">
      <div className="stu_category">
        <div className="stu_category_ti">
          <div>기업 프로젝트 목록</div>
          <div className="stu_desc_ti"></div>
        </div>
      </div>
      <div className="stu_list_container">
        <div className="stu_card_table_container">
          {projectData.map((el) => (
            <Cards key={el.id} item={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartupPageForm;
