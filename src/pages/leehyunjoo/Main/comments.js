import { useState } from "react";
import Acomment from "./Acomment";
let id = 1;

const Comments = () => {
  const [onButton, setOnbutton] = useState(true);
  const [cmntList, setCmntList] = useState([]);
  let cmnt = "";

  const checkItIsBlank = (e) => {
    let thisCmnt = e.target.value;
    thisCmnt.length > 0 && !!thisCmnt.trim()
      ? setOnbutton(false)
      : setOnbutton(true);
  };

  const createCmnt = (e) => {
    e.preventDefault();
    cmnt = e.target.text.value;
    setCmntList([...cmntList, { id: id, contents: cmnt }]);
    e.target.text.value = "";
    setOnbutton(true);
    id++;
  };

  return (
    <>
      <div className="feed-comment">
        {cmntList.map((object) => (
          <Acomment cmntList={object} key={object.id} />
        ))}
      </div>
      <div className="feed-time">1시간 전</div>
      <form
        className="feed-comment-box-section"
        onSubmit={(e) => {
          createCmnt(e);
        }}
        onChange={(e) => {
          checkItIsBlank(e);
        }}
      >
        <div className="emoji-icon-container">
          <img src="/images/leehyunjoo/Main/smile.png" alt="emoji" className="emoji-icon" />
        </div>
        <input
          type="text"
          name="text"
          placeholder="댓글 달기..."
          className="comment-box"
        />
        <button
          className="comment-enter-button"
          name="button"
          disabled={onButton}
        >
          게시
        </button>
      </form>
    </>
  );
};

export default Comments;
