import React from "react";
import giphy from "../../IMG/giphy.gif";
import styles from "../../CSS/Error.module.css";
import { FaHome } from "react-icons/fa";
import { Link } from "@reach/router";

export default function Error({ msg }) {
  return (
    <div className={styles.error}>
      <img src={giphy} alt="error" className={styles.picture} />
      <h4 className={styles.message}>
        {msg} :{window.location.href} not found
      </h4>
      <Link to={`/articles`}>
        <FaHome size={40} className={styles.home} href={"/articles"} />
      </Link>
      ;{" "}
    </div>
  );
}
