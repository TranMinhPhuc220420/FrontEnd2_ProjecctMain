import React from 'react';
import {Helmet} from 'react-helmet';

import PostController from "../controllers/post/PostController";

//Components
import PostNormalItem from "../components/PostNormalItem";

import "bootstrap/dist/css/bootstrap.css";
import "../public/css/Navbar.css";

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      post_id: null,
      data: [],
      list_post_like: [],
    };
  }

  async componentDidMount() {
    let postController = new PostController();
    this.setState({post_id: await this.props.match.params.post_id})
    this.setState({data: await postController.getByID(this.state.post_id)});
    this.setState({list_post_like: await postController.getByCategoryID(this.state.data.ID_CATEGORY)});
  }

  render() {
    return (
      <div id="WEB_MAIN">
        {/* Set title */}
        <Helmet>
          <title>{this.state.data.TITLE}</title>
        </Helmet>

        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="post-detail">
                  <p className="category">{this.state.data.NAME}</p>
                  <hr/>
                  <h1 className="post-title">
                    {this.state.data.TITLE}
                  </h1>
                  <p className="date-up">{this.state.data.DATE_UP}</p>

                  <img src={'/images/' + this.state.data.IMAGE1} className="w-100" alt=""/>

                  <p className="post-sapo">
                    {this.state.data.SAPO}
                  </p>

                  <p className="post-content">
                    {this.state.data.CONTENT}
                  </p>

                  <img src={'/images/' + this.state.data.IMAGE2} className="w-100" alt=""/>
                  <hr/>
                  <img src={'/images/' + this.state.data.IMAGE3} className="w-100" alt=""/>
                </div>


              </div>

              <div className="col-md-4">
                <h5>Tin liên quan:</h5>

                {this.state.list_post_like.length != 0 && (
                  <PostNormalItem data={this.state.list_post_like[0]}/>
                )}
                {this.state.list_post_like.length != 0 && (
                  <PostNormalItem data={this.state.list_post_like[1]}/>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
