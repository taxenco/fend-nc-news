import React from "react";
import { Card } from "react-bootstrap";
import styles from "../../CSS/Footer.module.css";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { MdPerson } from "react-icons/md";

export default function Footer() {
  return (
    <Card>
      <Card.Body className={styles.footer}>
        <Card.Title className={styles.contact}>
          {" "}
          <strong>CONTACT</strong>{" "}
        </Card.Title>
        <Card.Title className={styles.about}>
          {" "}
          <strong>ABOUT</strong>{" "}
        </Card.Title>
        <Card.Title className={styles.projects}>
          {" "}
          <strong>PROJECTS</strong>{" "}
        </Card.Title>
        <Card.Text className={styles.email}>
          <a href="https://www.linkedin.com/in/carlos-beltran-761a3b88/">
            <AiFillLinkedin size={40} />
          </a>
        </Card.Text>
        <Card.Text className={styles.aboutIcon}>
          <a href="https://taxenco.github.io/carlos_beltran_profile/">
            <MdPerson size={40} />
          </a>
        </Card.Text>
        <Card.Text className={styles.emailIcon}>
          <a href="https://github.com/taxenco">
            <GoMarkGithub size={40} />
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
