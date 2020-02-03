import React from "react";
import ArticleCard from "./ArticleCard";
import styles from "../../CSS/Card.module.css";

export default function ArticleList({ articles }) {
  return (
    <div>
      <ul className={styles.card}>
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </ul>
      ;
    </div>
  );
}
