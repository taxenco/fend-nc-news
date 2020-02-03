import React, { Component } from "react";
import * as api from "../../api";
import ArticleCard from "./ArticleCard";
import OrderArticles from "./OrderArticles";
import SortArticles from "./SortArticles";
import styles from "../../CSS/Card.module.css";
import { Spinner } from "react-bootstrap";
import style from "../../CSS/ArticleList.module.css";

export default class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    order: "asc",
    sorted_by: "created_at"
  };
  fetchArticles = () => {
    const { order, sorted_by } = this.state;
    api.getArticles(order, sorted_by).then(articles => {
      this.setState({ articles, isLoading: false });
    });
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
    const { articles, isLoading } = this.state;
    if (isLoading) {
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
          <ul className={styles.card}>
            {articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </ul>
          ;
        </div>
      );
    }
  }
}
