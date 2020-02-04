import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../../CSS/PostComment.module.css";

export default class PostComment extends Component {
  state = {};
  render() {
    return (
      <div className={styles.form}>
        <Form>
          <Form.Label className={styles.textarea}>POST A COMMENT</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            columns="100"
            required
            placeholder="Share your opinion...."
          />
          <div className={styles.button}>
            <Button>Post</Button>
          </div>
        </Form>
      </div>
    );
  }
}
