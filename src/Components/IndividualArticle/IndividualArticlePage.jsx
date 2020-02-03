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
    comments: []
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

  componentDidMount() {
    this.fetchArticleById();
    this.fetchCommentsById();
  }

  render() {
    const { isLoading, isLoadingComment, article, comments } = this.state;

    if (isLoading && isLoadingComment) {
      return (
        <div>
          <Spinner animation="grow" size="lg" />
        </div>
      );
    } else {
      return (
        <div>
          <SingleArticle article={article} />;
          <Comments comments={comments} />
        </div>
      );
    }
  }
}
