import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

export default class Gallery extends React.Component{
    render(){
        return(
            <diV>
                <Header/>
                This is Gallery Page.
                <Footer/>
            </diV>
        );
    }
}