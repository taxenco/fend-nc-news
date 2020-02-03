// import React, { Component } from "react";
// import * as api from "../../api";
// import ArticleList from "./ArticleList";
// export default class ArticlePage extends Component {
//   state = {
//     articles: [],
//     isLoading: true,
//     order: "asc",
//     sorted_by: "created_at"
//   };
//   fetchArticles = () => {
//     const { order, sorted_by } = this.state;
//     api.getArticles(order, sorted_by).then(articles => {
//       this.setState({ articles, isLoading: false });
//     });
//   };

//   componentDidMount() {
//     this.fetchArticles();
//   }

//   handlingOrder = order => {
//     this.setState({ order });
//   };
//   handlingSort = sorted_by => {
//     this.setState({ sorted_by });
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const { order, sorted_by } = this.state;
//     if (order !== prevState.order || sorted_by !== prevState.sorted_by) {
//       this.fetchArticles();
//     }
//   }
//   render() {
//     return <ArticleList />;
//   }
// }
