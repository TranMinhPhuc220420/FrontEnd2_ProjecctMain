import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import PostNormal from "./components/PostNormal";
import PostBasic from "./components/PostBasic";
import PostList from "./components/PostList";
import PostNormalItem from "./components/PostNormalItem";
import CommentPanel from "./components/CommentPanel";
import PostBig from "./components/PostBig";
import PostLargeLeft from "./components/PostLargeLeft";
import PostLargeRight from "./components/PostLargeRight";



import "bootstrap/dist/css/bootstrap.css";
import "./public/css/Navbar.css";
import './public/css/Content.css';
import './public/css/Comment.css';
import './public/css/PostBasic.css';
import './public/css/PostSmall.css';
import './public/css/PostList.css';
import './public/css/PostNormal.css';
import './public/css/Post.css';

import img from './public/images/hinh01-1.jpg';


ReactDOM.render(
  <React.StrictMode>
      <Navbar />
      <Carousel />
  </React.StrictMode>,
  document.getElementById("header")
);

// ReactDOM.render(
//   <React.StrictMode>
//       <Footer/>
//   </React.StrictMode>,
//   document.getElementById("footer")
// );
//PostNormal row 1
ReactDOM.render(
  <React.StrictMode>
      <PostNormal/>
  </React.StrictMode>,
  document.getElementById("postNormal")
);

//PostBig row 2
ReactDOM.render(
  <React.StrictMode>
      <PostBig/>
  </React.StrictMode>,
  document.getElementById("postBig")
);

//PostList row 2
ReactDOM.render(
  <React.StrictMode>
      <PostList/>
  </React.StrictMode>,
  document.getElementById("postList")
);

//Row 3 PostLargeRight
ReactDOM.render(
  <React.StrictMode>
      <PostLargeRight/>
  </React.StrictMode>,
  document.getElementById("postLargeRight")
);

//PostNormalItem row 4
//Data
let post = {
  imgPost: img,
  titlePost: 'Title Post 4',
  contentPost: 'Lorem ipsum dolor sit amet, consectetur adip porttitor',
  datePost: '03-09-2020'
};
//PostNormalItem
ReactDOM.render(
  <React.StrictMode>
      <PostNormalItem dataPost={post}/>
  </React.StrictMode>,
  document.getElementById("postNormalItem")
);

//PostBasic row 4
ReactDOM.render(
  <React.StrictMode>
      <PostBasic/>
  </React.StrictMode>,
  document.getElementById("postBasic")
);

//PostList row 4
ReactDOM.render(
  <React.StrictMode>
      <PostList/>
  </React.StrictMode>,
  document.getElementById("postList2")
);

//Row 5 PostLargeLeft
ReactDOM.render(
  <React.StrictMode>
      <PostLargeLeft/>
  </React.StrictMode>,
  document.getElementById("postLargeLeft")
);
