import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";

export default function UpVotes({ voteComment, toggleLike }) {
  return (
    <button disabled={toggleLike === false} onClick={() => voteComment(1,false)}>
      <FaRegThumbsUp size={30} />
    </button>
  );
}
