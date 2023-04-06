import React from "react";
import Today from "./Today/Today";
import "./Header.css";
export default function Header() {
  return (
    <div className="Header">
      <div className="Title">Breaking News !</div>
      <Today />
    </div>
  );
}
