import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Association from './content/Association';
import Testimonials from './content/Testimonials';
import WhyLekhandas from './content/WhyLekhandas';
import Services from './content/Services';
import HowWorks from './content/HowWorks';
import Content1 from './content/Content1';

class Layout extends React.Component{

    render(){
    return(
    <div>
        
        <Header/>
        <Content1/>
        <Services/>
        <HowWorks />
        <WhyLekhandas/>
        <Testimonials/>
        <Association/>
        <Footer/>
    </div>
    );
}
}

export default Layout;