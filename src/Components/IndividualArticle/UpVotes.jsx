import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import styles from "../../CSS/Like.module.css";

export default function UpVotes({ voteComment, toggleLike }) {
  return (
    <button
      className={styles.like}
      disabled={toggleLike === false}
      onClick={() => voteComment(1, false)}
    >
      <FaRegThumbsUp size={30} />
    </button>
  );
}
