import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  margin-left: 10px;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #e6ecf0;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  max-width: 300px;
  position: relative;
`;

const CardHeader = styled.div`
  align-items: center;
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  padding: 10px 15px;
`;

const CardBody = styled.div`
  padding: 10px 15px;
`;

const CardFooter = styled.div`
  align-items: center;
  border-top: 1px solid #e6ecf0;
  display: flex;
  padding: 10px 15px;
`;

const CorpLogo = styled.img`
  border-radius: 9999px;
  height: 48px;
  margin-right: 10px;
  width: 48px;
`;

const FullName = styled.span`
  font-weight: bold;
`;

const PrjoectImg = styled.img`
  border-radius: 10px;
  height: auto;
  margin-top: 10px;
  max-width: 100%;
`;

const ProjectDesc = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

const Date = styled.span`
  color: #8899a6;
  font-size: 12px;
  margin-left: 10px;
`;

const TweetActions = styled.div`
  align-items: center;
  display: flex;
`;

const TweetAction = styled.div`
  align-items: center;
  color: #8899a6;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  margin-right: 15px;
`;

const TweetActionIcon = styled.div`
  margin-right: 5px;
`;

const TweetActionCount = styled.div``;

const RetweetIcon = styled(TweetActionIcon)`
  color: #00c06b;
`;

const LikeIcon = styled(TweetActionIcon)`
  color: #e0245e;
`;

const Cards = ({ item }) => {
  return (
    <>
      <Link to={`/startup/${item.id}`}>
        <Card>
          <CardHeader>
            <CorpLogo src={item.corp_symbol} />
            <FullName>{item.name}</FullName>
          </CardHeader>
          <CardBody>
            <PrjoectImg src={item.pjimage} />
            <ProjectDesc>{item.desc}</ProjectDesc>
            <Date>1h</Date>
          </CardBody>
          <CardFooter>
            <TweetActions>
              <TweetAction>
                <RetweetIcon>
                  <svg
                    aria-hidden="true"
                    height="20"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="m3 19c-.552 0-1 .448-1 1s.448 1 1 1h18c.552 0 1-.448 1-1s-.448-1-1-1zm0-6c-.552 0-1 .448-1 1s.448 1 1 1h12c.552 0 1-.448 1-1s-.448-1-1-1zm0-6c-.552 0-1 .448-1 1s.448 1 1 1h6c.552 0 1-.448 1-1s-.448-1-1-1z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </RetweetIcon>
                <TweetActionCount>6</TweetActionCount>
              </TweetAction>
              <TweetAction>
                <LikeIcon>
                  <svg
                    aria-hidden="true"
                    height="20"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="m12 21.351c-1.052 0-2.079-.316-3-1.014l-1.414 1.414c1.341 1.341 3.146 2.121 5.414 2.121 4.971 0 9-4.029 9-9 0-4.971-4.029-9-9-9-4.971 0-9 4.029-9 9 0 1.061.224 2.077.624 3.001l-2.624 2.624c-.39.39-.39 1.024 0 1.414s1.024.39 1.414 0l2.625-2.625c.923.4 1.939.624 3 .624 3.859 0 7-3.141 7-7s-3.141-7-7-7-7 3.141-7 7c0 .552.448 1 1 1s1-.448 1-1c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </LikeIcon>
                <TweetActionCount>18</TweetActionCount>
              </TweetAction>
            </TweetActions>
          </CardFooter>
        </Card>
      </Link>
    </>
  );
};

export default Cards;
