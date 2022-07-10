import React, { useState } from 'react';
import './Main.scss';
import Comment from '../../../components/comment/Comment';
// import Data from '../../../components/comment/data.json'

const Main = () => {
  const [comment, setComment] = useState('');
  // const [userId, setUserId] = useState('userId');
  const [initial, setInitial] = useState([]);

  const submit = e => {
    e.preventDefault();
    setInitial(prevData => {
      return [...prevData, comment];
    });
    setComment('');
  };

  return (
    <>
      <div />
      <div className="main">
        <div className="feeds">
          <div className="article">
            <div className="metadata">
              <img
                alt="프로필 사진"
                src="../../images/kimsujeong/Main/profile.jpg"
              />
              <p className="id">1eoee</p>
              <div className="myProfile" />
            </div>
            <div className="udimg">
              <img src="../../images/kimsujeong/Main/img.jpg" alt="" />
            </div>
            <div className="icon">
              <img
                id="heart"
                alt="좋아요"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />

              <img
                alt="탐색"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              />
              <img
                alt="마이 페이지"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              />
            </div>
            <div className="like">
              <img
                alt="프로필 사진"
                src="../../images/kimsujeong/Main/profile.jpg"
              />
              <div className="font">
                <span>wecode</span> 님 외<span> 여러 명</span>이 좋아합니다.
              </div>
            </div>
            <div id="contents">
              <span className="bold">1eoe</span>
              <span className="text">
                시냇물은 졸졸졸졸 고기들은 왔다갔다 버들가지 한들한들 꾀꼬리는
                꾀꼴꾀꼴 금빛 옷을 차려입고 여름 아씨 마중 왔다 곱게 곱게
                차려입고 시냇가에 빨래왔다 시냇물은 졸졸졸졸 고기들은 왔다갔다
                버들가지 한들한들 꾀꼬리는 꾀꼴꾀꼴 금빛 옷을 차려입고 여름 아씨
                마중 왔다 곱게 곱게 차려입고 시냇가에 빨래왔다
              </span>
              <button className="button">더 보기</button>
            </div>
            {initial.map(comment => {
              return <Comment key={Math.random() * 99} comment={comment} />;
            })}

            <form className="commentBox">
              <input
                type="text"
                id="comment"
                value={comment}
                style={{ border: '0 solid black' }}
                placeholder="댓글을 입력해 주세요."
                onChange={e => setComment(e.target.value)}
              />
              <button id="submit-btn" onClick={submit}>
                제출
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
