import React, {Component} from 'react';
import front_end_2_inc from '../front_end_2_inc';
import {Link} from 'react-router-dom';
import DateUp from '../components/DateUp';

class PostBig extends Component {

  render() {
    return (
      <div className="card post post-large" id="row-post-large" data-scroll="in">
        <div className="inner">
          <Link to={'detail/' + this.props.data.ID_POST}>
            <img src={'/images/' + this.props.data.IMAGE1} className="img-post" alt=""/>
          </Link>
        </div>
        <div className="card-body post-body">
          <p className="category">{this.props.data.NAME}</p>
          <Link to={'detail/' + this.props.data.ID_POST}><h5 className="post-title hv-l">{this.props.data.TITLE}</h5>
          </Link>
          <p className="card-text post-sapo">{this.props.data.SAPO}</p>
          <p className="post-date-up">
            <DateUp datetimeUp={this.props.data.DATE_UP}/>
          </p>
        </div>
      </div>
    )
  }
}

export default PostBig