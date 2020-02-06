import React, { Component } from "react";
import * as api from "../../api";
import SingleArticle from "./SingleArticle";
import Comments from "./Comments";
import PostComment from "./PostComment";
import { Spinner } from "react-bootstrap";
import Error from "../Error/Error";
export default class IndividualArticlePage extends Component {
  state = {
    article: [],
    isLoading: true,
    comments: [],
    error: null
  };

  fetchArticleById = () => {
    const { id } = this.props;
    api
      .getArticleById(id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(error => this.setState({ error: error.response }));
  };
  fetchCommentsById = () => {
    const { id } = this.props;
    api
      .getCommentsById(id)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(error => this.setState({ error: error.response }));
  };

  removeComment = id => {
    const { comments } = this.state;
    api
      .deleteCommentById(id)
      .then(() => {
        const newComments = comments.filter(
          comment => comment.comment_id !== id
        );
        this.setState({ comments: newComments });
      })
      .catch(error => this.setState({ error: error.response }));
  };
  addComment = (user, body) => {
    const { article_id } = this.state.article;
    const { comments } = this.state;
    api
      .postComment(article_id, { user, body })
      .then(comment => {
        this.setState({ comments: [comment, ...comments] });
      })
      .catch(error => this.setState({ error: error.response }));
  };

  componentDidMount() {
    //
    this.fetchArticleById();
    this.fetchCommentsById();
  }
  handingErrorLoading = () => {
    this.setState({ errorLikes: false });
  };
  render() {
    const { isLoading, article, comments, error } = this.state;
    if (error) {
      return (
        <Error
          error={{
            status: this.state.error.status,
            data: this.state.error.request.statusText
          }}
        />
      );
    } else if (isLoading) {
      return (
        <div>
          <Spinner animation="grow" size="lg" />
        </div>
      );
    } else {
      return (
        <div className="article-page-container">
          <SingleArticle article={article} />
          <PostComment addComment={this.addComment} />
          <Comments comments={comments} removeComment={this.removeComment} />
        </div>
      );
    }
  }
}
