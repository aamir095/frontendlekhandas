import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Association from './content/Association';
import Testimonials from './content/Testimonials';
import WhyLekhandas from './content/WhyLekhandas';
import Services from './content/Services';
import HowWorks from './content/HowWorks';
<<<<<<< HEAD
=======
import Content1 from './content/Content1';
>>>>>>> a6bb94afade87f81c37a6d9f1c03c21536df4023

class Layout extends React.Component{

    render(){
    return(
    <div>
        
        <Header/>
<<<<<<< HEAD
=======
        <Content1/>
>>>>>>> a6bb94afade87f81c37a6d9f1c03c21536df4023
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