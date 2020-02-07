import React, { Component } from "react";
import { Pagination } from "react-bootstrap";
import style from "../../CSS/Pagination.module.css";

export default class ShowPages extends Component {
  state = {
    limit: 10
  };

  render() {
    const { article_count, handlingPage, page } = this.props;
    const { limit } = this.state;

    return (
      <Pagination className={style.pagination}>
        <Pagination.First
          onClick={() => {
            handlingPage(Math.ceil(1));
          }}
        />
        <Pagination.Prev
          //   disabled={disableDown}
          onClick={() => {
            if (page > 1) {
              handlingPage(page - 1);
            }
          }}
        />
        <Pagination.Item
          onClick={() => {
            handlingPage(Math.ceil(1));
          }}
        >
          {1}
        </Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item
          onClick={() => {
            handlingPage(Math.ceil(article_count / limit));
          }}
        >
          {Math.ceil(article_count / limit)}
        </Pagination.Item>
        <Pagination.Next
          onClick={() => {
            if (page < Math.ceil(article_count / limit)) {
              handlingPage(page + 1);
            }
          }}
        />
        <Pagination.Last
          onClick={() => {
            handlingPage(Math.ceil(article_count / limit));
          }}
        />
      </Pagination>
    );
  }
}
