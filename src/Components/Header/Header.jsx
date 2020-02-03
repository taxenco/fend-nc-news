import React from "react";
import { Image } from "react-bootstrap";
import ncNew from "../../IMG/ncNew.png";
import styles from "../../CSS/Header.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <Image src={ncNew} alt="NC-news header" fluid />;
    </div>
  );
}
