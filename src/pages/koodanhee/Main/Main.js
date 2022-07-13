/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Main.scss';
import Comment from '../../../components/comment/Comments';

const Main = () => {
  return (
    <div className="test">
      <nav className="navbar">
        <div>
          <button className="goToMain">Instagram</button>
        </div>
        <input className="search-box" type="text" placeholder=" 검색" />
        <div className="icon-bar">
          <img
            className="icon-image"
            alt="home icon"
            src="images/koodanhee/Main/home.png"
          />
          <img
            className="icon-image"
            alt="icon image"
            src="images/koodanhee/Main/send.png"
          />
          <img
            className="icon-image"
            alt="add image icon"
            src="images/koodanhee/Main/add.png"
          />
          <img
            className="icon-image"
            alt="love icon"
            src="images/koodanhee/Main/love.png"
          />
        </div>
      </nav>
      <main className="main">
        <div className="parent-feed">
          <article className="article">
            <div className="photo-feed">
              <header className="feed-header">
                <div className="user-header">
                  <div className="user-info">
                    <img
                      className="profile-image img-xl"
                      src="images/koodanhee/Main/profile.jpg"
                    />
                    <a href="">good_ani</a>
                  </div>
                  <div className="icon-image">
                    <img
                      className="icon-image"
                      src="images/koodanhee/Main/option.png"
                    />
                  </div>
                </div>
              </header>
              <img
                className="feed01-img"
                src="images/koodanhee/Main/feed01.png"
              />
              <div className="reaction-wrap">
                <img
                  className="icon-image"
                  src="images/koodanhee/Main/love.png"
                />
                <img
                  className="icon-image"
                  src="images/koodanhee/Main/bubble-chat.png"
                />
                <img
                  className="icon-image"
                  src="images/koodanhee/Main/send.png"
                />
              </div>
              <p className="likes">
                <img
                  className="profile-image"
                  src="images/koodanhee/Main/user2.jpg"
                />
                <a>jin_uk_lee</a>님 외 723명이 좋아합니다.
              </p>
              <div className="content">
                <a>good_ani</a> About Time_
              </div>
              <Comment />
            </div>
          </article>
          <div className="main-right">
            <div className="main-right-user-profile">
              <img
                className="profile-image img-xl"
                src="images/koodanhee/Main/profile.jpg"
              />
              <div className="main-right-profile">
                <div>good_ani</div>
                <div className="gray">WeCode | 위코드35기</div>
              </div>
            </div>
            <div className="story">
              <header className="story-header">
                스토리<button className="action-btn-all">모두보기</button>
              </header>
              <div className="story-user">
                <div className="story-user-box">
                  <img
                    className="profile-image"
                    src="images/koodanhee/Main/user1.jpg"
                  />
                  <div className="userID-img">
                    <div className="userId">JH___0.</div>
                    <div className="gray">3시간전</div>
                  </div>
                </div>
                <div className="story-user">
                  <div className="story-user-box">
                    <img
                      className="profile-image"
                      src="images/koodanhee/Main/user2.jpg"
                    />
                    <div className="userID-img">
                      <div className="userId">JH___0.</div>
                      <div className="gray">16분전</div>
                    </div>
                  </div>
                </div>
                <div className="story-user">
                  <div className="story-user-box">
                    <img
                      className="profile-image"
                      src="images/koodanhee/Main/user3.jpg"
                    />
                    <div className="userID-img">
                      <div className="userId">JH___0.</div>
                      <div className="gray">1시간전</div>
                    </div>
                  </div>
                </div>
                <div className="story-user">
                  <div className="story-user-box">
                    <img
                      className="profile-image"
                      src="images/koodanhee/Main/profile.jpg"
                    />
                    <div className="userID-img">
                      <div className="userId">JH___0.</div>
                      <div className="gray">6시간전</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="recommendation">
              <header className="re-header">
                회원님을 위한 추천
                <button className="action-btn-all">모두보기</button>
              </header>
              <div className="profile-card">
                <div className="user-profile">
                  <img
                    className="profile-image"
                    src="images/koodanhee/Main/user6.jpg"
                  />
                  <div className="userID-img">
                    <div className="userId">wecode_35</div>
                    <div className="gray">good_ani님 외 2명이...</div>
                  </div>
                  <button className="action-btn">팔로우</button>
                </div>
              </div>
              <div className="profile-card">
                <div className="user-profile">
                  <img
                    className="profile-image"
                    src="images/koodanhee/Main/user6.jpg"
                  />
                  <div className="userID-img">
                    <div className="userId">wecode_35</div>
                    <div className="gray">good_ani님 외 2명이...</div>
                  </div>
                  <button className="action-btn">팔로우</button>
                </div>
                <div className="profile-card">
                  <div className="user-profile">
                    <img
                      className="profile-image"
                      src="images/koodanhee/Main/user6.jpg"
                    />
                    <div className="userID-img">
                      <div className="userId">wecode_35</div>
                      <div className="gray">good_ani님 외 2명이...</div>
                    </div>
                    <button className="action-btn">팔로우</button>
                  </div>
                  <div className="profile-card">
                    <div className="user-profile">
                      <img
                        className="profile-image"
                        src="images/koodanhee/Main/user6.jpg"
                      />
                      <div className="userID-img">
                        <div className="userId">wecode_35</div>
                        <div className="gray">good_ani님 외 2명이...</div>
                      </div>
                      <button className="action-btn">팔로우</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
