import React from 'react';

const Story = () => {
  return (
    <div className="story">
      <header className="story-header">
        스토리<button className="action-btn-all">모두보기</button>
      </header>
      <div className="story-user">
        <div className="story-user-box">
          <img
            className="profile-image"
            alt="profile_image"
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
              alt="profile_image"
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
              alt="profile_image"
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
              alt="profile_image"
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
  );
};

export default Story;
