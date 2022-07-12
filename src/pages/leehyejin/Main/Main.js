import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './Main.scss';

const Main = () => {
  //   const navigate = useNavigate();

  //   const goToLogin = () => {
  //     navigate('/login-leehyejin');
  //   };
  const [input, setInput] = useState('');
  const [comment, setComment] = useState([]);

  return (
    <div className="wrapper">
      <div className="main">
        <nav className="navTop">
          <div className="topContainer">
            <div className="mainLogo">
              <span>Westagram</span>
            </div>
            <div className="searchBar">
              <svg
                aria-label="검색"
                className="magnify"
                color="#8e8e8e"
                fill="#8e8e8e"
                height="16"
                role="img"
                viewBox="0 0 24 24"
                width="16"
              >
                <path
                  d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="16.511"
                  x2="22"
                  y1="16.511"
                  y2="22"
                />
              </svg>

              <input className="searchTxt" placeholder="검색" type="text" />
            </div>
            <div className="iconContainer">
              <svg
                aria-label="홈"
                className="homeIcon"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z" />
              </svg>
              <svg
                aria-label="Direct"
                className="dmIcon"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
                />
                <polygon
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <svg
                aria-label="새로운 게시물"
                className="addIcon"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="6.545"
                  x2="17.455"
                  y1="12.001"
                  y2="12.001"
                />
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="12.003"
                  x2="12.003"
                  y1="6.545"
                  y2="17.455"
                />
              </svg>
              <svg
                aria-label="사람 찾기"
                className="findIcon"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <polygon
                  fill="none"
                  points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <polygon
                  fillRule="evenodd"
                  points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                />
                <circle
                  cx="12.001"
                  cy="12.005"
                  fill="none"
                  r="10.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <svg
                aria-label="활동 피드"
                className="heartIcon"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" />
              </svg>
              <img
                className="mainUser"
                src="images/leehyejin/Main/mainUser.PNG"
                alt="mainUser"
              />
            </div>
          </div>
        </nav>
        <div className="storyContainer">
          <div className="stories">
            <div className="storyWrapper">
              <div className="strbox">
                <img
                  className="strProfile1"
                  src="images/leehyejin/Main/cat1.jpg"
                  alt="strProfile1"
                />
                <span className="id1">cat_is_best</span>
              </div>
              <div className="strbox">
                <img
                  className="strProfile1"
                  src="images/leehyejin/Main/cat1.jpg"
                  alt="strProfile1"
                />
                <span className="id1">cat_is_best</span>
              </div>
              <div className="strbox">
                <img
                  className="strProfile1"
                  src="images/leehyejin/Main/cat1.jpg"
                  alt="strProfile1"
                />
                <span className="id1">cat_is_best</span>
              </div>
              <div className="strbox">
                <img
                  className="strProfile1"
                  src="images/leehyejin/Main/cat1.jpg"
                  alt="strProfile1"
                />
                <span className="id1">cat_is_best</span>
              </div>
              <div className="strbox">
                <img
                  className="strProfile1"
                  src="images/leehyejin/Main/cat1.jpg"
                  alt="strProfile1"
                />
                <span className="id1">cat_is_best</span>
              </div>
            </div>
          </div>

          <div className="mainRight">
            <div className="mainRightTop">
              <div className="mainProfile">
                <img
                  className="mainProfileImg"
                  src="images/leehyejin/Main/mainUser.PNG"
                  alt="mainProfileImg"
                />
                <div className="user">
                  <span className="userId">hyejindaumeilchul</span>
                  <span className="username">jene</span>
                </div>
                <div className="btnContainer">
                  <button className="userChange">전환</button>
                </div>
              </div>
            </div>
            <div className="userRecommend">
              <div className="recommendContainer">
                <span className="recommendTitle">회원님을 위한 추천</span>
                <span className="recommendDetail">모두 보기</span>
              </div>
              <div className="recommendList">
                <div className="recommendInfo">
                  <img
                    className="recommendUser"
                    src="images/leehyejin/Main/mouse.jpg"
                    alt="recommendUser"
                  />
                  <div className="acntDetail">
                    <span className="userAcnt">hamtory</span>
                    <span className="userAcntDetail">Instagram 신규 가입</span>
                  </div>
                  <span className="acntFollow">팔로우</span>
                </div>
                <div className="recommendInfo">
                  <img
                    className="recommendUser"
                    src="images/leehyejin/Main/blackat.jpg"
                    alt="recommedUser"
                  />
                  <div className="acntDetail">
                    <span className="userAcnt">blackCat</span>
                    <span className="userAcntDetail">
                      cat_is_best님이 팔로우 합니다
                    </span>
                  </div>
                  <span className="acntFollow">팔로우</span>
                </div>
                <div className="recommendInfo">
                  <img
                    className="recommendUser"
                    src="images/leehyejin/Main/meme.jpg"
                    alt="recommedUser"
                  />
                  <div className="acntDetail">
                    <span className="userAcnt">develooper</span>
                    <span className="userAcntDetail">Instagram 신규 가입</span>
                  </div>
                  <span className="acntFollow">팔로우</span>
                </div>
                <div className="recommendInfo">
                  <img
                    className="recommendUser"
                    src="images/leehyejin/Main/htmlBaby.jpg"
                    alt="recommedUser"
                  />
                  <div className="acntDetail">
                    <span className="userAcnt">htmlBaby</span>
                    <span className="userAcntDetail">
                      Jerry님이 팔로우 합니다
                    </span>
                  </div>
                  <span className="acntFollow">팔로우</span>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="infoTxt">
                소개 . 도움말 . 홍보센터 . API . 채용정보 .
              </span>
              <br />
              <span className="infoTxt">
                개인정보처리 방침 . 약관 . 위치. 언어
              </span>
              <br />
              <br />
              <span className="infoTxt">©2022 INSTAGRAM FROM META</span>
            </div>
          </div>

          <div className="feed">
            <div className="feedHeader">
              <div className="feedContainer">
                <img
                  className="feedHeaderImg"
                  src="images/leehyejin/Main/jerry.jpg"
                  alt="feedHeaderImg"
                />
                <span className="feedUser">Jerry</span>
                <svg
                  aria-label="옵션 더 보기"
                  className="moreIcon"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="6" cy="12" r="1.5" />
                  <circle cx="18" cy="12" r="1.5" />
                </svg>
              </div>
            </div>
            <img
              className="feedImg"
              src="images/leehyejin/Main/codelin.jpg"
              alt="feedImg"
            />
            <div className="footerIcon">
              <svg
                aria-label="좋아요"
                className="footerHeartIcon"
                color="#8e8e8e"
                fill="#8e8e8e"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" />
              </svg>
              <svg
                aria-label="댓글 달기"
                className="cmtIcon"
                color="#8e8e8e"
                fill="#8e8e8e"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <svg
                aria-label="게시물 공유"
                className="shareIcon"
                color="#8e8e8e"
                fill="#8e8e8e"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
                />
                <polygon
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <div className="bookmarkIcon">
                <svg
                  aria-label="저장"
                  className="_ab6-"
                  color="#8e8e8e"
                  fill="#8e8e8e"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <polygon
                    fill="none"
                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            <span className="cmtLikeContainer">
              cat_is_best님 외 10명이 좋아합니다
            </span>
            <div className="cmtContainer">
              <ul className="textbox">
                <li className="cmtList">
                  <span className="cmtUser">Jerry</span>
                  <span className="cmtUserCmt">
                    비상 비상 비상 비상 비상 비상
                  </span>
                </li>
                {comment.map(function (props, i) {
                  return (
                    <CommentCreate
                      comment={comment[i]}
                      key={i}
                      setComment={setComment}
                    />
                  );
                })}
              </ul>

              <time
                className="cmtTime"
                dateTime="2022-06-28T09:54:09000"
                title="6월 28, 2022"
              >
                3시간 전
              </time>
              <div id="name">
                <p />
              </div>
              <form
                className="comment"
                onSubmit={e => {
                  e.preventDefault();
                  let copy = [...comment];
                  copy.push(input);
                  setComment(copy);
                  e.target.reset();
                }}
              >
                <svg
                  aria-label="이모티콘"
                  className="emojiIcon"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z" />
                </svg>

                <input
                  type="text"
                  className="commtext"
                  placeholder="댓글달기..."
                  onChange={e => {
                    setInput(e.target.value);
                  }}
                />
                <button type="submit" className="commbtn">
                  게시
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const CommentCreate = (props, i) => {
  const { comment, setComment } = props;
  return (
    <li className="commentBox">
      <span className="cmtUser">Jerry</span>
      <li className="cmtUserCmt">{comment}</li>
    </li>
  );
};
export default Main;
