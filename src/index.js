import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// const Pages= () =>{
//     return(
//       <div>
//         <Route path="/signin" exact component={SignIN} />
//         </div>
//     )
//   }



ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

