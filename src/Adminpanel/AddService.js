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





export default class AddServices extends React.Component{
    render(){
        const addtestomonials = {
            position:"absolute",
            right:"0",
            width:"82vw",
            display:"flex",
            justifyContent:"center"
            
          };
          const data = {
              display:"flex",
              alignItems:"center"

          }
          const input={
              background:"white",
              width:"20vw"
          }
          const h1={
              textAlign:"center",
          }
          const label={
              width:"7vw"
          }
          const textbox={
              height:"20vh",
              background:"white",
              width:"20vw"
          }
         
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
                    <div style={addtestomonials} >
                    <div>

                        <h2 style={h1}>Add a New Service</h2>
                        
                        <span style={data}>
                            <label style={label}>Servce Name:</label>
                            <input type="text" style={input}/>
                        </span>
                        <span style={data}>
                            <label style={label}>Service Icon:</label>
                            <input type="file" style={input}/>
                        </span>
                        <span style={data}>
                            <label style={label}>Service Description:</label>
                            <textarea style={textbox}/>
                        </span>
                        <span style={data}>
                            <button>submit</button>
                        </span>
                        </div>
                    </div>
                    
                </div>



                </div>
            </div>
        );
    }
}