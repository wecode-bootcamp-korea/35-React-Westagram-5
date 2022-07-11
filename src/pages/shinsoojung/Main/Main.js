import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <CommentArea />

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
        </aside>
      </main>
    </div>
  );
};

const CommentArea = () => {
  const [inputValue, setinputValue] = useState('');
  const [commentList, setcommentList] = useState([]);
  // const [disabled, setDisabled] = useState(true);


  const addComment =(e)=>{
    e.preventDefault();
    setcommentList([...commentList,inputValue]);
    setinputValue('');
  }

  // const handleBtn = () => {
  //   inputValue.length > 0
  //     ? setDisabled(false)
  //     : setDisabled(true);
  // };
  // console.log(inputValue);

  return (
    <article className="feed">
            <div className="feedNav">
              <div className="feedNavIconName">
                <img
                  id="feedProfileIcon"
                  src="images/shinsoojung/Main/myprofile.png"
                  alt="myProfile"
                />
                <div className="feedProfileName">doublejs1226</div>
              </div>
              <img
                className="feedPlusIcon"
                src="images/shinsoojung/Main/dot.png"
                alt="feedNavDot"
              />
            </div>
            <div className="feedImageSection">
              <img
                src="images/shinsoojung/Main/feed_img1.jpg"
                alt="feedimg1"
                id="feedImg"
              />
            </div>
            <div className="feedImageResponse">
              <div className="feedImageResponseInner">
                <img
                  src="images/shinsoojung/Main/heartbeat.jpg"
                  alt="heartBeatIcon"
                />
                <img
                  src="images/shinsoojung/Main/comment.jpg"
                  alt="commentIcon"
                />
                <img src="images/shinsoojung/Main/dm.jpg" alt="dmIcon" />
              </div>
              <img
                src="images/shinsoojung/Main/cliping.jpg"
                alt="clipingIcon"
              />
            </div>
      <article className="commentArea">
        <div className="heartBeatPeople">
          <p>
            <span className="userName">doublejs1226</span>님
            <span className="userName">여러 명</span>이 좋아합니다.
          </p>
        </div>
      <NewComment commentList={commentList}  />
      </article>
      <div className="commentBox">
        <form className="inputCommentsBox">
          <input
            onChange={e => {
              setinputValue(e.target.value);
            }}
            value={inputValue}
            // onKeyUp={handleBtn}
            id="commentInput"
            type="text"
            placeholder="댓글 달기..."
          />
          <button
          onClick={addComment}
          disabled={inputValue ? false : true}
          className={inputValue ? 'commentSubmit_pass':'commentSubmit'}>
          게시</button>          
        </form>
      </div>
    </article>
  );
};


const NewComment = ({commentList}) => {
  return (
    <div className="newComment">
    {/* 신규 코멘트 영역 */}
    {commentList.map((data, i) => {
      return <div data={data} key={i}>{data}</div>
    })}
  </div>
  )
}





export default Main;


