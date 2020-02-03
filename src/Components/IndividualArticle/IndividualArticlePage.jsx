import React, { Component } from "react";
import * as api from "../../api";
import SingleArticle from "./SingleArticle";
import { Spinner } from "react-bootstrap";

export default class IndividualArticlePage extends Component {
  state = {
    article: [],
    isLoading: true
  };

  fetchArticleById = () => {
    const { id } = this.props;
    api.getArticleById(id).then(article => {
      this.setState({ article, isLoading: false });
    });
  };

  componentDidMount() {
    this.fetchArticleById();
  }

  render() {
    const { isLoading, article } = this.state;

    if (isLoading) {
      return (
        <div>
          <Spinner animation="grow" size="lg" />
        </div>
      );
    } else {
      return (
        <div>
          <SingleArticle article={article} />;
        </div>
      );
    }
  }
}
