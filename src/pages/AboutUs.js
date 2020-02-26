import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

export default class AboutUs extends React.Component{
    render(){
        return(
            <diV>
                <Header/>
                This is About-Us Page.
                <Footer/>
            </diV>
        );
    }
}