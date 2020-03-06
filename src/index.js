import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Gallery from './pages/Gallery';
//import AboutUs from '../src/pages/AboutUs';
import Adminpanel from '../src/Adminpanel/Admin';
import {Route, BrowserRouter }from 'react-router-dom';
import Templete from '../src/Templetes/Templete';

import Addtestimonial from '../src/Adminpanel/AddTestimonial';
import Addassociations from '../src/Adminpanel/Addassociations';
import AddServices from '../src/Adminpanel/AddService';
import Managetestimonials from './Adminpanel/Managetestimonials';
import Manageassocation from './Adminpanel/Manageassocations';
import ManageServices from './Adminpanel/ManageServices';




  const Page=()=>{
    return(
        
          <BrowserRouter>
            <div >
            <Route path="/"    exact component={App}/>
            <Route path="/home"  component={App}/>
            {/* <Route path="/gallery"  component={Gallery}/> */}
            {/* <Route path="/about-us"  component={AboutUs}/> */}
            <Route path="/dashboard"  component={Adminpanel}/>
            <Route path="/templete"  component={Templete}/>
            <Route path="/addtestimonial"  component={Addtestimonial}/>
            <Route path="/managetestimonials"  component={Managetestimonials}/>
            <Route path="/addassociation"  component={Addassociations}/>
            <Route path="/addservice"  component={AddServices}/>
            <Route path="/manageassociations" component={Manageassocation}/>
            <Route path="/manageservices" component={ManageServices}/>
            </div>
        </BrowserRouter>
    )
  }


  ReactDOM.render(<Page />, document.querySelector('#root'));
