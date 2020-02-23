import React from 'react';
import Flexbox from 'flexbox-react';
import './Header.scss';
import Lekhandas from '../../assets/Lekhandas.png'


export default class Header extends React.Component{
    
    render(){
        return(
            <div>
                <div className="navbar" >
                     <div className="center">
                    <div className="stylenav">
                    <div className="logo">
                        <a href="#">
            
                <img src={Lekhandas} alt="Lekhandas" />

                        </a>
                    </div>
                    <div className="navmenu">
                        <div className="navitem">
                            <span>
                            <a href="#">Home</a>
                            </span>
                            <span>
                                
                            <a href="#">Services</a>
                            </span>
                            <span>
                            <a href="#">About Us</a>
                            </span>
                            <span>
                            <a href="#">Gallery</a>
                            </span>
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