import React, { Component } from 'react';

class CarouselItem extends Component {
  render() {
    if (this.props.active) {
      return (
        <div className='carousel-item active'>
          <img src={this.props.data.img} alt="..." className="w-100"/>
          <div className="carousel-caption d-none d-md-block">
          <h5>
            <a className="link" href="#">{this.props.data.title}</a>
          </h5>
          <p>{this.props.data.sapo}</p>
          </div>
        </div>
        )
    } else {
      return (
        <div className='carousel-item '>
          <img src={this.props.data.img} alt="..." className="w-100"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>
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