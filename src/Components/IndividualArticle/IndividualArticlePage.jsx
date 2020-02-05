import React, { Component } from "react";
import * as api from "../../api";
import SingleArticle from "./SingleArticle";
import Comments from "./Comments";
import PostComment from "./PostComment";
import { Spinner } from "react-bootstrap";
import Error from "../Error/Error";
export default class IndividualArticlePage extends Component {
  state = {
    article: [],
    isLoading: true,
    isLoadingComment: true,
    comments: [],
    inc_votes: 0,
    inc_votes_comments: 0,
    toggleUpVote: true,
    toggleDownVote: true,
    toggleUpLike: true,
    toggleDownLike: true,
    error: null,
    errorLikes: null,
    errorLoading: false
  };

  fetchArticleById = () => {
    const { id } = this.props;
    api
      .getArticleById(id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(error => this.setState({ error: error.response }));
  };
  fetchCommentsById = () => {
    const { id } = this.props;
    api
      .getCommentsById(id)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(error => this.setState({ error: error.response }));
  };

  upVote = () => {
    const { id } = this.props;
    const votes = 1;
    this.setState({ errorLoading: true });
    api
      .patchArticleById(id, votes)
      .then(() => {
        this.setState(prevState => {
          return {
            inc_votes: prevState.inc_votes + 1,
            toggleUpVote: false,
            errorLoading: false
          };
        });
      })
      .catch(errorLikes => {
        this.setState({ errorLikes: true, errorLoading: false });
      });
  };

  downVote = () => {
    const { id } = this.props;
    const inc_votes = -1;
    this.setState({ errorLoading: true });
    api
      .patchArticleById(id, inc_votes)
      .then(() => {
        this.setState(prevState => {
          return {
            inc_votes: prevState.inc_votes - 1,
            toggleDownVote: false,
            errorLoading: true
          };
        });
      })
      .catch(errorLikes => {
        this.setState({ errorLikes: true, errorLoading: false });
      });
  };

  upVoteComments = id => {
    const inc_votes = 1;
    this.setState({ errorLoading: true });
    api
      .patchCommentById(id, inc_votes)
      .then(() => {
        this.setState(prevState => {
          return {
            inc_votes_comments: prevState.inc_votes_comments + 1,
            toggleUpLike: false,
            errorLoading: false
          };
        });
      })
      .catch(errorLikes => {
        this.setState({
          errorLikes: true,
          errorLoading: false,
          errorLoading: false
        });
      });
  };

  downVoteComments = id => {
    const inc_votes = -1;
    this.setState({ errorLoading: true });
    api
      .patchCommentById(id, inc_votes)
      .then(() => {
        this.setState(prevState => {
          return {
            inc_votes_comments: prevState.inc_votes_comments - 1,
            toggleDownLike: false
          };
        });
      })
      .catch(errorLikes => {
        this.setState({ errorLikes: true, errorLoading: false });
      });
  };

  removeComment = id => {
    const { comments } = this.state;
    api.deleteCommentById(id);
    const newComments = comments.filter(comment => comment.comment_id !== id);
    this.setState({ comments: newComments });
  };
  addComment = (user, body) => {
    const { article_id } = this.state.article;
    const { comments } = this.state;
    api.postComment(article_id, { user, body }).then(comment => {
      this.setState({ comments: [comment, ...comments] });
    });
  };

  componentDidMount() {
    //
    this.fetchArticleById();
    this.fetchCommentsById();
  }
  handingErrorLoading = () => {
    this.setState({ errorLikes: false });
  };
  render() {
    const {
      isLoading,
      isLoadingComment,
      article,
      comments,
      inc_votes,
      inc_votes_comments,
      toggleUpVote,
      toggleDownVote,
      toggleUpLike,
      toggleDownLike,
      error,
      errorLikes,
      errorLoading
    } = this.state;
    if (error) {
      return (
        <Error
          error={{
            status: this.state.error.status,
            data: this.state.error.request.statusText
          }}
        />
      );
    } else if (isLoading && isLoadingComment) {
      return (
        <div>
          <Spinner animation="grow" size="lg" />
        </div>
      );
    } else {
      return (
        <div className="article-page-container">
          {console.log(errorLikes)}
          <SingleArticle
            article={article}
            upVote={this.upVote}
            downVote={this.downVote}
            inc_votes={inc_votes}
            toggleUpVote={toggleUpVote}
            toggleDownVote={toggleDownVote}
            errorLikes={errorLikes}
            errorLoading={errorLoading}
            handingErrorLoading={this.handingErrorLoading}
          />
          <PostComment addComment={this.addComment} />
          <Comments
            comments={comments}
            upVoteComments={this.upVoteComments}
            downVoteComments={this.downVoteComments}
            inc_votes_comments={inc_votes_comments}
            toggleUpLike={toggleUpLike}
            toggleDownLike={toggleDownLike}
            removeComment={this.removeComment}
            errorLikes={errorLikes}
            errorLoading={errorLoading}
            handingErrorLoading={this.handingErrorLoading}
          />
        </div>
      );
    }
  }
}
