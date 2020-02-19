import React from 'react';
import Flexbox from 'flexbox-react';
import './Header.scss';


export default class Header extends React.Component{
    
    render(){
        return(
            <div>
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

                            <a href="#">SIGN UP</a>
                            </span>
                            <span>
                            <a href="#">SIGN IN</a>

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