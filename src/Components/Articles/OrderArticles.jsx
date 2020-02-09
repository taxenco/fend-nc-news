import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import style from "../../CSS/ArticleList.module.css";

export default function OrderArticles({ handlingOrder }) {
  return (
    <div className={style.SortButtons}>
      <DropdownButton id="dropdown-basic-button" title="Ordering">
        <Dropdown.Item
          id="asc"
          onClick={event => {
            handlingOrder(event.target.id);
          }}
        >
          Ascending
        </Dropdown.Item>
        <Dropdown.Item
          id="desc"
          onClick={event => {
            handlingOrder(event.target.id);
          }}
        >
          Descending
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
