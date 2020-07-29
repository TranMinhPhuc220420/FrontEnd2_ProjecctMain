import React, {Component} from 'react';

class PostLargeRightItem extends Component {
  render() {

    return (
      <div className="row post-big" id="row-post-big" data-scroll="in">
        <div className="col-md-7">
          <div className="content">
            <p className="category">{this.props.data.category}</p>
            <a href="#"><h2 className="hv-l">{this.props.data.title}</h2></a>
            <p className="post-sapo">{this.props.data.sapo}</p>
          </div>
        </div>
        <div className="col-md-5">
          <img src={this.props.data.img} className="img-post"/>
          <ul className="bg-circle">
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default PostLargeRightItem

