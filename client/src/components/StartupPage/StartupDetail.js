import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { projectState } from "../../recoil";

const StartupDetail = () => {
  const projectData = useRecoilValue(projectState);
  const { id } = useParams();
  const filterData = projectData.find((el) => el.id === id);

  console.log(filterData);
  return (
    <div>
      <div>{filterData.name}</div>
      <img src={filterData.corp_symbol} alt={filterData.name} />
      <img src={filterData.pjimage} alt={filterData.name} />
      <div>{filterData.desc}</div>
      {`StartupDetailPage ${id}`}
    </div>
  );
};

export default StartupDetail;
