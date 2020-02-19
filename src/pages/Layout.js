import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Association from './content/Association';
import Testimonials from './content/Testimonials';

class Layout extends React.Component{

    render(){
    return(
    <div>
        
        <Header/>
        <Testimonials/>
        <Association/>
        <Footer/>
    </div>
    );
}
}

export default Layout;