import React, { Component } from 'react';

class PostBasic extends Component {
  render() {
    let dataPostBasic = {
        postBasic1: {
            categoryBasic: 'Chinh tri',
            titleBaisc: 'Title Post 1',
            contentBasic: 'Lorem ipsum dolor sit amet, consectetur adip porttitor',
            dateBasic: '03-09-2020'
        }
      };
    return (
        <div class="around-post-basic">
            <div class="around-category-post-basic">
                <p class="category-post-basic">{dataPostBasic.postBasic1.categoryBasic}</p>
            </div>
            <div class="around-content-post">
                <h5 class="title-post"><a href="#" class="link-title-post">{dataPostBasic.postBasic1.titleBaisc}</a></h5>
                <p class="content-post pt-3">{dataPostBasic.postBasic1.contentBasic}</p>
                <p class="date-post">{dataPostBasic.postBasic1.dateBasic}</p>
            </div>
        </div>
    );
  }
}

export default PostBasic