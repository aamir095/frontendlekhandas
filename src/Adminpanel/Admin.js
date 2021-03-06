import React from 'react';
import './admin.scss';
import Dashboard from './components/Dashboard';
import Project from './components/Project';
import Policies from './components/Policies';
import Payment from './components/Payment';
import Reports from './components/Reports';
import Setting from './components/Setting';
import Navbar from './components/Navbar';
import DashboardContent from './components/Dashboardcontent';
import Manageweb from './components/Manageweb';




export default class Adminpanel extends React.Component{
    render(){
        return(
            <div id="useradmin">
                <div className="fixed">
                    <Navbar/>
                
                <div className="dashboard center">
                    <div className="sidebar">
                        <Dashboard/>
                        <Project/>
                        <Policies/>  
                        <Payment/>
                        <Reports/>
                        <Setting/>
                        <Manageweb/>
                    </div>
                    <DashboardContent/>
                    
                </div>



                </div>
            </div>
        );
    }
}