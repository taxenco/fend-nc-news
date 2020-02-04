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
  return axios.get(`${baseURL}/${id}`).then(({ data }) => {
    return data.article;
  });
};
export const getCommentsById = id => {
  return axios.get(`${baseURL}/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchCommentById = (id, inc_votes) => {
  console.log(id, inc_votes);
  return axios
    .patch(`${baseURL}/${id}`, {
      inc_votes: inc_votes
    })
    .then(({ data }) => {
      console.log(data);
      return data.article;
    });
};

// export const deleteArticleById = id => {
//   return axios.delete(`${baseURL}/${id}`).then(({ response }) => {});
// };
