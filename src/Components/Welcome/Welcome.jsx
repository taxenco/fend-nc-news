import React from "react";
import styles from "../../CSS/Welcome.module.css";
import { Alert } from "react-bootstrap";
import { MdPerson } from "react-icons/md";
export default function Welcome({ author }) {
  return (
    <section className={styles.welcome}>
      <Alert variant="success">
        {<MdPerson />} {author}
      </Alert>{" "}
    </section>
  );
}
