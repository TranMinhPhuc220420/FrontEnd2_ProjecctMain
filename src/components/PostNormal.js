import React, {Component} from 'react';
import PostNormalItem from '../components/PostNormalItem';

class PostNormal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    console.log(this.props.data);
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <PostNormalItem dataPost={this.props.data[0]}/>
        </div>
        <div className="col">
          <PostNormalItem dataPost={this.props.data[1]}/>
        </div>
        <div className="col">
          <PostNormalItem dataPost={this.props.data[2]}/>
        </div>

      </div>
    );
  };
}

export default PostNormal