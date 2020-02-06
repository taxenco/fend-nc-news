import React, { Component } from "react";
import { Card, Spinner, Alert } from "react-bootstrap";
import { IoMdFootball } from "react-icons/io";
import { MdCode, MdHome } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import styles from "../../CSS/SingleArticle.module.css";
import DownVotes from "./DownVote";
import UpVotes from "./UpVotes";
import { Link } from "@reach/router";
import * as api from "../../api";

export default class SingleArticle extends Component {
  state = {
    errorLikesArticle: false,
    loadingArticle: false,
    inc_votes_article: 0,
    toggleLike: null
  };
  voteComment = (inc_votes, disable) => {
    const { inc_votes_article } = this.state;
    const { article_id } = this.props.article;
    console.log(inc_votes);
    this.setState({
      inc_votes_article: inc_votes_article + inc_votes,
      loadingArticle: true,
      toggleLike: disable
    });
    api
      .patchArticleById(article_id, inc_votes)
      .then(() => {
        this.setState({
          inc_votes_article: inc_votes_article + inc_votes,
          loadingArticle: false
        });
      })
      .catch(errorLikes => {
        this.setState({
          loadingArticle: false,
          errorLikesArticle: true
        });
      });
  };
  handingErrorLoading = () => {
    this.setState({ errorLikesArticle: false });
  };

  render() {
    const { article } = this.props;
    const {
      inc_votes_article,
      loadingArticle,
      toggleLike,
      errorLikesArticle
    } = this.state;
    return (
      <div className={styles.card}>
        <Card>
          <Card.Header className={styles.topic}>
            {" "}
            {article.topic === "football" ? (
              <IoMdFootball size={40} />
            ) : article.topic === "coding" ? (
              <MdCode size={40} />
            ) : (
              article.topic === "cooking" && <GiMeal size={40} />
            )}
          </Card.Header>
          <Card.Body>
            <Card.Title className={styles.title}>
              <strong>{article.title}</strong>
            </Card.Title>
            <Card.Text>{article.body}</Card.Text>
            <div className={styles.author}>
              <Card.Text>
                <strong>Author: </strong>
                {article.author}
              </Card.Text>
            </div>
            <div className={styles.info}>
              <Card.Text>
                <strong>Number of Comments: </strong>
                {article.comment_count}
              </Card.Text>
            </div>
            <div className={styles.info}>
              <Card.Text>
                <strong>Number of votes: </strong>
                {article.votes + inc_votes_article}
              </Card.Text>
            </div>
            <div className={styles.info}>
              <Card.Text>
                <strong>Date: </strong>
                {article.created_at}
              </Card.Text>
            </div>
            <div className={styles.loading}>
              {loadingArticle && <Spinner animation="border" />}
            </div>
          </Card.Body>
          <Card.Header className={styles.footer}>
            <div className={styles.like}>
              <UpVotes voteComment={this.voteComment} toggleLike={toggleLike} />
            </div>

            <div className={styles.home}>
              <Link to="/articles">{<MdHome size={30} />}</Link>
            </div>
            <div className={styles.dislike}>
              <DownVotes
                voteComment={this.voteComment}
                toggleLike={toggleLike}
              />{" "}
            </div>
          </Card.Header>
        </Card>
        <div className={styles.error}>
          {errorLikesArticle && (
            <Alert
              variant="danger"
              onClose={() => {
                this.handingErrorLoading();
              }}
              dismissible
            >
              <Alert.Heading>
                Error when updating information, please try again
              </Alert.Heading>
            </Alert>
          )}
        </div>
      </div>
    );
  }
}
