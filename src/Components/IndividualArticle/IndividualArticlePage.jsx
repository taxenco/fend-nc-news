import React, { Component } from "react";
import * as api from "../../api";
import SingleArticle from "./SingleArticle";
import Comments from "./Comments";
import { Spinner } from "react-bootstrap";

export default class IndividualArticlePage extends Component {
  state = {
    article: [],
    isLoading: true,
    isLoadingComment: true,
    comments: [],
    inc_votes: 0
  };

  fetchArticleById = () => {
    const { id } = this.props;
    api.getArticleById(id).then(article => {
      this.setState({ article, isLoading: false });
    });
  };
  fetchCommentsById = () => {
    const { id } = this.props;
    api.getCommentsById(id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };

  upVote = () => {
    const { id } = this.props;
    const inc_votes = 1;
    api.patchCommentById(id, inc_votes).then(() => {
      this.setState(prevState => {
        return {
          inc_votes: prevState.inc_votes + 1
        };
      });
    });
  };

  downVote = () => {
    const { id } = this.props;
    const inc_votes = -1;
    api.patchCommentById(id, inc_votes).then(() => {
      this.setState(prevState => {
        return {
          inc_votes: prevState.inc_votes - 1
        };
      });
    });
  };

  componentDidMount() {
    this.fetchArticleById();
    this.fetchCommentsById();
  }

  render() {
    const {
      isLoading,
      isLoadingComment,
      article,
      comments,
      inc_votes
    } = this.state;

    if (isLoading && isLoadingComment) {
      return (
        <div>
          <Spinner animation="grow" size="lg" />
        </div>
      );
    } else {
      return (
        <div>
          <SingleArticle
            article={article}
            upVote={this.upVote}
            downVote={this.downVote}
            inc_votes={inc_votes}
          />
          ;
          <Comments comments={comments} />
        </div>
      );
    }
  }
}
