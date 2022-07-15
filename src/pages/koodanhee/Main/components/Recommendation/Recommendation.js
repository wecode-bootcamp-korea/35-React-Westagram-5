import React from 'react';

const Recommendation = () => {
  return (
    <div className="recommendation">
      <header className="re-header">
        회원님을 위한 추천
        <button className="action-btn-all">모두보기</button>
      </header>
      <div className="profile-card">
        <div className="user-profile">
          <img
            className="profile-image"
            alt="profile_image"
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
            alt="profile_image"
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
              alt="profile_image"
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
                alt="profile_image"
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
  );
};

export default Recommendation;
