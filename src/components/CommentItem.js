import React, {Component} from 'react';
import DateUp from '../components/DateUp';
class CommentItem extends Component {
  render() {
    return (
      <li className="comment-item">
        <p className="body">
          <span className="name">{this.props.data.USERNAME}</span>: {this.props.data.CONTENT}
        </p>
        <p className="date-up">
          <DateUp datetimeUp={this.props.data.DATE_UP}/>
        </p>
      </li>
    );
  }
}

export default CommentItem