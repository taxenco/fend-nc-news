import React from "react";
import errorGif from "../../IMG/errorGif.gif";
import styles from "../../CSS/Error.module.css";
import { FaHome } from "react-icons/fa";
import { Link } from "@reach/router";

export default function Error({ error }) {
  return (
    <div className={styles.error}>
      <img src={errorGif} alt="error" className={styles.picture} />
      <h4 className={styles.message}>
        {error.status} : {error.data}
      </h4>
      <Link to={"/articles"}>
        <FaHome size={40} className={styles.home} />
      </Link>
      ;{" "}
    </div>
  );
}
