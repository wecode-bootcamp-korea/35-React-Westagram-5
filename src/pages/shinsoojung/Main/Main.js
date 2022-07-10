import React from 'react';
import { useNavigate } from 'react-router-dom';

import "./Main.scss";

const Main = () => {

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/")
  }

  return (
    <div>
       <nav>
      <div className="homeNavBox">
        <button onClick={goToLogin}><h2 className="logoSmall">westagram</h2></button>
        <div className="searchBar">
          <img className="searchIcon" src="images/shinsoojung/Main/search.png" alt="searchIcon" />
          <input className="inputSearch" type="text" placeholder="검색" />
        </div>
        <div className="navIcon">
          <div><img alt="newFeedIcon" src="images/shinsoojung/Main/newFeed.jpg" /></div>
          <div><img alt="homeIcon" src="images/shinsoojung/Main/home.jpg" /></div>
          <div><img alt="dmIcon" src="images/shinsoojung/Main/dm.jpg" /></div>
          <div><img alt="exploreIcon" src="images/shinsoojung/Main/explore.jpg" /></div>
          <div><img alt="heartIcon" src="images/shinsoojung/Main/heart.jpg" /></div>
          <div><img alt="myProfileIcon" src="images/shinsoojung/Main/myprofile.png" id='navProfileIcon' /></div>
        </div>
      </div>
    </nav>
    <main>
      <section className="feedScrollArea">
        <article className="feed">
          <div className="feedNav">
            <div className="feedNavIconName">
              <img id="feedProfileIcon" src="images/shinsoojung/Main/myprofile.png" alt="myProfile" />
              <div className="feedProfileName">doublejs1226</div>
            </div>
            <img className="feedPlusIcon" src="images/shinsoojung/Main/dot.png" alt="feedNavDot" />
          </div>
          <div className="feedImageSection">
            <img src="images/shinsoojung/Main/feed_img1.jpg" alt="feedimg1" id="feedImg" />
          </div>
          <div className="feedImageResponse">
            <div className="feedImageResponseInner">
              <img src="images/shinsoojung/Main/heartbeat.jpg" alt="heartBeatIcon" />
              <img src="images/shinsoojung/Main/comment.jpg" alt="commentIcon" />
              <img src="images/shinsoojung/Main/dm.jpg" alt="dmIcon" />
            </div>
            <img src="images/shinsoojung/Main/cliping.jpg" alt="clipingIcon" />
          </div>
          <article className="commentArea">
            <div className="heartBeatPeople">
              <p><span className="userName">doublejs1226</span>님 <span className="userName">여러 명</span>이 좋아합니다.</p>
            </div>
            <div className="newComment">
              {/* 신규 코멘트 영역 */}
            </div>
          </article>
          <div className="commentBox">
            <form className="inputCommentsBox">
              <input id="commentInput" type="text" placeholder="댓글 달기..." />
              <button id="commentSubmit">게시</button>
            </form>
          </div>
        </article>
      </section>
      <aside className='stickyAsideArea'>
        <ul>
          <li className="asideMyProfileBox">
            <div className="asideMyProfile">
              <div className="asideMyProfileImg">
                <img src="images/shinsoojung/Main/myprofile.png" alt="myProfile"/>
              </div>
              <div className="asideFeedMyProfileName">doublejs1226 <div className="asideFeedMyProfileSubName">수정</div>
              </div>
            </div>
            <div className="asideMyIdRetrun" onClick={goToLogin}>전환</div>
          </li>
          <li className="recommandListTitle">
            <div>회원님을 위한 추천</div>
            <div>모두 보기</div>
          </li>
          <li className="recommandPeopleBox">
              <div className="recommandPeopleList">
                <div className="recommendProfileIcon">
                  <img src="images/shinsoojung/Main/myprofile.png" alt="myProfile"/>
                </div>
                <div className="recommendProfileName">doublejs1226<div className="recommendProfileSubName">수정</div>
                </div>
              </div>
              <div className="recommendPeopleFollow">팔로잉</div>
          </li>
          <li className="recommandPeopleBox">
              <div className="recommandPeopleList">
                <div className="recommendProfileIcon">
                  <img src="images/shinsoojung/Main/myprofile.png" alt="myProfile"/>
                </div>
                <div className="recommendProfileName">doublejs1226<div className="recommendProfileSubName">수정</div>
                </div>
              </div>
              <div className="recommendPeopleFollow">팔로잉</div>
          </li>
          <li className="recommandPeopleBox">
              <div className="recommandPeopleList">
                <div className="recommendProfileIcon">
                  <img src="../../images/myprofile.png" alt="myProfile"/>
                </div>
                <div className="recommendProfileName">doublejs1226<div className="recommendProfileSubName">수정</div>
                </div>
              </div>
              <div className="recommendPeopleFollow">팔로잉</div>
          </li>
        </ul>
      </aside>
    </main>
    </div>
  );
};

export default Main;