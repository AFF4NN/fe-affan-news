import React from 'react';


const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <img src={article.article_img_url} alt={article.title} />
      <h2>{article.title}</h2>
      <p>By {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Votes: {article.votes}</p>
      <p>{new Date(article.created_at).toLocaleDateString()}</p>
    </div>
  );
};

export default ArticleCard;
