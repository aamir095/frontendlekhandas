import React from 'react';
import './admin.scss';
import Lekhandas from '../assets/Lekhandas.png';
import Notification from '../assets/images/Notification.png';
import Message from '../assets/images/Message.png';
import Dashboard from './components/Dashboard';
import Project from './components/Project';
import Policies from './components/Policies';
import Payment from './components/Payment';
import Reports from './components/Reports';
import Setting from './components/Setting';
import Contactus from '../assets/images/Contactus.png';




export default class Adminpanel extends React.Component{
    render(){
        return(
            <div id="useradmin">
                <div className="fixed">
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
                <div className="dashboard center">
                    <div className="sidebar">
                        <Dashboard/>
                        <Project/>
                        <Policies/>  
                        <Payment/>
                        <Reports/>
                        <Setting/>
                    </div>
                    <div className="main-dashboard">
                        <div>
                            <div>
                                <h3>Welcome Prabhat!</h3>
                                <p>The Processing is pending since 15 December. <span>Learn More</span></p>
                            </div>
                            <div>
                                <div>a</div>
                                <div>b</div>
                            </div>
                            <div>
                                <div>
                                    <span>Task Status</span>
                                    <span>filter</span>
                                </div>
                                <div>
                                    <table>
                                        <thead>
                                                <tr>
                                                    <td>#</td>
                                                    <td>Project Name</td>
                                                    <td>Team</td>
                                                    <td>Project Cost</td>
                                                    <td>Project Status</td>
                                                    <td>Payment</td>
                                                </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="rightsidebar">
                            <span>
                                <div className="project">
                                    <p>Total Project</p>
                                    <h4>3</h4>
                                </div>
                                <div className="completed">
                                    <p>Completed</p>
                                    <h4>3</h4>
                                </div>
                                <div className="pending">
                                    <p>Pending</p>
                                    <h4>0</h4>
                                </div>
                            </span>
                            <span className="expire">
                                <h4>Going to expire</h4>
                                <div>
                                    <span>
                                        <span></span>
                                        <p>Rohit Chhetri</p>
                                    </span>
                                    <p>Today</p>
                                </div>
                                <div>
                                    <span>
                                        <span></span>
                                        <p>Amir Poudel</p>
                                    </span>
                                    <p>Dec 12</p>
                                </div>
                            </span>
                            <span>
                                <div className="contactus">
                                    <div className="image">
                                    <img src={Contactus} alt="Contactus" />
                                    </div>
                                
                                <div>
                                <h3>Need help?</h3>
                                <p>Do you have any problem while using the Lekhandas portal?</p>
                                </div>

                                    
                                </div>
                            </span>
                        </div>

                    </div>
                </div>



                </div>
            </div>
        );
    }
}