import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../../CSS/PostComment.module.css";

export default class PostComment extends Component {
  state = {
    comment: ""
  };
  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { comment } = this.state;
    const user = "jessjelly";
    this.props.addComment(user, comment);
    this.setState({ comment: "" });
  };
  render() {
    return (
      <div className={styles.form}>
        <form onSubmit={this.handleSubmit}>
          <Form.Label className={styles.textarea}>POST A COMMENT</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            columns="100"
            required
            placeholder="Share your opinion...."
            onChange={this.handleChange}
          />
          <div className={styles.button}>
            <Button type="submit">Post</Button>
          </div>
        </form>
      </div>
    );
  }
}
