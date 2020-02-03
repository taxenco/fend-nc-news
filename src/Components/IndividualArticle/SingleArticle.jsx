import React from "react";
import { Card } from "react-bootstrap";
import { IoMdFootball } from "react-icons/io";
import { MdCode } from "react-icons/md";
import { GiMeal } from "react-icons/gi";

export default function SingleArticle({ article }) {
  return (
    <Card>
      <Card.Header>
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
        <Card.Title>
          <strong>{article.title}</strong>
        </Card.Title>
        <Card.Text>{article.body}</Card.Text>
        <Card.Text>
          <strong>Number of Comments:</strong>
          {article.comment_count}
        </Card.Text>
        <Card.Text>
          <strong>Date:</strong>
          {article.created_at}
        </Card.Text>
        <Card.Text>
          <strong>Number of votes:</strong>
          {article.votes}
        </Card.Text>
      </Card.Body>
      <Card.Header>Featured</Card.Header>
    </Card>
  );
}
