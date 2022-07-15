import React from 'react';

const Comments = props => {
  return (
    <div>
      <div key={props.comment.id} style={{ marginLeft: '15px' }}>
        <strong>{props.comment.name}</strong>
        <span style={{ marginLeft: '10px' }}>{props.comment.content}</span>
      </div>
    </div>
  );
};

export default Comments;
