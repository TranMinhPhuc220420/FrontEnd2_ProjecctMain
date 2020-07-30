import React, {Component} from 'react';
import CommentItem from '../components/CommentItem';

class CommentList extends Component {
  render() {
    return (
      <ul className="list-comment animated slideInDown">
        {this.props.data.map((item, index) => (
          <CommentItem data={item}/>
        ))}
      </ul>
    );
  };
}

export default CommentList