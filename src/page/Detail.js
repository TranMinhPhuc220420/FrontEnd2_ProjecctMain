import React from 'react';
import { Helmet } from 'react-helmet';

import PostController from "../controllers/post/PostController";

import "bootstrap/dist/css/bootstrap.css";
import "../public/css/Navbar.css";

let NAME_TITLE = 'Detail-post';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = { post_id: null ,  data : []};
  }

  async componentDidMount() {
    let postController = new PostController();
    this.setState({post_id: await this.props.match.params.post_id})
    this.setState({ data: await postController.getByID(this.state.post_id) });
  }

  render() {
    return (
      <div id="WEB_MAIN">
        {/* Set title */}
        <Helmet>
          <title>{this.state.data.TITLE}</title>
        </Helmet>

        <h1>Detail: {this.state.data.TITLE}</h1>
      </div>
    );
  }
}

export default Detail;
