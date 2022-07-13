import React from 'react';
import './comment.scss';

export default function Comment({ comment }) {
  return <div className="userWriteComment">{comment}</div>;
}
