import React, { Component } from 'react';
import PostNormalItem from '../components/PostNormalItem';
import logo from '../public/images/hinh01-1.jpg'
import logo1 from '../public/images/hinh01-2.jpg'
import logo2 from '../public/images/hinh02.jpg'


class PostNormal extends Component {
    render(){
        let dataPost = {
            post1: {
              imgPost: logo,
              titlePost: 'Title Post 1',
              contentPost: 'Lorem ipsum dolor sit amet, consectetur adip porttitor',
              datePost: '03-09-2020'
            },
      
            post2: {
                imgPost: logo1,
                titlePost: 'Title Post 2',
                contentPost: 'Lorem ipsum dolor sit amet, consectetur adip porttitor',
                datePost: '14-02-2020'
              },
      
              post3: {
                imgPost: logo2,
                titlePost: 'Title Post 3',
                contentPost: 'Lorem ipsum dolor sit amet, consectetur adip porttitor',
                datePost: '11-09-2020'
              }
          };
        return(
                <div class="row">
                    <div class="col">
                        <PostNormalItem  dataPost={dataPost.post1}/>
                    </div>
                    <div class="col">
                        <PostNormalItem  dataPost={dataPost.post2}/>
                    </div>
                    <div class="col">
                        <PostNormalItem  dataPost={dataPost.post3}/>
                    </div>
                </div>
        );
    };
}
export default PostNormal