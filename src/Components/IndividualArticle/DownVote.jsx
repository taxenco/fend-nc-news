import React from "react";
import { FaRegThumbsDown } from "react-icons/fa";
import styles from "../../CSS/Like.module.css";

export default function DownVotes({ voteComment, toggleLike }) {
  return (
    <button
      className={styles.dislike}
      disabled={toggleLike === true}
      onClick={() => voteComment(-1, true)}
    >
      <FaRegThumbsDown size={30} />
    </button>
  );
}
