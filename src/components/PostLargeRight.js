import React, {Component} from 'react';
import BGCircle from './BGCircle';
import {Link} from 'react-router-dom';

class PostLargeRight extends Component {
  render() {
    return (
      <div className="row post-big" id="row-post-big" data-scroll="in">
        <div className="col-md-7">
          <div className="content">
            <p className="category">{this.props.data.NAME}</p>
            <Link to={'/detail/' + this.props.data.ID_POST} className="hv-l">
              <h2>{this.props.data.TITLE}</h2>
            </Link>
            <p className="post-sapo">{this.props.data.SAPO}</p>
          </div>
        </div>
        <div className="col-md-5">
          <img src={'/images/' + this.props.data.IMAGE1} className="img-post" alt={this.props.data.TITLE}/>
          <BGCircle/>
        </div>
      </div>
    )
  }
}

export default PostLargeRight