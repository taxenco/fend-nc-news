import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ArticlePage from "./Components/Articles/ArticlePage";
import TopicPage from "./Components/Topic/TopicPage";
import IndividualArticlePage from "./Components/IndividualArticle/IndividualArticlePage";
import Error from "./Components/Error/Error";

import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <main>
      <NavBar />
      <Header />
      <Router>
        <ArticlePage path="/" />
        <ArticlePage path="/articles" />
        <TopicPage path="/articles/:topic" />
        <IndividualArticlePage path="/articles/article/:id" />
        <Error default error={{ status: "404", data: "Page not found" }} />
      </Router>
      <Footer />
    </main>
  );
}

export default App;
