import React from 'react';
import { Helmet } from 'react-helmet';

import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

import "bootstrap/dist/css/bootstrap.css";
import "../public/css/Navbar.css";

let NAME_TITLE = 'Home';

function Home() {
  return (
    <div id="WEB_MAIN">
      {/* Set title */}
      <Helmet>
        <title>{NAME_TITLE}</title>
      </Helmet>

      <Carousel />
      <Footer/>
    </div>
  );
}

export default Home;
