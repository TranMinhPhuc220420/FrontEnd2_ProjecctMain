import React from 'react';
import { Helmet } from 'react-helmet';

import "bootstrap/dist/css/bootstrap.css";
import "../public/css/Navbar.css";

let NAME_TITLE = 'SearchByTitle-post';

function SearchByTitle() {
  return (
    <div id="WEB_MAIN">
      {/* Set title */}
      <Helmet>
        <title>{NAME_TITLE}</title>
      </Helmet>

      <h1>Search Post</h1>
    </div>
  );
}

export default SearchByTitle;
