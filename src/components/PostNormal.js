import React, {Component} from 'react';
import PostNormalItem from '../components/PostNormalItem';

class PostNormal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <PostNormalItem dataPost={this.props.data[0]} dateUp={Date(this.props.data[0].DATE_UP)}/>
        </div>
        <div className="col">
          <PostNormalItem dataPost={this.props.data[1]} dateUp={Date(this.props.data[1].DATE_UP)}/>
        </div>
        <div className="col">
          <PostNormalItem dataPost={this.props.data[2]} dateUp={Date(this.props.data[2].DATE_UP)}/>
        </div>
      </div>
    );
  };
}

export default PostNormal