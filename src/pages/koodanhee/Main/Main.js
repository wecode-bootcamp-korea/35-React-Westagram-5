import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import Comments from './components/comment/Comments';
import Story from './components/Story/Story';
import Recommendation from './components/Recommendation/Recommendation';
import './Main.scss';
let id = 2;

const Main = () => {
  const [commentList, setCommentList] = useState([
    {
      id: 1,
      name: '',
      content: '',
    },
  ]);

  const [commentData, setCommentData] = useState('');

  const addCommentData = e => {
    e.preventDefault();
    setCommentData(e.target.value);
  };

  const addComment = e => {
    e.preventDefault();
    const comment = {
      id: id,
      name: 'good_ani',
      content: commentData,
    };
    setCommentList([...commentList, comment]);
    setCommentData('');
    id++;
  };
  return (
    <div className="Main">
      <Nav />
      <main className="main">
        <div className="parent-feed">
          <article className="article">
            <div className="photo-feed">
              <header className="feed-header">
                <div className="user-header">
                  <div className="user-info">
                    <img
                      className="profile-image img-xl"
                      alt="profile_image"
                      src="images/koodanhee/Main/profile.jpg"
                    />
                    <a href="">good_ani</a>
                  </div>
                  <div className="icon-image">
                    <img
                      className="icon-image"
                      alt="icon_image"
                      src="images/koodanhee/Main/option.png"
                    />
                  </div>
                </div>
              </header>
              <img
                className="feed01-img"
                alt="feed_img"
                src="images/koodanhee/Main/feed01.png"
              />
              <div className="reaction-wrap">
                <img
                  className="icon-image"
                  alt="icon_image"
                  src="images/koodanhee/Main/love.png"
                />
                <img
                  className="icon-image"
                  alt="icon_image"
                  src="images/koodanhee/Main/bubble-chat.png"
                />
                <img
                  className="icon-image"
                  alt="icon_image"
                  src="images/koodanhee/Main/send.png"
                />
              </div>
              <p className="likes">
                <img
                  className="profile-image"
                  alt="profile_image"
                  src="images/koodanhee/Main/user2.jpg"
                />
                <a>jin_uk_lee</a>님 외 723명이 좋아합니다.
              </p>
              <div className="content">
                <a>good_ani</a> About Time_
              </div>
              {commentList.map(comment => (
                <Comments comment={comment} />
              ))}

              <form action="submit" onSubmit={addComment}>
                <input
                  className="comment-box"
                  type="text"
                  onChange={addCommentData}
                  value={commentData}
                />
                <button className="MainButton-on">게시</button>
              </form>
            </div>
          </article>
          <div className="main-right">
            <div className="main-right-user-profile">
              <img
                className="profile-image img-xl"
                alt="profile_image"
                src="images/koodanhee/Main/profile.jpg"
              />
              <div className="main-right-profile">
                <div>good_ani</div>
                <div className="gray">WeCode | 위코드35기</div>
              </div>
            </div>
            <Story />
            <Recommendation />
            <div className="copyright">
              <p className="copyright">
                Instagram 소개•도움말•홍보 센터•API•채용
                정보•개인정보처리방침•약관•위치•언어
              </p>
              <p>© 2022 INSTAGRAM FROM META</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Main;
