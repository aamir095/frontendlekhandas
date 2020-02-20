import React, {Component} from "react";
import './whylekhandas.scss';
import ellipse from '../../assets/images/ellipse.png';
import time from '../../assets/images/time.png';
import file from '../../assets/images/file.png';
import pen from '../../assets/images/pen.png';


export default  class WhyLekhandas extends React.Component{
    render(){
        return(
            <div id="container">
                <h2> Why Lekhandas</h2>
                <div className="center">
                 <div className="icons">
                     <img src={ellipse} />
                     <p><strong>Process Transparency <br/>
                        and Accuracy</strong></p>
                 </div>

                 <div className="icons">
                     <img src={time} />
                     <p><strong>Process Transparency <br/>
                        and Accuracy</strong></p>
                 </div>


                 <div className="icons">
                     <img src={file} />
                     <p><strong>Process Transparency <br/>
                        and Accuracy</strong></p>
                 </div>

                 <div className="icons">
                     <img src={pen} />
                     <p><strong>Process Transparency <br/>
                        and Accuracy</strong></p>
                 </div>

                </div>

            </div>
        );

    }
}