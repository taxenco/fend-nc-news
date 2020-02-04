import axios from "axios";
const baseURL = "https://carlosbeltran-nc-news.herokuapp.com/api/articles";
export const getArticles = (order, sort_by) => {
  return axios
    .get(`${baseURL}`, {
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
    .get(`${baseURL}`, {
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
  return axios.get(`${baseURL}/articles${id}`).then(({ data }) => {
    return data.article;
  });
};
export const getCommentsById = id => {
  return axios.get(`${baseURL}/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchArticleById = (id, inc_votes) => {
  return axios
    .patch(`${baseURL}/${id}`, {
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

// export const deleteArticleById = id => {
//   return axios.delete(`${baseURL}/${id}`).then(({ response }) => {});
// };
