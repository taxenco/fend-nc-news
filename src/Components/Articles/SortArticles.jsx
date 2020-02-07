import React from "react";
import { Button } from "react-bootstrap";
import style from "../../CSS/ArticleList.module.css";

export default function SortArticles({ handlingSort }) {
  return (
    <div className={style.SortButtons}>
      <Button
        variant="outline-dark"
        id="created_at"
        onClick={event => {
          handlingSort(event.target.id);
        }}
      >
        Date{" "}
      </Button>
      <Button
        variant="outline-dark"
        id="comment_count"
        onClick={event => {
          handlingSort(event.target.id);
        }}
      >
        Number of comments
      </Button>
      <Button
        variant="outline-dark"
        id="votes"
        onClick={event => {
          handlingSort(event.target.id);
        }}
      >
        Votes
      </Button>{" "}
    </div>
  );
}
