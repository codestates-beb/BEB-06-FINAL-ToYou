import React, { useState } from "react";
import styled from "styled-components";
import DummyPost from "./DummyPost";

const Tab = styled.div`
  display: inline-block;
  width: 100px;
  height: 40px;
  background-color: #eee;
  text-align: center;
  line-height: 40px;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  margin: 0 10px;
`;

const TabList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const TabContent = styled.div`
  margin-top: 20px;
  border: 1px solid #eee;
  padding: 10px;
`;

const RightTab = () => {
  const [tab, setTab] = useState(1);

  const handleTab = (idx) => {
    setTab(idx);
  };

  return (
    <div>
      <TabList>
        <Tab onClick={() => handleTab(1)}>내가 쓴 글</Tab>
        <Tab onClick={() => handleTab(2)}>내 댓글</Tab>
        <Tab onClick={() => handleTab(3)}>구독</Tab>
        <Tab onClick={() => handleTab(4)}>구매 내역</Tab>
      </TabList>
      <TabContent>
        {tab === 1 && (
          <div>
            <DummyPost />
          </div>
        )}
        {tab === 2 && <div>내 댓글</div>}
        {tab === 3 && <div>구독</div>}
        {tab === 4 && <div>구매내역</div>}
      </TabContent>
    </div>
  );
};

export default RightTab;
