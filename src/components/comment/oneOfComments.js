import { useState } from 'react';

const OneOfComments = ({ cmtList }) => {
  const [like, setLike] = useState();
  return (
    <div className="comment-box">
      <span className="useId">good_ani</span>
      <span className="userCmt">{cmtList?.contents}</span>
      <span
        className="likeUp"
        onClick={() => {
          // like() === emptyheart ? setLike(redheart) : setLike(emptyheart);
        }}
      />
      <span className="likeUp" />
      {/* {<img alt="" src={emptyheart} onClick={redheart} />} */}
      <span className="deleteCmt" />
    </div>
  );
};

export default OneOfComments;
