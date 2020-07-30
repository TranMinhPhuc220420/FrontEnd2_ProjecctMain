import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import DateUp from './DateUp';

class PostBasic extends Component {
  render() {
    return (

      <div className="card post-basic post" data-scroll>
        <div className="card-body post-body">
          <p className="category">{this.props.data.NAME}</p>
          <h5 className="post-title hv-l">
              <Link to={'/detail/' + this.props.data.ID_POST} className="link">{this.props.data.TITLE}</Link>
          </h5>
          <p className="card-text post-sapo">
            {this.props.data.SAPO}
          </p>
          <p className="post-date-up">
            <DateUp datetimeUp={this.props.data.DATE_UP}/>

          </p>
        </div>
      </div>


    );
  }
}

export default PostBasic