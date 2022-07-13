import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeedsArea from '../../../components/FeedsArea/FeedsArea'
import './Main.scss';

const Main = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login-shinsoojung');
  };

  return (
    <div>
      <nav>
        <div className="homeNavBox">
          <button onClick={goToLogin}>
            <h2 className="logoSmall">westagram</h2>
          </button>
          <div className="searchBar">
            <img
              className="searchIcon"
              src="images/shinsoojung/Main/search.png"
              alt="searchIcon"
            />
            <input className="inputSearch" type="text" placeholder="검색" />
          </div>
          <div className="navIcon">
            <div>
              <img
                alt="newFeedIcon"
                src="images/shinsoojung/Main/newFeed.jpg"
              />
            </div>
            <div>
              <img alt="homeIcon" src="images/shinsoojung/Main/home.jpg" />
            </div>
            <div>
              <img alt="dmIcon" src="images/shinsoojung/Main/dm.jpg" />
            </div>
            <div>
              <img
                alt="exploreIcon"
                src="images/shinsoojung/Main/explore.jpg"
              />
            </div>
            <div>
              <img alt="heartIcon" src="images/shinsoojung/Main/heart.jpg" />
            </div>
            <div>
              <img
                alt="myProfileIcon"
                src="images/shinsoojung/Main/myprofile.png"
                id="navProfileIcon"
              />
            </div>
          </div>
        </div>
      </nav>
      <main>
        <section className="feedScrollArea">
            <FeedsArea />
        </section>
        <aside className="stickyAsideArea">
          <ul>
            <li className="asideMyProfileBox">
              <div className="asideMyProfile">
                <div className="asideMyProfileImg">
                  <img
                    src="images/shinsoojung/Main/myprofile.png"
                    alt="myProfile"
                  />
                </div>
                <div className="asideFeedMyProfileName">
                  doublejs1226{' '}
                  <div className="asideFeedMyProfileSubName">수정</div>
                </div>
              </div>
              <div className="asideMyIdRetrun" onClick={goToLogin}>
                전환
              </div>
            </li>
            <li className="recommandListTitle">
              <div>회원님을 위한 추천</div>
              <div>모두 보기</div>
            </li>
            <li className="recommandPeopleBox">
              <div className="recommandPeopleList">
                <div className="recommendProfileIcon">
                  <img
                    src="images/shinsoojung/Main/myprofile.png"
                    alt="myProfile"
                  />
                </div>
                <div className="recommendProfileName">
                  doublejs1226
                  <div className="recommendProfileSubName">수정</div>
                </div>
              </div>
              <div className="recommendPeopleFollow">팔로잉</div>
            </li>
          </ul>
          <ul className='systemNotices'> 
          {SYSTEM_NOTICS.map((notics)=>{
            return <li key={notics.id} >{notics.name}</li>
          })}
          </ul>
        </aside>
      </main>
    </div>
  );
};

const SYSTEM_NOTICS = [
  {id:1, name : "소개"},
  {id:2, name : "홍보센터"},
  {id:3, name : "API"},
  {id:4, name : "개인정보처리방침"},
  {id:5, name : "약관"} 
];


export default Main;


