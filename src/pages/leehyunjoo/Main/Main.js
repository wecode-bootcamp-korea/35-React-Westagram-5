/*eslint-disable*/

import React from 'react';
import "./Main.scss";
import { useState } from "react";
import Comments from "./comments";

const Story = () => {
  return (
    <div className="user-container-story">
      <img src="/images/leehyunjoo/Main/defaultprofile.jpg" className="profile-story" alt="profile-story"/>
      <span className="user-name-story">jooooo12</span>
    </div>
  );
};

const Stories = () => {
  return (
    <div className="story-container">
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
};

const Feed = () => {
  return (
    <div className="feed-main-container">
      <div className="feed-header">
        <div className="profile-feed-section">
          <img
            src="/images/leehyunjoo/Main/profile.jpg"
            id="profile-icon-feed"
            alt="프로필사진"
          />
        </div>
        <div className="id-location-section">
          <div className="id-in-feed">joo___ooj</div>
          <div className="location-in-feed">Broadway,Los Angeles, CA</div>
        </div>
        <div className="more-section">
          <img src="/images/leehyunjoo/Main/more.png" alt="더보기" id="more-icon" />
        </div>
      </div>
      <div className="feed-main">
        <div className="feed-container">
          <img src="/images/leehyunjoo/Main/feed.JPG" alt="피드이미지" id="feed-image" />
        </div>
      </div>
      <div className="feed-icon">
        <div className="first-icon-section">
          <span id="like" />
          <span id="reply" />
          <span id="dm" />
        </div>
        <div className="second-icon-section">
          <span id="save" />
        </div>
      </div>
      <div className="feed-like">
        <img
          className="feed-like-user-profile"
          src="/images/leehyunjoo/Main/defaultprofile.jpg" alt="feed-like-user-profile"
        />
        <div className="feed-like-text">
          <a className="userOfFeed" id="inlike">
            _jo0o12
          </a>
          님 외 <a className="userInLikeOfFeed">765명</a>이 좋아합니다
        </div>
      </div>
      <div className="feed-contents-section">
        <a className="userOfFeed">joo___ooj</a>egg slut🍔 ... {" "}
        <a id="more">더 보기</a>
      </div>
      <Comments />
    </div>
  );
};



const Aside = () => {
  return (
    <div className="aside-container">
      <div className="aside-header">
        <div className="aside-profile-container">
          <img
            className="aside-profile"
            src="/images/leehyunjoo/Main/profile.jpg"
            alt="aside profile"
          />
        </div>
        <div className="aside-id-container">
          <div className="aside-id">joo___ooj</div>
        </div>
        <div className="aside-change-button-container">
          <button className="aside-change-button">전환</button>
        </div>
      </div>
      <div className="aside-main">
        <div className="aside-recommend">
          <div className="aside-reco-forme">회원님을 위한 추천</div>
          <div className="aside-reco-viewAll">
            <button className="aside-viewAll-button">모두 보기</button>
          </div>
        </div>
        <div className="aside-reco-user">
          <div className="reco-user-profile-container">
            <img
              src="/images/leehyunjoo/Main/defaultprofile.jpg"
              alt="profile"
              className="reco-user-profile"
            />
          </div>
          <div className="reco-user-container">
            <div className="reco-user" id="id">
              jooooo12
            </div>
            <div className="reco-user" id="follower">
              hyunjoo님 외 432명이 팔로우합니다.
            </div>
          </div>
          <div className="reco-follow-button-container">
            <button className="aside-follow-button">팔로우</button>
          </div>
        </div>
        <div className="aside-reco-user">
          <div className="reco-user-profile-container">
            <img
              src="/images/leehyunjoo/Main/defaultprofile.jpg"
              alt="profile"
              className="reco-user-profile"
            />
          </div>
          <div className="reco-user-container">
            <div className="reco-user" id="id">
              jooooo12
            </div>
            <div className="reco-user" id="follower">
              hyunjoo님 외 432명이 팔로우합니다.
            </div>
          </div>
          <div className="reco-follow-button-container">
            <button className="aside-follow-button">팔로우</button>
          </div>
        </div>
        <div className="aside-reco-user">
          <div className="reco-user-profile-container">
            <img
              src="/images/leehyunjoo/Main/defaultprofile.jpg"
              alt="profile"
              className="reco-user-profile"
            />
          </div>
          <div className="reco-user-container">
            <div className="reco-user" id="id">
              jooooo12
            </div>
            <div className="reco-user" id="follower">
              hyunjoo님 외 432명이 팔로우합니다.
            </div>
          </div>
          <div className="reco-follow-button-container">
            <button className="aside-follow-button">팔로우</button>
          </div>
        </div>
        <div className="aside-reco-user">
          <div className="reco-user-profile-container">
            <img
              src="/images/leehyunjoo/Main/defaultprofile.jpg"
              alt="profile"
              className="reco-user-profile"
            />
          </div>
          <div className="reco-user-container">
            <div className="reco-user" id="id">
              jooooo12
            </div>
            <div className="reco-user" id="follower">
              hyunjoo님 외 432명이 팔로우합니다.
            </div>
          </div>
          <div className="reco-follow-button-container">
            <button className="aside-follow-button">팔로우</button>
          </div>
        </div>
        <div className="aside-reco-user">
          <div className="reco-user-profile-container">
            <img
              src="/images/leehyunjoo/Main/defaultprofile.jpg"
              alt="profile"
              className="reco-user-profile"
            />
          </div>
          <div className="reco-user-container">
            <div className="reco-user" id="id">
              jooooo12
            </div>
            <div className="reco-user" id="follower">
              hyunjoo님 외 432명이 팔로우합니다.
            </div>
          </div>
          <div className="reco-follow-button-container">
            <button className="aside-follow-button">팔로우</button>
          </div>
        </div>
      </div>
      <div className="aside-footer">
        <span>
          소개&nbsp;&middot;&nbsp;도움말&nbsp;&middot;&nbsp;홍보
          센터&nbsp;&middot;API&middot;&nbsp;채용
          정보&nbsp;&middot;&nbsp;개인정보처리방침&nbsp;&middot;&nbsp;
          <br />
          약관&nbsp;&middot;&nbsp;위치&nbsp;&middot;&nbsp;언어
          <br />
          <br />© 2022 WESTAGRAM FROM META
        </span>
      </div>
    </div>
  );
};

function Main() {
  return (
    <div className="main">
      <nav>
        <div className="nav-container">
          <span className="westagram-logo-main">westagram</span>
          <div className="serch-bar-container">
            <input className="search-bar" type="text" placeholder="검색" />
            <img
              src="images/loupe.png"
              className="mgnifying-glass"
              alt="glass"
            />
          </div>
          <div className="icon-container">
            <img src="/images/leehyunjoo/Main/homepage.png" className="home icon" alt="home" />
            <img src="/images/leehyunjoo/Main/dm.png" className="dm icon" alt="dm" />
            <img src="/images/leehyunjoo/Main/add.png" className="add icon" alt="add" />
            <img
              src="images/explore.png"
              className="explore icon"
              alt="explore"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              className="heart icon"
              alt="love"
            />
            <img
              src="images/profile.jpg"
              className="profile icon"
              alt="profile"
            />
          </div>
        </div>
      </nav>

      <main>
        <div className="total-container">
          <div className="main-container">
            <Stories />
            <Feed />
            <Feed />
          </div>
          <Aside />
        </div>
      </main>
    </div>
  );
}


export default Main;