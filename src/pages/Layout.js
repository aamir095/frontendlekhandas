import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Association from './content/Association';
import Testimonials from './content/Testimonials';
import WhyLekhandas from './content/WhyLekhandas';
import Services from './content/Services';
import HowWorks from './content/HowWorks';
import Content1 from './content/Content1';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import config from 'react-reveal/globals';



config({ ssrFadeout: true });

class Home extends React.Component{

    render(){
    return(
       
        <div>
        <Header/>
        <Content1/>
        <Bounce left>
        <Services/>
        </Bounce>
        <Bounce right delay={300}>
        <HowWorks />
        </Bounce>
        <Bounce  delay={500}>
        <WhyLekhandas/>
        </Bounce>
        <Zoom ssrFadeout  delay={400} >
        <Testimonials/>
        </Zoom>
        <Association/>
        <Footer/>
    </div>
  
 
    );
}
}

export default Home;