import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Association from './content/Association';
import Content1 from './content/Content1';

class Layout extends React.Component{

    render(){
    return(
    <div>
        
        <Header/>
        <Content1/>
        <Association/>
        <Footer/>
    </div>
    );
}
}

export default Layout;