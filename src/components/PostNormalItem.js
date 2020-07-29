import React, {Component} from 'react';
import front_end_2_inc from '../front_end_2_inc';
import {Link} from 'react-router-dom';

import DateUp from '../components/DateUp';

class PostNormalItem extends Component {
  render() {
    return (
      <div className="card post-medium post shadow" data-scroll>
        <div className="inner">
          <Link to={'/detail/' + this.props.dataPost.ID_POST} className="link">
            <img src={'/images/' + this.props.dataPost.IMAGE1}  alt="..." className="w-100 img-post"/>
          </Link>
          <figcaption>
            <button className="btn btn-danger btn-quick-view">
              Xem nhanh
            </button>
          </figcaption>

        </div>

        <div className="card-body post-body">
          <h5 className="post-title hv-l">
            <Link to={'/detail/' + this.props.dataPost.ID_POST} className="link">
              {this.props.dataPost.TITLE}
            </Link>
          </h5>

          <p className="card-text post-sapo">
            {this.props.dataPost.SAPO.substring(0, 100)}
          </p>

          <p className="post-date-up">
            <DateUp datetimeUp={this.props.dataPost.DATE_UP}/>
          </p>
        </div>
      </div>
    );
  }
}

export default PostNormalItem