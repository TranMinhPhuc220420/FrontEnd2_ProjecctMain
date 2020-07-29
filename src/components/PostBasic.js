import React, { Component } from 'react';

class PostBasic extends Component {
  render() {
    return (
        <div className="around-post-basic">
            <div className="around-category-post-basic">
                <p className="category-post-basic">{this.props.data.NAME}</p>
            </div>
            <div className="around-content-post">
                <h5 className="title-post"><a href="#" className="link-title-post">{dataPostBasic.postBasic1.titleBaisc}</a></h5>
                <p className="content-post pt-3">{dataPostBasic.postBasic1.contentBasic}</p>
                <p className="date-post">{dataPostBasic.postBasic1.dateBasic}</p>
            </div>
        </div>
    );
  }
}

export default PostBasic