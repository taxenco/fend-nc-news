import React, { Component } from "react";
import { Pagination } from "react-bootstrap";
import style from "../../CSS/ShowPages.module.css";
import * as api from "../../api";
export default class ShowPages extends Component {
  state={
    page=1
  }
  render() {

    return (
      <div className={style.pages}>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    );
  }
}
