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

