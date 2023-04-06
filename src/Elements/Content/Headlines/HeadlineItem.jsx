import React from "react";
import { Link } from "react-router-dom";
import "./Headlines.css";
// import { useState } from 'react';

export default function HeadlineItem({ item }) {
  //   const [expanded, setExpanded] = useState(false);

  const slugify = (str) => {
    return str.replace(/\//g, "~");
  };

  return (
    <div className="HeadlineItem">
      {/* <li onClick={() => setExpanded((state) => (state = !state))}> */}
      <Link to={`/news/${slugify(item.id)}`} style={{ textDecoration: "none" }}>
        <img src={item.fields.thumbnail} alt={item.webTitle} />
        <h2>{item.webTitle}</h2>
      </Link>
      {/* <p>{item.fields.trailText}</p> */}
      {/* </li> */}
      {/* {expanded ? (
        <div>
          <span>{item.fields.trailText}</span>
          <p>{item.fields.bodyText}</p>
        </div>
      ) : null} */}
    </div>
  );
}
