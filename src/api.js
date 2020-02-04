import axios from "axios";
const baseURL = "https://carlosbeltran-nc-news.herokuapp.com/api";
export const getArticles = (order, sort_by) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: {
        order: order,
        sort_by: sort_by
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleByTopic = (topic, order, sort_by) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: {
        topic: topic,
        order: order,
        sort_by: sort_by
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = id => {
  return axios.get(`${baseURL}/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};
export const getCommentsById = id => {
  return axios.get(`${baseURL}/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchArticleById = (id, inc_votes) => {
  return axios
    .patch(`${baseURL}/articles/${id}`, {
      inc_votes: inc_votes
    })
    .then(({ data }) => {
      return data.article;
    });
};
export const patchCommentById = (id, inc_votes) => {
  return axios
    .patch(`${baseURL}/comments/${id}`, {
      inc_votes: inc_votes
    })
    .then(({ data }) => {
      return data.article;
    });
};

export const deleteCommentById = id => {
  return axios.delete(`${baseURL}/comments/${id}`).then(({ response }) => {});
};

export const postComment = (article_id, { user, body }) => {
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, {
      username: user,
      body: body
    })
    .then(({ data }) => {
      console.log(data);
    });
};
