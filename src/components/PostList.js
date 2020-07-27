import React, { Component } from 'react';
import PostSmall from '../components/PostSmall';

class PostList extends Component {
    render(){
        let dataPostSmall = {
            post1: {
              imgPost: 'https://cdn.pixabay.com/photo/2020/07/04/14/19/squirrel-5369727_1280.jpg',
              titlePost: 'Title Post 1'
            },
      
            post2: {
                imgPost: 'https://cdn.pixabay.com/photo/2020/07/04/14/19/squirrel-5369727_1280.jpg',
                titlePost: 'Title Post 2'
              },
      
              post3: {
                imgPost: 'https://cdn.pixabay.com/photo/2020/07/04/14/19/squirrel-5369727_1280.jpg',
                titlePost: 'Title Post 3'
              },
              post4: {
                imgPost: 'https://cdn.pixabay.com/photo/2020/07/04/14/19/squirrel-5369727_1280.jpg',
                titlePost: 'Title Post 3'
              }
          };
        return(
            <div class="around-post-list">
                <PostSmall  dataPostSmall={dataPostSmall.post1}/>
                <PostSmall  dataPostSmall={dataPostSmall.post2}/>
                <PostSmall  dataPostSmall={dataPostSmall.post3}/>
                <PostSmall  dataPostSmall={dataPostSmall.post4}/>
            </div>
        );
    };
}
export default PostList