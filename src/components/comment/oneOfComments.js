import { useState } from 'react';

const OneOfComments = props => {
  // const [like, setLike] = useState(emptyheart);
  return (
    <div className="comment-box">
      <span className="useId">good_ani</span>
      <span className="userCmt">{props.cmtList?.contents}</span>
      <span
        className="likeUp"
        onClick={() => {
          // like() === emptyheart ? setLike(redheart) : setLike(emptyheart);
        }}
      />
      <span className="likeUp" />
      {/* <img alt="" src={emptyheart} onClick={redheart} /> */}
      <span className="deleteCmt" />
    </div>
  );
};

export default OneOfComments;
