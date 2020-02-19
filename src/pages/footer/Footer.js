import React from 'react';
import Flexbox from 'flexbox-react';
import './footer.scss';

export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="links">
                    <div className='center'>
                   <div className='links-list1'>
                       <h5>Community</h5>
                       <ul><a href='#'>Loreum</a></ul>
                       <ul><a href='#'>Loreum</a></ul>
                       <ul><a href='#'>Loreum</a></ul>
                       <ul><a href='#'>Loreum</a></ul>
                       
                   </div>

                   <div className='links-list1'>
                       <h5>Community</h5>
                       <ul><a href='#'>Loreum</a></ul>
                       <ul><a href='#'>Loreum</a></ul>
                       <ul><a href='#'>Loreum</a></ul>
                       <ul><a href='#'>Loreum</a></ul>
                   </div>

                   <div className='links-list1'>
                       <h5>Community</h5>
                       <ul><a href='#'>Loreum</a></ul>
                       <ul><a href='#'>Loreum</a></ul>
                       <ul><a href='#'>Loreum</a></ul>
                       <ul><a href='#'>Loreum</a></ul>
                   </div>

                   <div className='links-list1'>
                       <h5>Community</h5>
                       <ul><a href='#'>Loreum</a></ul>
                       <ul><a href='#'>Loreum</a></ul>
                       <ul><a href='#'>Loreum</a></ul>
                       <ul><a href='#'>Loreum</a></ul>
                   </div>

                   <div className='links-list1'>
                       <h5>Community</h5>
                       <ul><a href='#'>Loreum</a></ul>
                       <ul><a href='#'>Loreum</a></ul>
                       <ul><a href='#'>Loreum</a></ul>
                       <ul><a href='#'>Loreum</a></ul>
                   </div>
                </div>
                </div>
                <div className="footerInfo">
                    <div className="center">
                    <div className='footer-info'>
                        <h5>Lekhandas</h5>
                        <ul>Shantingar-31, Kathmandu, Nepal</ul>
                        <ul>Help Line:9851248145</ul>
                        <ul>Fax:017841458</ul>
                        <ul>info@lekhanads.com.np</ul>

                    </div>
                    </div>
                   
                <div className="footerEnd">
                    <div className="footer-end">&copy; Lekhandas. All Rights Reserved. </div>

                </div>
                </div>

            </div>
        );
    }
}