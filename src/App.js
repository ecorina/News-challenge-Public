import "./App.css";
import Header from "./Elements/Header/Header";
import Content from "./Elements/Content/Content";
import Footer from "./Elements/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Article from "./Elements/Content/Articles/Articles";
// import { useState, useEffect } from "react";
// import { GetApi } from "./util/GetApi";

function App() {
  // const [headline, setHeadline] = useState([]);
  // useEffect(() => {
  //   const getHeadline = async () => {
  //     const apiData = await GetApi();
  //     setHeadline(apiData);
  //   };
  //   getHeadline();
  //   console.log(headline);
  // }, [headline]);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/news/:id" element={<Article />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
