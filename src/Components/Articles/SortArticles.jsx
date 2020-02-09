import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import style from "../../CSS/ArticleList.module.css";

export default function SortArticles({ handlingSort }) {
  return (
    <div className={style.SortButtons}>
      <DropdownButton id="dropdown-basic-button" title="Sorting" drop="bottom">
        <Dropdown.Item
          id="created_at"
          onClick={event => {
            handlingSort(event.target.id);
          }}
        >
          Date
        </Dropdown.Item>
        <Dropdown.Item
          id="comment_count"
          onClick={event => {
            handlingSort(event.target.id);
          }}
        >
          Number of comments
        </Dropdown.Item>
        <Dropdown.Item
          id="votes"
          onClick={event => {
            handlingSort(event.target.id);
          }}
        >
          Votes
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
