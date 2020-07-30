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
        <div className="col-md-4 mb-md-5 mr-xs-2" data-scroll="in">
          <PostNormalItem data={this.props.data[0]} dateUp={Date(this.props.data[0].DATE_UP)}/>
        </div>
        <div className="col-md-4 mb-md-5 mr-xs-2" data-scroll="in">
          <PostNormalItem data={this.props.data[1]} dateUp={Date(this.props.data[1].DATE_UP)}/>
        </div>
        <div className="col-md-4 mb-md-5 mr-xs-2" data-scroll="in">
          <PostNormalItem data={this.props.data[2]} dateUp={Date(this.props.data[2].DATE_UP)}/>
        </div>
      </div>
    );
  };
}

export default PostNormal