import React, { Component } from 'react';
import front_end_2_inc from '../front_end_2_inc';

class CarouselItem extends Component {
  render() {
    let url = new front_end_2_inc().getURL();

    if (this.props.active) {
      return (
        <div className='carousel-item active'>
          <img src={url + '/public/images/' + this.props.data.IMAGE1 } alt="..." className="w-100"/>
          <div className="carousel-caption d-none d-md-block">
          <h5>
            <a className="link" href="#">{this.props.data.TITLE}</a>
          </h5>
          <p>{this.props.data.SAPO}</p>
          </div>
        </div>
        )
    } else {
      return (
        <div className='carousel-item '>
          <img src={url + '/public/images/' + this.props.data.IMAGE1 } alt="..." className="w-100"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>
              <a className="link" href="#">{this.props.data.TITLE}</a>
            </h5>
            <p>{this.props.data.SAPO}</p>
          </div>
        </div>
        )
    }
  }
}

export default CarouselItem