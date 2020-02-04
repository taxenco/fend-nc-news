import React from "react";
import CommentCard from "./CommentCard";
import styles from "../../CSS/CommentCard.module.css";

export default function Comments({ comments }) {
  return (
    <div>
      <ul className={styles.main}>
        {comments.map((comment, index) => {
          return <CommentCard key={index} comment={comment} />;
        })}
      </ul>
    </div>
  );
}
