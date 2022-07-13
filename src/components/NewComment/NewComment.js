import React from 'react';
import './NewComment.scss';


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


export default NewComment;