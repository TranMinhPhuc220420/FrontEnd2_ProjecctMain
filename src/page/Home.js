import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

import Carousel from "../components/Carousel";
import ContentHome from "../components/ContentHome";

import "bootstrap/dist/css/bootstrap.css";
import "../public/css/Navbar.css";

import PostController from "../controllers/post/PostController";

let NAME_TITLE = 'Home';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      list_post_new: []
    };
  }

  async componentDidMount() {
    let post = new PostController();
    this.setState({items: await post.getAll()});

    // get 5 post new
    let list_post_new = [];
    for (let i = 0; i < 5; i++) {
      list_post_new.push(this.state.items[i]);
    }
    this.setState({list_post_new: list_post_new});
  }

  render() {
    return (
      <div id="WEB_MAIN">
        {/* Set title */}
        <Helmet>
          <title>{NAME_TITLE}</title>
        </Helmet>
        {this.state.list_post_new.length !== 0 && ( //Check data before render carousel
          <Carousel data={this.state.list_post_new}/>
        )}

        {this.state.items.length !== 0 && this.state.list_post_new.length !== 0 && (
          <ContentHome data={this.state.items} list_post_new={this.state.list_post_new}/>
        )}
      </div>
    );
  }
}

export default Home;
