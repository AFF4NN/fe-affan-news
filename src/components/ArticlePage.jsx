import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { fetchArticleById } from "../api";

const ArticlePage = () => {
    const {article_id} = useParams();
    const [article, setArticle] =useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchArticleById(article_id)
        .then((fetchedArticle) => {
            setArticle(fetchedArticle);
            setIsLoading(false)
        })
        .catch((err) => {
            setError(err);
            setIsLoading(false);
        })
    }), []

    if (isLoading) return <p>Loading Article</p>
    if (error) return <p>Something went wrong: {error.message}</p>

    return (
        <div className="article-page">
            {article && (
                <>
                <img src={article.article_img_url} alt={article.title} />
                <h2>{article.title}</h2>
                <p>Author: {article.author}</p>
                <p>Published: {article.created_at}</p>
                <p>{article.body}</p>
                </>
            )}



        </div>
    )

}


export default ArticlePage;