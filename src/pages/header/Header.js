import React from 'react';

import Flexbox from 'flexbox-react';
import Img from 'react-image';
import './Header.scss';


export default class Header extends React.Component{


render(){
        return(
            <div>

                <h2>This is header.</h2>
               

                <div className="navbar" >
                <div className="center">
                    <div className="stylenav">
                    <div className="logo">
                        <a href="#">
                        <img src="../../assets/lekhandas.png"/>
                        </a>
                    </div>
                    <div className="navmenu">
                        <div className="navitem">
                            <a href="#">Home</a>
                            <a href="#">Services</a>
                            <a href="#">About Us</a>
                            <a href="#">Gallery</a>
                        </div>
                        <div className="loginsignup">
                            <span>
                            <a href="#">Sign Up</a>
                            </span>
                            <span>
                            <a href="#">Sign In</a>
                            </span>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>



            </div>
        );
    }
}