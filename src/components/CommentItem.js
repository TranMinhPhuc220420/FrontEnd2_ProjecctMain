import React, { Component } from 'react';

class CommentItem extends Component {
  render() {
    return (
        <li className="comment-item">
            <p className="info-comment">
                <b className="username-comment">{this.props.dataCmt.username}</b>
                <span className="content-comment">: {this.props.dataCmt.content}</span>
            </p>
            <p className="time-comment">{this.props.dataCmt.time}</p>
        </li>
    );
  }
}

export default CommentItem