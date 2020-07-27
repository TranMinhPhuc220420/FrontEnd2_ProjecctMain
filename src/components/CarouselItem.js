import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import front_end_2_inc from '../front_end_2_inc';

import Detail from '../page/Detail';

class CarouselItem extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      list_post_new : []
    };
  }

  render() {
    let url = new front_end_2_inc().getURL();
    if (this.props.active) {
      return (
        <div className='carousel-item active'>
          <img src={url + '/public/images/' + this.props.data.IMAGE1} alt="..." className="w-100"/>
          <div className="carousel-caption d-none d-md-block">
          <h5>
            <Link to={'/detail/'+this.props.data.ID_POST} className="link" params={{ testvalue: "hello" }}>
              {this.props.data.TITLE}
            </Link>
            <a className="link" href="#">{this.props.data.title}</a>
          </h5>
          <p>{this.props.data.sapo}</p>
          </div>
        </div>
        )
    } else {
      return (
        <div className='carousel-item '>
          <img src={url + '/public/images/' +this.props.data.IMAGE1} alt="..." className="w-100"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>
              <Link to={'/detail/'+this.props.data.ID_POST} className="link" params={{ testvalue: "hello" }}>
                {this.props.data.TITLE}
              </Link>
              <a className="link" href="#">{this.props.data.title}</a>
            </h5>
            <p>{this.props.data.sapo}</p>
          </div>
        </div>
        )
    }
  }
}

export default CarouselItem