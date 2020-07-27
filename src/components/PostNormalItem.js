import React, {Component} from 'react';
import front_end_2_inc from '../front_end_2_inc';
import {Link} from 'react-router-dom';

class PostNormalItem extends Component {
  render() {
    let url = new front_end_2_inc().getURL();

    return (
      <div className="card post-medium post shadow" data-scroll>
        <div className="inner">
          <Link to={'/detail/' + this.props.dataPost.ID_POST} className="link">
            <img src={url + '/public/images/' + this.props.dataPost.IMAGE1} alt="..." className="w-100"/>
          </Link>

        </div>

        <div className="card-body post-body">
          <h5 className="post-title hv-l">
            <Link to={'/detail/' + this.props.dataPost.ID_POST} className="link">
              {this.props.dataPost.TITLE}
            </Link>
          </h5>

          <p className="card-text post-sapo">
            {this.props.dataPost.SAPO}
          </p>

          <p className="post-date-up">
            {this.props.dataPost.DATE_UP}
          </p>
        </div>
      </div>
    );
  }
}

export default PostNormalItem