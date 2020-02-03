import React from "react";
import { Button } from "react-bootstrap";
import style from "../../CSS/ArticleList.module.css";

export default function OrderArticles({ handlingOrder }) {
  return (
    <div className={style.SortButtons}>
      <Button
        variant="outline-dark"
        id="asc"
        onClick={event => {
          handlingOrder(event.target.id);
        }}
      >
        Ascending{" "}
      </Button>
      <Button
        variant="outline-dark"
        id="desc"
        onClick={event => {
          handlingOrder(event.target.id);
        }}
      >
        Descending
      </Button>
    </div>
  );
}
