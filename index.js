import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
//import CompoC from './CompoC';
  // import App4 from './App4';
// import Cid from './Cid';
import * as serviceWorker from './serviceWorker';
 import  App1  from './App1';

ReactDOM.render(
  <React.StrictMode>
    <App1 />
    {/* < CompoC/> */}
    {/* <App3/> */}
    {/* <Cid/> */}
    {/* <Cid username="Hell" firstname="koty"></Cid> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
