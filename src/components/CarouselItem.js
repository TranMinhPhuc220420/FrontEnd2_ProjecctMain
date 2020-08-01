import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CarouselItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      list_post_new : []
    };
  }

  render() {
    if (this.props.active) {
      return (
        <div className='carousel-item active'>
          <img src={ '/images/' + this.props.data.IMAGE1} alt="..." className="w-100"/>
          <div className="carousel-caption d-none d-md-block">
          <h5>
            <Link to={'/detail/'+this.props.data.ID_POST} className="link">
              {this.props.data.TITLE}
            </Link>
          </h5>
          <p>{this.props.data.SAPO}</p>
          </div>
        </div>
        )
    } else {
      return (
        <div className='carousel-item '>
          <img src={'/images/' +this.props.data.IMAGE1} alt="..." className="w-100"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>
              <Link to={'/detail/'+this.props.data.ID_POST} className="link">
                {this.props.data.TITLE}
              </Link>
            </h5>
            <p>{this.props.data.SAPO}</p>
          </div>
        </div>
        )
    }
  }
}

export default CarouselItem