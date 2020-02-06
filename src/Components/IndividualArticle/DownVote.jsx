import React from "react";
import { FaRegThumbsDown } from "react-icons/fa";

export default function DownVotes({ voteComment, toggleLike }) {
  return (
    <button
      disabled={toggleLike === true}
      onClick={() => voteComment(-1, true)}
    >
      <FaRegThumbsDown size={30} />
    </button>
  );
}
