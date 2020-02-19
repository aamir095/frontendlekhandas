import React, { Component } from "react";
import Slider from "react-slick";
import './association.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import demo from '../../assets/images/image.jpg';
 
export default class Association extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 3
          };
        return (
            
            <div className="association-carousel">
                <div className="center">
            <h2 className="association">Association</h2>
              <Slider {...settings}>
              <div className="middle">
                <img src={demo}/>
              </div>
              <div className="middle">
              <img src={demo}/>
              </div>
              <div className="middle">
              <img src={demo}/>
              </div>
              <div className="middle">
              <img src={demo}/>
              </div>
              <div className="middle">
              <img src={demo}/>
              </div>
            </Slider>
            </div>
            </div>
         

        );
    }
}
 
