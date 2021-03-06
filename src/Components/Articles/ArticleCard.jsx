import React from "react";
import { Card } from "react-bootstrap";
import styles from "../../CSS/Card.module.css";
import { IoMdFootball } from "react-icons/io";
import { MdCode } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { GoEye } from "react-icons/go";
import { Link } from "@reach/router";
const DATE_OPTIONS = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
};
export default function ArticleCard({ article }) {
  return (
    <div>
      <ol className={styles.card1}>
        <Card bg="light" style={{ width: "13rem", }}>
          <Card.Header className={styles.header}>
            <strong>
              {article.topic === "football" ? (
                <IoMdFootball size={40} />
              ) : article.topic === "coding" ? (
                <MdCode size={40} />
              ) : (
                article.topic === "cooking" && <GiMeal size={40} />
              )}
            </strong>
          </Card.Header>
          <Card.Body className={styles.body}>
            <Card.Title>
              <strong>{article.title}</strong>
            </Card.Title>
          </Card.Body>
          <div className={styles.text}>
            <Card.Text>
              {" "}
              <strong>Comments:</strong> {article.comment_count}
            </Card.Text>
            <Card.Text>
              {" "}
              <strong>Votes:</strong> {article.votes}
            </Card.Text>
            <Card.Text>
              {" "}
              <strong>Date:</strong>
              {new Date(article.created_at).toLocaleDateString(
                "en-US",
                DATE_OPTIONS
              )}
            </Card.Text>
          </div>
          <div className={styles.button}>
            <Link to={`/articles/article/${article.article_id}`}>
              <GoEye size={30} />
            </Link>
          </div>
        </Card>
      </ol>
    </div>
  );
}
