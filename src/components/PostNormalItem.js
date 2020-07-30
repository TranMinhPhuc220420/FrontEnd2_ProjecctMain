import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import DateUp from '../components/DateUp';

class PostNormalItem extends Component {
  render() {
    return (
      <div className="card post-medium post shadow" data-scroll>
        <div className="inner">
          <Link to={'/detail/' + this.props.data.ID_POST} className="link">
            <img src={'/images/' + this.props.data.IMAGE1}  alt="..." className="w-100 img-post"/>
          </Link>
        </div>

        <div className="card-body post-body">
          <h5 className="post-title hv-l">
            <Link to={'/detail/' + this.props.data.ID_POST} className="link">
              {this.props.data.TITLE}
            </Link>
          </h5>

          <p className="card-text post-sapo">
            {this.props.data.SAPO.substring(0, 100)}
          </p>

          <p className="post-date-up">
            <DateUp datetimeUp={this.props.data.DATE_UP}/>
          </p>
        </div>
      </div>
    );
  }
}

export default PostNormalItem