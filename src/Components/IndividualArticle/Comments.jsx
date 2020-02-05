import React from "react";
import CommentCard from "./CommentCard";
import styles from "../../CSS/CommentCard.module.css";

export default function Comments({
  comments,
  upVoteComments,
  downVoteComments,
  inc_votes_comments,
  toggleUpLike,
  toggleDownLike,
  removeComment,
  errorLikes,
  errorLoading,
  handingErrorLoading
}) {
  return (
    <div>
      <ul className={styles.main}>
        {comments.map((comment, index) => {
          return (
            <CommentCard
              key={index}
              comment={comment}
              upVoteComments={upVoteComments}
              downVoteComments={downVoteComments}
              inc_votes_comments={inc_votes_comments}
              toggleUpLike={toggleUpLike}
              toggleDownLike={toggleDownLike}
              removeComment={removeComment}
              errorLikes={errorLikes}
              errorLoading={errorLoading}
              handingErrorLoading={handingErrorLoading}
            />
          );
        })}
      </ul>
    </div>
  );
}
