import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ArticlePage from "./Components/Articles/ArticlePage";
import TopicPage from "./Components/Topic/TopicPage";
import IndividualArticlePage from "./Components/IndividualArticle/IndividualArticlePage";

import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <main>
      <NavBar />
      <Header />
      <Router>
        <ArticlePage path="/articles" />
        <TopicPage path="/articles/:topic" />
        <IndividualArticlePage path="/articles/article/:id" />
        <ArticlePage default />
      </Router>
      <Footer />
    </main>
  );
}

export default App;
