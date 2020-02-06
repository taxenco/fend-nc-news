import React from "react";
import CommentCard from "./CommentCard";
import styles from "../../CSS/CommentCard.module.css";

export default function Comments({ comments, removeComment }) {
  return (
    <div>
      <ul className={styles.main}>
        {comments.map((comment, index) => {
          return (
            <CommentCard
              key={index}
              comment={comment}
              removeComment={removeComment}
            />
          );
        })}
      </ul>
    </div>
  );
}
