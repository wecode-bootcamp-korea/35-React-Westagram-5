import React, { useState } from 'react';
import NewComment from '../NewComment/NewComment';
import './FeedsArea.scss';


const FeedsArea = () => {
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




export default FeedsArea;