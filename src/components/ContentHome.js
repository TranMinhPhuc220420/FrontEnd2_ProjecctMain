import React, {Component} from 'react';

//Components
import PostNormal from './PostNormal';
import PostBig from './PostBig';
import PostList from './PostList';
import PostLargeRight from './PostLargeRight';
//Controller
import PostController from "../controllers/post/PostController";

class ContentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      list_post_new: [],
      list_post_normal: [],
      list_post_small: [],
      post_large_random: null,
    };
  }

  async componentDidMount() {
    let arr_temp = [];
    let i;
    for (i = 0; i < 3; i++) {
      arr_temp.push(this.props.data[i]);
    }
    this.setState({list_post_normal: arr_temp});

    arr_temp = [];
    for (i; i < 7; i++) {
      arr_temp.push(this.props.data[i]);
    }
    this.setState({list_post_small: arr_temp});


    //Get random post add to post large
    this.setState({post_large_random: await this.props.data[Math.floor((Math.random() * this.props.data.length) + 1)]});
    console.log('dasdfnalsdbalsdb')
    console.log(this.state.post_large_random);
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

            <div className="row">

              {this.state.list_post_normal.length !== 0 && (
                <PostNormal data={this.state.list_post_normal}/>
              )}


              <div className="col-md-8">
                {this.state.post_large_random != null && (
                  <PostBig data={this.state.post_large_random}/>
                )}
              </div>

              <div className="col-md-4">
                {this.state.list_post_normal != null && (
                  <PostList data={this.state.list_post_small}/>
                )}
              </div>
            </div>
          </div>
        </section>
        {/*  /New post */}

        {/* Post with category */}
        <PostLargeRight/>
        {/* /Post with category */}
      </div>
    );
  }
}

export default ContentHome