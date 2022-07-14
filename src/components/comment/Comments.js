import React, { /* useRef, */ useState } from 'react';
import OneOfComments from './oneOfComments';
let id = 1;

const Comment = () => {
  const [onButton, setOnButton] = useState(true); //댓글 게시 기능 여부, 유효성 검사
  const [cmtList, setCmtList] = useState([]); // 댓글 리스트 담기
  const [comment, setComment] = useState(''); //댓글 한줄
  let cmt = '';

  const cmtIsBlank = e => {
    let thisCmt = e.target.value;
    thisCmt.length > 0 && !!thisCmt.trim() //input bos에 글자가 0개 이상이거나 어떠한 값(공백)이 들어갔을 때
      ? setOnButton(false)
      : setOnButton(true);
  };

  const createCmt = e => {
    e.preventDefault(); //새로고침 방지
    cmt = e.target.text.value;
    setCmtList(preData => {
      return [...preData, { id: id, comment: cmt }];
    });
    setComment('');
    // setOnButton(true);
    id++;
  };

  return (
    <>
      <div className="parent-comment-box">
        {cmtList.map(object => (
          <OneOfComments cmtList={object} key={object.id} />
        ))}
      </div>
      <form
        className="commentInsert"
        onSubmit={e => {
          createCmt(e);
        }}
        onChange={e => {
          cmtIsBlank(e);
        }}
      >
        <input
          className="comment-box"
          type="text"
          name="text"
          placeholder="댓글 달기..."
        />
        <button
          className={onButton ? 'MainButton-on' : 'MainButton-off'}
          disabled={onButton}
          onClick={() => {
            let copy = [...cmtList];
            copy.unshift(setCmtList);
          }}
        >
          게시
        </button>
      </form>
    </>
  );
};

export default Comment;
