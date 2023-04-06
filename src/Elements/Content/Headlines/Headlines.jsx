import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Headlines.css";
import HeadlineItem from "./HeadlineItem";

export default function Headlines() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const params = {
      q: "news",
      "show-fields": "all",
      "order-by": "newest",
      "api-key": "3076f285-1c53-44a2-912a-10878f5ea096",
    };

    axios
      .get(`https://content.guardianapis.com/search`, {
        params,
      })
      .then((res) => {
        const data = res.data.response.results.slice(0, 10);
        console.log(data);
        setNews(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="TheGuardian">
      <ul>
        {news.map((item, idx) => (
          <HeadlineItem key={idx} item={item} />
        ))}
      </ul>
    </div>
  );
}
