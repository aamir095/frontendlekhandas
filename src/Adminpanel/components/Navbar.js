import React from 'react';
import Message from '../../assets/images/Message.png';
import Lekhandas from '../../assets/Lekhandas.png';
import Notification from '../../assets/images/Notification.png';



export default class Navbar extends React.Component{
    render(){
        return(
            <div className="adminnavbar center">
                    <div>
                    <img src={Lekhandas} alt="Lekhandas" />
                    <input type="text" placeholder="search for employee/project"/>


                    </div>
                    <div>
                        <div className="notification">
                    <img src={Notification} alt="notification" />

                            

                        </div>
                        <div className="message">
                    <img src={Message} alt="message" />

                        </div>
                        <div className="user">
                            <span className="image">
                                <span className="online">
                                    
                                </span>
                            </span>
                            <span>prabhat</span>
                            <span></span>
                            
                        </div>
                    </div>

                </div>
            
        )
    }
}