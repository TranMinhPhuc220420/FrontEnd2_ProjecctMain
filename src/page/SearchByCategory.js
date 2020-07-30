import React from 'react';
import {Helmet} from 'react-helmet';

//Components
import "bootstrap/dist/css/bootstrap.css";
import "../public/css/Navbar.css";
import PostController from "../controllers/post/PostController";
import PostNormalItem from "../components/PostNormalItem";

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category_id: this.props.match.params.category_id,
      list_post_search: []
    };
  }

  async componentDidMount() {
    let postController = new PostController();

    this.setState({list_post_search: await postController.getByCategoryID(this.props.match.params.category_id)})
  }

  render() {
    return (
      <div id="WEB_MAIN">
        {/* Set title */}
        <Helmet>
          <title>Search</title>
        </Helmet>

        <div className="container">
          <h4>Kết quả tìm kiếm:
            <span className="badge badge-dark">{this.state.list_post_search.length}</span>
          </h4>

          <div className="row">
            {this.state.list_post_search.map((item, index) => (
              <div className="col-md-4 my-md-3">
                <PostNormalItem data={item}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
