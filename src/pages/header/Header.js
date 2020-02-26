import React from 'react';
import './Header.scss';
import Lekhandas from '../../assets/Lekhandas.png'
import {Link} from 'react-router-dom';
import SignUp from '../credentials/signup';
import Login from '../credentials/login';


export default class Header extends React.Component{
    
    render(){
        return(
           
            <div>
                <div className="navbar" >
                     <div className="center">
                    <div className="stylenav">
                    <div className="logo">
                        <a href="/">
                    <img src={Lekhandas} alt="Lekhandas" />
                        </a>
                    </div>
                    <div className="navmenu">
                        <div className="navitem">
                        <span>
                            <Link to='/home'> Home</Link> 
                            </span>
                            <span>
                            <Link to='/services'>Services</Link> 
                            </span>
                            <span>
                            <Link to='/about-us'> About Us</Link> 
                            </span>
                            <span>
                            <Link to='/gallery'> Gallery</Link> 
                            </span>
                        </div>
                        <div className="loginsignup">
                            
                            <span>
                                <SignUp/>
                            </span>
                            <span>
                            <div className="animation">
                            <Login/> 
                            </div>
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