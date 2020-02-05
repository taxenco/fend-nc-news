import React from "react";
import { Toast, Alert, Spinner } from "react-bootstrap";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { GoTrashcan } from "react-icons/go";
import styles from "../../CSS/CommentCard.module.css";

export default function CommentCard({
  comment,
  upVoteComments,
  downVoteComments,
  removeComment,
  inc_votes_comments,
  toggleUpLike,
  toggleDownLike,
  errorLikes,
  errorLoading,
  handingErrorLoading
}) {
  return (
    <ol className={styles.card}>
      <Toast>
        <Toast.Header closeButton={false}>
          <strong className="mr-auto">{comment.author}</strong>
          <small>{comment.created_at}</small>
        </Toast.Header>
        <Toast.Body>{comment.body}</Toast.Body>
        <div className={styles.votes}>
          <Toast.Body>
            <strong>Votes: </strong>
            {comment.votes + inc_votes_comments}
          </Toast.Body>
        </div>
        <div className={styles.footer}>
          <div className={styles.like}>
            {toggleUpLike ? (
              <FaRegThumbsUp
                size={30}
                onClick={() => {
                  upVoteComments(comment.comment_id);
                }}
              />
            ) : (
              <FaRegThumbsUp size={30} />
            )}
          </div>
          <div className={styles.bin}>
            {
              <GoTrashcan
                size={30}
                onClick={() => {
                  removeComment(comment.comment_id);
                }}
              />
            }
          </div>
          <div className={styles.dislike}>
            {toggleDownLike ? (
              <FaRegThumbsDown
                size={30}
                onClick={() => {
                  downVoteComments(comment.comment_id);
                }}
              />
            ) : (
              <FaRegThumbsDown size={30} />
            )}
          </div>
        </div>
        <div className={styles.error}>
          {errorLoading && <Spinner animation="border" />}
          {errorLikes && (
            <Alert
              variant="danger"
              dismissible
              onClose={() => {
                handingErrorLoading();
              }}
            >
              Error when updating information, please try again{" "}
            </Alert>
          )}
        </div>
      </Toast>
    </ol>
  );
}
