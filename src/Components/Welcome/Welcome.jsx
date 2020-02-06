import React from "react";
import styles from "../../CSS/Welcome.module.css";

export default function Welcome({ author }) {
  return (
    <section className={styles.welcome}>
      <p >Logged in as {author} </p>
    </section>
  );
}
