import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import front_end_2_inc from '../front_end_2_inc';

class PostSmall extends Component {
  render() {
    let url = new front_end_2_inc().getURL();

    return (
      <li className="media post post-small">
        <div className="inner">
          <Link to={'/detail/' + this.props.data.ID_POST}>
            <img src={'/images/' + this.props.data.IMAGE1} className="img-post" alt=""/>
          </Link>
        </div>
        <div className="ml-md-3 media-body post-body">
          <h5 className="hv-l">
            <Link to={'/detail/' + this.props.data.ID_POST}>
              {this.props.data.TITLE}
            </Link>
          </h5>
        </div>
      </li>
    );
  }
}

export default PostSmall