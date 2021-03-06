import React, { Component } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ArticlePage from "./Components/Articles/ArticlePage";
import TopicPage from "./Components/Topic/TopicPage";
import IndividualArticlePage from "./Components/IndividualArticle/IndividualArticlePage";
import Error from "./Components/Error/Error";
import Welcome from "./Components/Welcome/Welcome";
import styles from "./CSS/App.module.css";

import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  state = {
    author: "jessjelly"
  };
  changingUser = user => {
    this.setState({ author: user });
  };
  render() {
    const { author } = this.state;
    return (
      <body classNam={styles.app}>
        <NavBar changingUser={this.changingUser} user={this.state.author} />
        <Header />
        <Welcome author={author} />
        <Router>
          <ArticlePage path="/" />
          <ArticlePage path="/articles" />
          <TopicPage path="/articles/:topic" />
          <IndividualArticlePage path="/articles/article/:id" author={author} />
          <Error default error={{ status: "404", data: "Page not found" }} />
        </Router>
        <Footer />
      </body>
    );
  }
}
