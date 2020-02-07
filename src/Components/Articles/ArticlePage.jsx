import React, { Component } from "react";
import * as api from "../../api";
import OrderArticles from "./OrderArticles";
import SortArticles from "./SortArticles";
import ArticleList from "./ArticleList";
import Error from "../Error/Error";
import { Spinner } from "react-bootstrap";
import style from "../../CSS/ArticleList.module.css";
import ShowPages from "../Pagination/ShowPages";

export default class ArticlePage extends Component {
  state = {
    articles: [],
    isLoading: true,
    order: "asc",
    sorted_by: "created_at",
    error: null,
    article_count: 0,
    page: 1
  };
  fetchArticles = () => {
    console.log("bite");
    const { order, sorted_by, page } = this.state;
    api
      .getArticles(order, sorted_by, page)
      .then(data => {
        console.log(page);
        const articles = data.articles;
        const article_count = data.total_count;
        this.setState({
          articles,
          article_count: article_count,
          isLoading: false
        });
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
  handlingPage = page => {
    this.setState({ page });
  };

  componentDidUpdate(prevProps, prevState) {
    const { order, sorted_by, page } = this.state;
    if (
      order !== prevState.order ||
      sorted_by !== prevState.sorted_by ||
      page !== prevState.page
    ) {
      this.fetchArticles();
    }
  }
  render() {
    const { articles, isLoading, error, article_count, page } = this.state;
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
          <ArticleList articles={articles} />
          <div className={style.page}>
            <p>Page {page}</p>
          </div>
          <ShowPages
            article_count={article_count}
            page={page}
            handlingPage={this.handlingPage}
          />
        </div>
      );
    }
  }
}
