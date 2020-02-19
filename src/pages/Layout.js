import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Association from './content/Association';

class Layout extends React.Component{

    render(){
    return(
    <div>
        
        <Header/>
        <Association/>
        <Footer/>
    </div>
    );
}
}

export default Layout;