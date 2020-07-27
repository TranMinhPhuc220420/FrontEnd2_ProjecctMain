import React, { Component } from 'react';

class CommentItem extends Component {
  render() {
    return (
        <li class="comment-item">
            <p class="info-comment">
                <b class="username-comment">{this.props.dataCmt.username}</b>
                <span class="content-comment">: {this.props.dataCmt.content}</span>
            </p>
            <p class="time-comment">{this.props.dataCmt.time}</p>
        </li>
    );
  }
}

export default CommentItem