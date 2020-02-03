import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ArticleList from "./Components/Articles/ArticleList";
import IndividualArticles from "./Components/Articles/IndividualArticles";
import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <main>
      <NavBar />
      <Header />
      <Router>
        <ArticleList path="/articles" />
        <IndividualArticles path="/articles/:id" />
        {/* <TopicsArticle path="/articles/:topic" /> */}
        <ArticleList default />
      </Router>
      <Footer />
    </main>
  );
}

export default App;
