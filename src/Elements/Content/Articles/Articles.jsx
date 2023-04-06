import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Article() {
  const [article, setArticle] = useState({});
  const { id } = useParams();

  const slugify = (str) => {
    return str.replace(/~/g, "/");
  };

  useEffect(() => {
    axios
      .get(
        `https://content.guardianapis.com/${slugify(
          id
        )}?api-key=3076f285-1c53-44a2-912a-10878f5ea096&show-fields=all`
      )
      .then((response) => {
        console.log(response.data.response.content);
        setArticle(response.data.response.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="article-container">
      <div className="linkTitle">
        <Link to={article.webUrl} target="_blank">
          <h1>{article.webTitle}</h1>
        </Link>
      </div>

      <p>{article?.fields?.bodyText?.substring(0, 2000)}...</p>
    </div>
  );
}

export default Article;
