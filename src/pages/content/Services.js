import React, {Component} from 'react';
import './services.scss';
import time from '../../assets/images/time.png';
import pen from '../../assets/images/pen.png';

export default  class Services extends React.Component{
    render(){
        return(
            <div id="shadow-box">
                <h2>Our Services</h2>
            <div className='service-icon1'>
                <div className="center">
                    <div className='service-list'>
                        <img src={time} />
                        <p><strong>New Registration <br/>
                        of Private Company</strong></p>
                    </div>

                    <div className='service-list'>
                        <img src={pen} />
                        <p><strong>New Registration <br/>
                        of Private Company</strong></p>
                    </div>

                    <div className='service-list'>
                        <img src={time} />
                        <p><strong>New Registration <br/>
                        of Private Company</strong></p>
                    </div>

                    <div className='service-list'>
                        <img src={pen} />
                        <p><strong>New Registration <br/>
                        of  Company</strong></p>
                    </div>

                </div>
                
                </div>    

                <div className='service-icon2'>
                <div className="center">
                    <div className='service-list'>
                        <img src={pen} />
                        <p><strong>New Registration <br/>
                        of Private Company</strong></p>
                    </div>

                    <div className='service-list'>
                        <img src={time} />
                        <p><strong>New Registration <br/>
                        of Private Company</strong></p>
                    </div>

                    <div className='service-list'>
                        <img src={pen} />
                        <p><strong>New Registration <br/>
                        of Private Company</strong></p>
                    </div>

                    <div className='service-list'>
                        <img src={time} />
                        <p><strong>New Registration <br/>
                        of  Company</strong></p>
                    </div>

                </div>
                
                </div>    
            </div>
        );
    }
}