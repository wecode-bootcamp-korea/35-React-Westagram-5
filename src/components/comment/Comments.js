import React, { useState } from 'react';
import OneOfComments from './oneOfComments';
let id = 1;

const Comment = () => {
  const [onButton, setOnButton] = useState(true);
  const [cmtList, setCmtList] = useState([]);
  let cmt = '';

  const cmtIsBlank = e => {
    let thisCmt = e.target.value;
    thisCmt.length > 0 && !!thisCmt.trim()
      ? setOnButton(false)
      : setOnButton(true);
  };

  const createCmt = e => {
    e.preventDefault();
    cmt = e.target.text.value;

    setCmtList([...cmtList, { id: id, contents: cmt }]);
    setOnButton(true);
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
