import React, { Component } from "react";
import { Toast, Alert, Spinner } from "react-bootstrap";
import { GoTrashcan } from "react-icons/go";
import UpVotes from "./UpVotes";
import DownVotes from "./DownVote";
import styles from "../../CSS/CommentCard.module.css";
import * as api from "../../api";
const DATE_OPTIONS = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
};

export default class CommentCard extends Component {
  state = {
    errorLikesComment: false,
    errorLoadingComment: false,
    inc_votes_comments: 0,
    toggleLike: null
  };

  voteComment = (num, disable) => {
    const { inc_votes_comments } = this.state;
    const { comment_id } = this.props.comment;
    this.setState({
      inc_votes_comments: inc_votes_comments + num,
      errorLoadingComment: true,
      toggleLike: disable
    });
    api
      .patchCommentById(comment_id, num)
      .then(() => {
        this.setState(prevState => {
          return {
            inc_votes_comments: prevState.inc_votes_comments + num,
            errorLoadingComment: false
          };
        });
      })
      .catch(errorLikes => {
        this.setState({
          errorLoadingComment: false,
          errorLikesComment: true
        });
      });
  };

  handingErrorLoading = () => {
    this.setState({ errorLikesComment: false });
  };

  render() {
    const { comment, removeComment } = this.props;
    const {
      errorLoadingComment,
      errorLikesComment,
      inc_votes_comments,
      toggleLike
    } = this.state;
    return (
      <ol className={styles.card}>
        <Toast>
          <Toast.Header closeButton={false}>
            <strong className="mr-auto">{comment.author}</strong>
            <small>
              {new Date(comment.created_at).toLocaleDateString(
                "en-US",
                DATE_OPTIONS
              )}
            </small>
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
              <UpVotes voteComment={this.voteComment} toggleLike={toggleLike} />
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
              <DownVotes
                voteComment={this.voteComment}
                toggleLike={toggleLike}
              />
            </div>
          </div>
          <div className={styles.error}>
            {errorLoadingComment && <Spinner animation="border" />}
            {errorLikesComment && (
              <Alert
                variant="danger"
                dismissible
                onClose={() => {
                  this.handingErrorLoading();
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
}
