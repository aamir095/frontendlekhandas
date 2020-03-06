
import React, {Component} from 'react';
import  "./howworks.scss";
import ask from '../../assets/images/ask.png';
import ask1 from '../../assets/images/ask1.png';

export default class HowWorks extends React.Component{
    render(){
        return(
            <div id='working-box'>
                <h2>How It Works</h2>
                <div className="work-1">
                    <div className='center'>
                        <div className="process">
                            <img  src={ask} />
                            <div className="content-1">
                                <p>Do you have business services you need help with?</p>

                            </div>
                        </div>


                        <div className="process">
                            <img  src={ask} />
                            <div className="content-1">
                                <p>Do you have business services you need help with?</p>

                            </div>
                        </div>

                    </div>

                    <div className='center'>
                        <div className="process">
                            <img  src={ask} />
                            <div className="content-1">
                                <p>Do you have business services you need help with?</p>

                            </div>
                        </div>


                        <div className="process">
                            <img  src={ask} />
                            <div className="content-1">
                                <p>Do you have business services you need help with?</p>

                            </div>
                        </div>

                    </div>


                

                </div>
                
            </div>
        );

    }
}