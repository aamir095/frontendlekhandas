import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Gallery from './pages/Gallery';
import AboutUs from '../src/pages/AboutUs';
import Adminpanel from '../src/Adminpanel/Admin';
import {Route, BrowserRouter }from 'react-router-dom';
import Templete from '../src/Templetes/Templete';



  const Page=()=>{
    return(
        
          <BrowserRouter>
            <div >
            <Route path="/"    exact component={App}/>
            <Route path="/home"  component={App}/>
            <Route path="/gallery"  component={Gallery}/>
            <Route path="/about-us"  component={AboutUs}/>
            <Route path="/admin"  component={Adminpanel}/>
            <Route path="/templete"  component={Templete}/>

            </div>
          
           
         
        
        </BrowserRouter>
    )
  }


  ReactDOM.render(<Page />, document.querySelector('#root'));
