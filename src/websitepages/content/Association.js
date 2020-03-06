import React, { Component } from "react";
import Slider from "react-slick";
import './association.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import demo from "../../assets/images/image.jpg";
import Bounce from 'react-reveal/Bounce';

 
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

          <div>
            <div id="caroseal1">
            <div className="center">
            
            <div className="association-carousel" >
                
            <h2 className="association">Association</h2>
            <Bounce bottom >
              <Slider {...settings}>
              <div className="middle">
                <img src={demo} alt='images'/>
              </div>
              <div className="middle">
              <img src={demo} alt='images'/>
              </div>
              <div className="middle">
              <img src={demo} alt='images'/>
              </div>
              <div className="middle">
              <img src={demo} alt='images'/>
              </div>
              <div className="middle">
              <img src={demo} alt='images'/>
              </div>
              <div className="middle">
              <img src={demo} alt='images'/>
              </div>
              <div className="middle">
              <img src={demo} alt='images'/>
              </div>
              <div className="middle">
              <img src={demo} alt='images'/>
              </div>
              <div className="middle">
              <img src={demo} alt='images'/>
              </div>
              
            </Slider>
            </Bounce>
            </div>
            </div>
            </div>
            </div>

         

        );
    }
}
 
