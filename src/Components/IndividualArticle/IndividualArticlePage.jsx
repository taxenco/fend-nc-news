import React, { Component } from "react";
import * as api from "../../api";
import SingleArticle from "./SingleArticle";
import Comments from "./Comments";
import { Spinner } from "react-bootstrap";

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
    toggleDownLike: true
  };

  fetchArticleById = () => {
    const { id } = this.props;
    api.getArticleById(id).then(article => {
      this.setState({ article, isLoading: false });
    });
  };
  fetchCommentsById = () => {
    const { id } = this.props;
    api.getCommentsById(id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };

  upVote = () => {
    const { id } = this.props;
    const votes = 1;
    api.patchArticleById(id, votes).then(() => {
      this.setState(prevState => {
        return {
          inc_votes: prevState.inc_votes + 1,
          toggleUpVote: false
        };
      });
    });
  };

  downVote = () => {
    const { id } = this.props;
    const inc_votes = -1;
    api.patchArticleById(id, inc_votes).then(() => {
      this.setState(prevState => {
        return {
          inc_votes: prevState.inc_votes - 1,
          toggleDownVote: false
        };
      });
    });
  };

  upVoteComments = id => {
    const inc_votes = 1;
    api.patchCommentById(id, inc_votes).then(() => {
      this.setState(prevState => {
        return {
          inc_votes_comments: prevState.inc_votes_comments + 1,
          toggleUpLike: false
        };
      });
    });
  };

  downVoteComments = id => {
    const inc_votes = -1;
    api.patchCommentById(id, inc_votes).then(() => {
      this.setState(prevState => {
        return {
          inc_votes_comments: prevState.inc_votes_comments - 1,
          toggleDownLike: false
        };
      });
    });
  };

  componentDidMount() {
    this.fetchArticleById();
    this.fetchCommentsById();
  }

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
      toggleDownLike
    } = this.state;
    if (isLoading && isLoadingComment) {
      return (
        <div>
          <Spinner animation="grow" size="lg" />
        </div>
      );
    } else {
      return (
        <div>
          <SingleArticle
            article={article}
            upVote={this.upVote}
            downVote={this.downVote}
            inc_votes={inc_votes}
            toggleUpVote={toggleUpVote}
            toggleDownVote={toggleDownVote}
          />
          ;
          <Comments
            comments={comments}
            upVoteComments={this.upVoteComments}
            downVoteComments={this.downVoteComments}
            inc_votes_comments={inc_votes_comments}
            toggleUpLike={toggleUpLike}
            toggleDownLike={toggleDownLike}
          />
        </div>
      );
    }
  }
}
