import React, { Component } from "react";
import * as api from "../../api";
import OrderArticles from "./OrderArticles";
import SortArticles from "./SortArticles";
import ArticleList from "./ArticleList";
import Error from "../Error/Error";
import { Spinner } from "react-bootstrap";
import style from "../../CSS/ArticleList.module.css";

export default class ArticlePage extends Component {
  state = {
    articles: [],
    isLoading: true,
    order: "asc",
    sorted_by: "created_at",
    error: null
  };
  fetchArticles = () => {
    const { order, sorted_by } = this.state;
    api
      .getArticles(order, sorted_by)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(error => this.setState({ error: error.response }));
  };

  componentDidMount() {
    this.fetchArticles();
  }

  handlingOrder = order => {
    this.setState({ order });
  };
  handlingSort = sorted_by => {
    this.setState({ sorted_by });
  };

  componentDidUpdate(prevProps, prevState) {
    const { order, sorted_by } = this.state;
    if (order !== prevState.order || sorted_by !== prevState.sorted_by) {
      this.fetchArticles();
    }
  }
  render() {
    const { articles, isLoading, error } = this.state;
    if (error) {
    return  <Error
        error={{
          status: this.state.error.status,
          data: this.state.error.request.statusText
        }}
      />;
    } else if (isLoading) {
      return (
        <div className={style.spinnerList}>
          <Spinner animation="grow" size="lg" />
        </div>
      );
    } else {
      return (
        <div>
          <div className={style.frame}>
            <OrderArticles handlingOrder={this.handlingOrder} />

            <div>
              <SortArticles handlingSort={this.handlingSort} />
            </div>
          </div>
          <ArticleList articles={articles} />;
        </div>
      );
    }
  }
}
