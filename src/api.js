import axios from 'axios';

const api = axios.create({
  baseURL: 'https://affans-backend-project.onrender.com/api',
});

export const fetchArticles = () => {
  return api.get('/articles')
    .then(response => {
      return response.data.articles;
    })
    .catch(error => {
      console.error('Error fetching articles:', error);
      throw error;
    });
};

export const fetchArticleById = (article_id) => {
    return api.get(`/articles/${article_id}`)
    .then(response => {
        return response.data.article;
    })
    .catch(error => {
        console.error('Error fetching article with ID ${artcileId}:', error);
        throw error
    })
}