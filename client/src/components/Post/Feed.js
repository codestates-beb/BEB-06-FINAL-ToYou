import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Feed.css";
import item from "./PostDummy.json";
import FilterButton from "./FilterButton";
import Post from "./Post";
import CommunityDetail from "../Detail/CommunityDetail";
import Pagination from "react-js-pagination";
import "./Paging.css";
import Cards from "./Cards";
import axios from "axios";
import Swal from "sweetalert2";
import { userState } from "../../recoil";
import { useRecoilState } from "recoil";
import { boardState } from "../../recoil";

const Feed = () => {
  const [user, setUser] = useRecoilState(userState);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * 5;

  // post 값 받아오기--------------
  // const [post1, setPost1] = useRecoilState(boardState);
  const [post, setPost] = useState([]);

  // console.log(post1)
  // console.log(post)

  useEffect(()=>{
  axios.get("http://localhost:4000/community",{withCredentials: true})
      .then((response) =>{
        // console.log(response.data)
         setPost(response.data)
        //  setPost1(response.data)
      })
      .catch((Error)=>{
          Swal.fire({
              icon: 'error',
              text: Error,
          })
      })
  }, [])
  //----------------------------

  // console.log(post[0]._id)
  // const [detailid, setDetailid] =useState()
  // console.log(detailid)

  // const detailClick = () => {
  //   {post.map((el) => (
  //   axios.post(`http://localhost:4000/community/${el._id}`,{withCredentials: true})
  //     .then((response) =>{
  //       // console.log(response.data)
  //        setPost(response.data)
  //     })
  //     .catch((Error)=>{
  //         Swal.fire({
  //             icon: 'error',
  //             text: Error
  //         })
  //     })
  //   )}
  // }

  // const getDetail =(e) =>{
  //   const detail = e.target.value
  //   return setDetailid(detail);
  // }

  //----------------------------


  const handlePageChange = (page) => {
    setPage(page);
  };

  const [filterd, setFilterdBoard] = useState("전체게시판");
  const [data, setData] = useState(post);

  // console.log(filterd);
  // console.log(data)

  useEffect(() => {
    filterd === "전체게시판"
      ? setData(post)
      : setData(post.filter((vga) => vga.Type === filterd));
  }, [filterd]);

  //sort -----------------
  // const [sort, setSort] = useState("date");

  // const sortedItems = data.sort((a, b) => b.date - a.date);
  // const sortedItems2 = data.sort((a, b) => b.view_count - a.view_count);

  // const handleNewClick = () => {
  //     setSort("date");
  // };

  // const handleBestClick = () => {
  //     setSort("view_comment");
  // };

  // const sort = (el) => {
  //     const options = {
  //       "latest": [...data.date].sort((a, b) => (a < b ? -1 : 1)),
  //       "popular": [...data.view_count].sort((a, b) => (a < b ? 1 : -1))
  //     };
  //     setData(options[el.target.value]);
  //   };

  //   console.log(data[2].date);
  //------------------------

  return (
    <div className="body_feed">
      <div className="container">
        <div className="row">
          <div className="inner-wrapper">
            <div className="inner-sidebar">
              <div className="inner-sidebar-header">
              {user ? (
                <Link to="/postadd">
                  <button className="postAdd__button" type="button">
                    <span>+ 게시글 작성</span>
                  </button>
                </Link>
              ) : null }
              </div>
              <div className="inner-sidebar-body">
                <FilterButton
                  board="전체게시판"
                  active={filterd === "전체게시판" ? true : false}
                  handleBoard={setFilterdBoard}
                />
                <FilterButton
                  board="코인잡담"
                  active={filterd === "코인잡담" ? true : false}
                  handleBoard={setFilterdBoard}
                />
                <FilterButton
                  board="코인정보"
                  active={filterd === "코인정보" ? true : false}
                  handleBoard={setFilterdBoard}
                />
              </div>
            </div>
            <div className="inner-main">
              <div className="inner-main-header">
                <select className="main-header-select">
                  <option value="1">Latest</option>
                  <option value="2">Popular</option>
                </select>
              </div>
              {post.slice(offset, offset + 5).map((el,index) => (
                <div key={index} >
                  <Link to={`/community/${el._id}`}>
                    {/* <div className="hidden_community">
                    <CommunityDetail
                      c_id={el._id}
                    />
                    </div> */}
                  <Post
                    title={el.title}
                    comment={el.comment}
                    createAT={el.createAT}
                    Type={el.Type}
                    _id={el._id}
                  />
                  </Link>
                </div>
              ))}
              <Pagination
                className="Pagination"
                activePage={page} // 현재 페이지
                itemsCountPerPage={5} // 한 페이지랑 보여줄 아이템 갯수 (10)
                totalItemsCount={item.data.length} // 총 아이템 갯수 // totalItemCount
                pageRangeDisplayed={10} // paginator의 페이지 범위
                prevPageText={"‹"} // "이전"을 나타낼 텍스트
                nextPageText={"›"} // "다음"을 나타낼 텍스트
                onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
              />
            </div>
          </div>
        </div>
        <div className="row_cards">
          <h1 className="mb-3">Trading Tips</h1>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Feed;
