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
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';

config({ ssrFadeout: true });

class Layout extends React.Component{

    render(){
    return(
    <div>
        
        <Header/>
        <Content1/>
        <Bounce left>
        <Services/>
        </Bounce>
        <Bounce right delay={2000}>
        <HowWorks />
        </Bounce>
        <Bounce >
        <WhyLekhandas/>
        </Bounce>
        <Zoom ssrFadeout>
        <Testimonials/>
        </Zoom>
        <Jump>
        <Association/>
        </Jump>
        <Footer/>
    </div>
    );
}
}

export default Layout;