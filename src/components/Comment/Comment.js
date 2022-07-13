import React from 'react';
import './Comment.scss';

function Comment({ comment }) {
  return <p className="comment">{comment}</p>;
}
export default Comment;
