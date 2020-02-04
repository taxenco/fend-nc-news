import React from "react";
import { Card } from "react-bootstrap";
import { IoMdFootball } from "react-icons/io";
import { MdCode, MdHome } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import styles from "../../CSS/SingleArticle.module.css";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { Link } from "@reach/router";
export default function SingleArticle({
  article,
  upVote,
  downVote,
  inc_votes,
  toggleUpVote,
  toggleDownVote
}) {
  return (
    <div className={styles.card}>
      <Card>
        <Card.Header className={styles.topic}>
          {" "}
          {article.topic === "football" ? (
            <IoMdFootball size={40} />
          ) : article.topic === "coding" ? (
            <MdCode size={40} />
          ) : (
            article.topic === "cooking" && <GiMeal size={40} />
          )}
        </Card.Header>
        <Card.Body>
          <Card.Title className={styles.title}>
            <strong>{article.title}</strong>
          </Card.Title>
          <Card.Text>{article.body}</Card.Text>
          <div className={styles.author}>
            <Card.Text>
              <strong>Author: </strong>
              {article.author}
            </Card.Text>
          </div>
          <div className={styles.info}>
            <Card.Text>
              <strong>Number of Comments: </strong>
              {article.comment_count}
            </Card.Text>
          </div>
          <div className={styles.info}>
            <Card.Text>
              <strong>Number of votes: </strong>
              {article.votes + inc_votes}
            </Card.Text>
          </div>
          <div className={styles.info}>
            <Card.Text>
              <strong>Date: </strong>
              {article.created_at}
            </Card.Text>
          </div>
        </Card.Body>
        <Card.Header className={styles.footer}>
          <div className={styles.like}>
            {toggleUpVote ? (
              <FaRegThumbsUp
                size={30}
                onClick={() => {
                  upVote();
                }}
              />
            ) : (
              <FaRegThumbsUp size={30} />
            )}
          </div>

          <div className={styles.home}>
            <Link to="/articles">{<MdHome size={30} />}</Link>
          </div>
          <div className={styles.dislike}>
            {toggleDownVote ? (
              <FaRegThumbsDown
                size={30}
                onClick={() => {
                  downVote();
                }}
              />
            ) : (
              <FaRegThumbsDown size={30} />
            )}
          </div>
        </Card.Header>
      </Card>
    </div>
  );
}
