import React from "react";
import { Toast } from "react-bootstrap";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import styles from "../../CSS/CommentCard.module.css";

export default function CommentCard({ comment }) {
  return (
    <div>
      <ol>
        <Toast>
          <Toast.Header>
            <strong className="mr-auto">{comment.author}</strong>
            <small>{comment.created_at}</small>
          </Toast.Header>
          <Toast.Body>{comment.body}</Toast.Body>
          <div className={styles.footer}>
            <div className={styles.like}>{<FaRegThumbsUp size={30} />}</div>
            <div className={styles.dislike}>
              {<FaRegThumbsDown size={30} />}
            </div>
          </div>
        </Toast>
      </ol>
    </div>
  );
}
