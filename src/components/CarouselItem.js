import React, { Component } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

import front_end_2_inc from '../front_end_2_inc';
=======
>>>>>>> 2ad4d8b2856a3a960e241def1698a470469570ce

import Detail from '../page/Detail';

class CarouselItem extends Component {
  render() {
<<<<<<< HEAD
    let url = new front_end_2_inc().getURL();
=======
>>>>>>> 2ad4d8b2856a3a960e241def1698a470469570ce
    if (this.props.active) {
      return (
        <div className='carousel-item active'>
          <img src={this.props.data.img} alt="..." className="w-100"/>
          <div className="carousel-caption d-none d-md-block">
          <h5>
<<<<<<< HEAD
            <Link to={'/detail/'+this.props.data.ID_POST} className="link" params={{ testvalue: "hello" }}>
              {this.props.data.TITLE}
            </Link>
=======
            <a className="link" href="#">{this.props.data.title}</a>
>>>>>>> 2ad4d8b2856a3a960e241def1698a470469570ce
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
<<<<<<< HEAD
              <Link to={'/detail/'+this.props.data.ID_POST} className="link" params={{ testvalue: "hello" }}>
                {this.props.data.TITLE}
              </Link>
=======
              <a className="link" href="#">{this.props.data.title}</a>
>>>>>>> 2ad4d8b2856a3a960e241def1698a470469570ce
            </h5>
            <p>{this.props.data.sapo}</p>
          </div>
        </div>
        )
    }
  }
}

export default CarouselItem