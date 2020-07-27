import React, {Component} from 'react';

//Components
import PostNormal from './PostNormal'
import PostController from "../controllers/post/PostController";

class ContentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      list_post_new: [],
      list_post_normal: []
    };
  }

  async componentDidMount() {
    let arr_temp = [];
    for (let i = 0; i < 3; i++){
      arr_temp.push(this.props.data[i]);
    }

    this.setState({list_post_normal: arr_temp});
    console.log(this.props.list_post_normal)
  }

  render() {
    return (
      <div id="content">
        {/*  New post */}
        <section>
          <div className="container">
            <h5 className="title my-md-5">
              Tin Tức Mới
            </h5>

            {this.state.list_post_normal.length !== 0 && (
              <PostNormal data={this.state.list_post_normal}/>
            )}
          </div>
        </section>
        {/*  /New post */}
      </div>
    );
  }
}

export default ContentHome