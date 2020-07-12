import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.css";
import "./public/css/Navbar.css";


ReactDOM.render(
  <React.StrictMode>
      <Navbar />
      <Carousel />
  </React.StrictMode>,
  document.getElementById("header")
);

ReactDOM.render(
  <React.StrictMode>
      <Footer/>
  </React.StrictMode>,
  document.getElementById("footer")
);