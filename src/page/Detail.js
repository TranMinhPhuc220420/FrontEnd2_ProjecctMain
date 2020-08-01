import React from 'react';
import {Helmet} from 'react-helmet';

import PostController from "../controllers/post/PostController";
import CommentController from "../controllers/comment/CommentController";

//Components
import PostNormalItem from "../components/PostNormalItem";
import PostList from "../components/PostList";

import "bootstrap/dist/css/bootstrap.css";
import "../public/css/Navbar.css";
import CommentList from "../components/CommentList";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post_id: null,
      data: [],
      list_post_like: [],
      list_comment: [],
      username: '',
      contentComment: ''
    };


    this.setUsername = this.setUsername.bind(this);
    this.setContentComment = this.setContentComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setUsername(event) {
    this.setState({username: event.target.value});
  }

  setContentComment(event) {
    this.setState({contentComment: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    let content = this.state.contentComment;
    let username = this.state.username;

    let commentController = new CommentController();
    if (commentController.addNewComment(this.props.match.params.post_id, username, content)) {
      this.setState({list_comment: await commentController.getByIdPost(this.props.match.params.post_id)});
      this.setState({list_comment: await commentController.getByIdPost(this.props.match.params.post_id)});
      this.setState({list_comment: await commentController.getByIdPost(this.props.match.params.post_id)});
      this.setState({list_comment: await commentController.getByIdPost(this.props.match.params.post_id)});
      this.setState({list_comment: await commentController.getByIdPost(this.props.match.params.post_id)});
      this.setState({list_comment: await commentController.getByIdPost(this.props.match.params.post_id)});
    } else {
      alert("Bình luận không thành công");
    }

    //Clear input
    this.setState({contentComment: ''});
    this.setState({username: ''});
  }

  async componentDidMount() {
    let postController = new PostController();
    let commentController = new CommentController();

    this.setState({post_id: await this.props.match.params.post_id})
    this.setState({data: await postController.getByID(this.state.post_id)});
    this.setState({list_comment: await commentController.getByIdPost(this.props.match.params.post_id)});
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

                <div className="comment shadow my-md-5">
                  <h5>Bình luận:</h5>
                  <CommentList data={this.state.list_comment}/>
                  <hr/>
                  <form id="FormComment" method="post" className="form-post" onSubmit={this.handleSubmit}>
                    <div className="form-row">
                      <div className="col-md-3">
                        <input type="text" className="form-control" placeholder="Tên..." name="username"
                               id="username"
                               value={this.state.username} onChange={this.setUsername}
                               required/>
                      </div>
                      <div className="col-md-7">
                        <input type="text" className="form-control" placeholder="Viết bình luận..."
                               id="content" name="comment" value={this.state.contentComment}
                               onChange={this.setContentComment} required/>
                      </div>
                      <div className="col">
                        <button type="submit" className="btn btn-danger form-control">Đăng</button>
                      </div>
                    </div>
                  </form>
                  <ul className="bg-circle">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>

              </div>

              <div className="col-md-4">
                <h5>Tin liên quan:</h5>

                {this.state.list_post_like.length !== 0 && (
                  <PostList
                    data={[this.state.list_post_like[2], this.state.list_post_like[3], this.state.list_post_like[4]]}/>
                )}

                {this.state.list_post_like.length !== 0 && (
                  <PostNormalItem data={this.state.list_post_like[0]}/>
                )}
                {this.state.list_post_like.length !== 0 && (
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
