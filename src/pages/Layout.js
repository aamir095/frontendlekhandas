import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

class Layout extends React.Component{

    render(){
    return(
    <div>
        
        <Header/>
        
        <Footer/>
    </div>
    );
}
}

export default Layout;