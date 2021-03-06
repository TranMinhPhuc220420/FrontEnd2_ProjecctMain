import React, { Component } from 'react';
import PostSmall from '../components/PostSmall';

class PostList extends Component {
    render(){
        return(
            <div className="list-post list-unstyled" data-scroll="in">
              {this.props.data.map((postItem) => (
                <PostSmall  data={postItem} key={postItem.ID_POST}/>
              ))}
            </div>
        );
    };
}
export default PostList