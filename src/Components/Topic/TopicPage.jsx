import React, { Component } from "react";
import * as api from "../../api";
import OrderArticles from "../Articles/OrderArticles";
import SortArticles from "../Articles/SortArticles";
import ArticleList from "../Articles/ArticleList";
import ShowPages from "../Pagination/ShowPages";
import Error from "../Error/Error";
import style from "../../CSS/ArticleList.module.css";
import { Spinner } from "react-bootstrap";

export default class TopicPage extends Component {
  state = {
    articles: [],
    isLoading: true,
    order: "asc",
    sorted_by: "created_at",
    error: null,
    page: 1,
    article_count: 0
  };
  fetchArticle = () => {
    const { order, sorted_by, page } = this.state;
    const { topic } = this.props;
    api
      .getArticleByTopic(topic, order, sorted_by, page)
      .then(data => {
        const articles = data.articles;
        const article_count = data.total_count;
        this.setState({
          articles: articles,
          article_count: article_count,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error: error.response }));
  };

  componentDidMount() {
    this.fetchArticle();
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
      this.fetchArticle();
    }
  }
  render() {
    const { articles, isLoading, error, page, article_count } = this.state;
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
          <ArticleList articles={articles} />;
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
