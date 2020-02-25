import React, { Component } from "react";
import './content1.scss';
import meet from '../../assets/images/meet.png'
 
export default class Content1 extends Component {
    render() {
       
        return (
            <div id="maincontent">
                <div className="left">
                    <h1>lorem</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className="right">
                <div className="background">
                <svg  height="100vh"  viewBox="0 0 746 778" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 -11.7869H758.6V759.989C1354.28 862.248 -2.14294e-05 511.919 0 142.568C2.14294e-05 -226.782 0 -11.7869 0 -11.7869Z" fill="url(#paint0_linear)"/>
                <defs>
                <linearGradient id="paint0_linear" x1="468.402" y1="-12.669" x2="468.402" y2="772.695" gradientUnits="userSpaceOnUse">
                <stop stop-color="#6D7AF2"/>
                <stop offset="1" stop-color="#8000FF"/>
                </linearGradient>
                </defs>
                </svg>
                </div>
                <div className="image">
                <img src={meet} alt="meet" />

                </div>

                </div>
            </div>
        );
    }
}
 
