import React, { Component } from 'react';

import CarouselItem from '../components/CarouselItem'

class Carousel extends Component {
  render() {
    let data = {
      post1: {
        img: 'https://cdn.pixabay.com/photo/2020/07/04/14/19/squirrel-5369727_1280.jpg',
        title: 'Title test 1',
        sapo: 'Lorem ipsum dolor sit amet, consectetur adip porttitor'
      },

      post2: {
        img: 'https://cdn.pixabay.com/photo/2020/07/10/10/13/sparrow-5390248_1280.jpg',
        title: 'Title test 2',
        sapo: 'Lorem ipsum dolor sit amet, consectetur adip porttitor'
      },

      post3: {
        img: 'https://cdn.pixabay.com/photo/2020/07/10/17/57/cows-5391559_1280.jpg',
        title: 'Title test 3',
        sapo: 'Lorem ipsum dolor sit amet, consectetur adip porttitor'
      },
    };

    return (
      
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carousel" data-slide-to="0" class="active"></li>
            <li data-target="#carousel" data-slide-to="1"></li>
            <li data-target="#carousel" data-slide-to="2"></li>
            <li data-target="#carousel" data-slide-to="3"></li>
            <li data-target="#carousel" data-slide-to="4"></li>
        </ol>

        <div className="carousel-inner">
          <CarouselItem active={true} data={data.post1}/>
          <CarouselItem active={false} data={data.post2}/>
          <CarouselItem active={false} data={data.post3}/>
        </div>
        <a className="carousel-control-prev control" href="#carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next control" href="#carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

        <svg viewBox="0 0 1440 142" fill="none" xmlns="http://www.w3.org/2000/svg" className="down-svg">
            <path
                    d="M0 133.96V59.3599C26.6 85.6599 79.5 65.0599 132.5 59.3599C185.8 54.0599 238.5 123.2 291.5 112.5C344.8 102.2 427 -5.50001 480 37.5C533.3 80.5 621 132.2 674 100.5C727.3 68.2 778.5 29.2 831.5 23.5C884.8 18.2 933.5 42.7 986.5 80C1039.8 117.7 1097 79.8 1150 37.5C1203.3 -5.20001 1299 42.8 1352 37.5C1405.3 31.8 1440 -20.5 1440 9.50001V256.66H1413.3C1386.7 256.66 1333 256.66 1280 256.66C1226.7 256.66 1173 256.66 1120 256.66C1066.7 256.66 1013 256.66 960 256.66C906.7 256.66 853 256.66 800 256.66C746.7 256.66 693 256.66 640 256.66C586.7 256.66 533 256.66 480 256.66C426.7 256.66 373 256.66 320 256.66C266.7 256.66 213 256.66 160 256.66C106.7 256.66 53 256.66 27 256.66H0V133.96Z"
                    fill="#4b00ff40"></path>
        </svg>
        <svg viewBox="0 0 1440 135" fill="none" xmlns="http://www.w3.org/2000/svg" className="down-svg">
            <path
                    d="M0 133.96V59.3599C26.6 85.6599 79.5 65.0599 132.5 59.3599C185.8 54.0599 238.5 123.2 291.5 112.5C344.8 102.2 427 -5.50001 480 37.5C533.3 80.5 621 132.2 674 100.5C727.3 68.2 778.5 29.2 831.5 23.5C884.8 18.2 933.5 42.7 986.5 80C1039.8 117.7 1097 79.8 1150 37.5C1203.3 -5.20001 1299 42.8 1352 37.5C1405.3 31.8 1440 -20.5 1440 9.50001V256.66H1413.3C1386.7 256.66 1333 256.66 1280 256.66C1226.7 256.66 1173 256.66 1120 256.66C1066.7 256.66 1013 256.66 960 256.66C906.7 256.66 853 256.66 800 256.66C746.7 256.66 693 256.66 640 256.66C586.7 256.66 533 256.66 480 256.66C426.7 256.66 373 256.66 320 256.66C266.7 256.66 213 256.66 160 256.66C106.7 256.66 53 256.66 27 256.66H0V133.96Z"
                    fill="#f7f7f9"></path>
        </svg>
        <ul className="bg-bubble">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </div>
    )
  }
}

export default Carousel