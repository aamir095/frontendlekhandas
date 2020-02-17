import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

class Layout extends React.Component{
    constructor(){
        super();
        this.state={
            title:'welcome here'
        };
    }

    changeTitle(title){
        this.setState({title});
    }
   
    render(){
    return(
    <div>
        
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        
        <Footer/>
    </div>
    );
}
}

export default Layout;