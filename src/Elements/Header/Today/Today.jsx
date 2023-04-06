import React, { useState, useEffect } from "react";
import "./Today.css";

export default function Today() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString();

  return (
    <header className="Today">
      <p>
        <em>
          {formattedDate} {formattedTime}
        </em>
      </p>
    </header>
  );
}
