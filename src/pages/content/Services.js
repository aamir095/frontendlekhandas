

import React, {Component} from 'react';
import './services.scss';
import time from '../../assets/images/time.png';
import pen from '../../assets/images/pen.png';
import Zoom from 'react-reveal/Zoom';

export default  class Services extends React.Component{
    render(){
        return(
            <div id="shadow-box">
                <h2>Our Services</h2>
            <div className='service-icon1'>
                <div className="center">
                <Zoom  delay={100}>
                    <div className='service-list'>
                        <img src={time} />
                        <p><strong>New Registration
                        of Private Company</strong></p>
                    </div>
                    </Zoom>
                    <Zoom  delay={200}>
                    <div className='service-list'>
                        <img src={pen} />
                        <p><strong>New Registration 
                        of Private Company</strong></p>
                    </div>
                    </Zoom>

                    <Zoom  delay={400}>   
                    <div className='service-list'>
                        <img src={time} />
                        <p><strong>New Registration 
                        of Private Company</strong></p>
                    </div>
                    </Zoom>
                    

                    <Zoom  delay={600}> 
                    <div className='service-list'>
                        <img src={pen} />
                        <p><strong>New Registration 
                        of  Company</strong></p>
                    </div>
                    </Zoom>

                </div>
                
                </div>    

                <div className='service-icon2'>
                <div className="center">
                <Zoom  delay={800}> 
                    <div className='service-list'>
                        <img src={pen} />
                        <p><strong>New Registration
                        of Private Company</strong></p>
                    </div>
                </Zoom>   

                <Zoom  delay={1000}> 
                    <div className='service-list'>
                        <img src={time} />
                        <p><strong>New Registration
                        of Private Company</strong></p>
                    </div>
                </Zoom>

                <Zoom  delay={1200}> 
                    <div className='service-list'>
                        <img src={pen} />
                        <p><strong>New Registration
                        of Private Company</strong></p>
                    </div>
                </Zoom>

                <Zoom  delay={1400}> 
                    <div className='service-list'>
                        <img src={time} />
                        <p><strong>New Registration
                        of  Company</strong></p>
                    </div>
                </Zoom>
                </div>
                
                </div>    
                
            </div>
        );
    }
}