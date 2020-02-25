
import React, {Component} from "react";
import './testimonials.scss';
import girl from '../../assets/images/girl.png';
import Slider from "react-slick";
import './association.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default class Testimonials extends React.Component{
    render(){
      const settings = {
         dots: true,
         infinite: true,
         speed: 500,
         slidesToShow: 3,
         slidesToScroll: 3
       };
        return(

            <div  id='testimonial'>
               <div className="grey-box">
               <h2>Testimonials</h2>

                   <div className="center">
                     

              <Slider {...settings}>
              <div className='total-box middle'>
                   <div className="image">
                

                   
                   </div>
                   <p></p> 
                   
                </div>
              

                <div className='total-box middle'>
                   <div className="image">
                

                   
                   </div>
                   <p></p> 
                   
                </div>

                <div className='total-box middle'>
                   <div className="image">
                   
                   </div>
                   <p></p> 
                   
                </div>

                <div className='total-box middle'>
                   <div className="image">
                   
                   </div>
                   <p> </p> 
                   
                </div>
                </Slider>

        
            </div>
            </div>
            </div>
        );
    }

 }