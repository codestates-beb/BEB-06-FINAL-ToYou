import React from "react";
import RightTab from "./RightTab";
import "./MyPageForm.css";
import { useParams } from "react-router-dom";
import { userState } from "../../recoil";
import { useRecoilValue } from "recoil";

const MyPageForm = () => {
  const mypageData = useRecoilValue(userState);
  const { id } = useParams();

  console.log(id);
  console.log(mypageData);
  return (
    <div className="mypage">
      <section className="ant_layout">
        <main className="ant_layout_content">
          <div className="index_user">
            <div className="ant_row">
              <div className="ant_col_8 index_mypage_left">
                <div className="index_profile_wrap">
                  <div className="index_profile">
                    <div className="index_profile_info">
                      <div className="ant_row" style={{ display: "flex" }}>
                        <div className="index_nickname">{mypageData.nick}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="level_progress_wrap">
                      <progress
                        value={"20"}
                        max={"100"}
                        style={{
                          width: "100%",
                        }}
                      >
                        20
                      </progress>
                    </div>
                    <div className="level_progress_level">
                      <span>Lv.1 까지 80% 남았습니다.</span>
                    </div>
                  </div>
                </div>
                <div className="mytab_wrapper">
                  <div className="earncc_earncc">
                    <span className="earncc_title">오늘의 활동 결과</span>
                    <div>
                      <span className="earncc_title_today">
                        - 오늘의 경험치
                      </span>
                      <div className="earncc_today_detail">
                        <span>20 EXP</span>
                      </div>
                    </div>
                    <div>
                      <span className="earncc_title_today">
                        - 이달의 경험치
                      </span>
                      <div className="earncc_today_detail">
                        <span>20 EXP</span>
                      </div>
                    </div>
                  </div>
                  <div className="mytab_notice1">
                    <div>
                      <img
                        className="notice1_img"
                        src="https://storage.cobak.co/direct/kyc/infoIcon5.png"
                        alt=""
                      />
                      Notice1
                    </div>
                    <div className="notice1_desc">안내 1 입니다.</div>
                    <div className="notice1_click">
                      <div className="notice1_click_click">Notice1</div>
                    </div>
                  </div>
                  <div className="mytab_notice1">
                    <div>
                      <img
                        className="notice1_img"
                        src="https://storage.cobak.co/direct/kyc/infoIcon5.png"
                        alt=""
                      />
                      Notice1
                    </div>
                    <div className="notice1_desc">안내 1 입니다.</div>
                    <div className="notice1_click">
                      <div className="notice1_click_click">Notice1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="index_right">
                <div className="index_right_tab">
                  <RightTab />
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default MyPageForm;
