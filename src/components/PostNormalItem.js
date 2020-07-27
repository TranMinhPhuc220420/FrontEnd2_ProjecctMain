import React, { Component } from 'react';

class PostNormalItem extends Component {
  render() {
    return (
        <div class="around-post">
          <div class="around-img-post">
            <img src={this.props.dataPost.imgPost} alt="..." class="img-post-normal"/>
            <a href="#" class="link-detail-post">
            <button class="btn btn-danger">Xem nhanh</button>
            </a>
          </div>
          <div class="around-content-post">
            <h5 class="title-post"><a href="#" class="link-title-post">{this.props.dataPost.titlePost}</a></h5>
            <p class="content-post">{this.props.dataPost.contentPost}</p>
            <p class="date-post">{this.props.dataPost.datePost}</p>
          </div>
        </div>
    );
  }
}

export default PostNormalItem