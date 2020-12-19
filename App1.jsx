import React ,{useState} from 'react';
import './App1.css';

function App1()
{  
   const date=new Date().toLocaleTimeString();
     const[cur,gti]=useState(date)
    function gettiming(){
       //console.log('hello');
      // const dat=new Date();
      var date=new Date();
      var time=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
       gti(time);
    }
    
    return(
    <>
    <h1>hooks practice </h1>
   <h2>Date and time</h2>
   <span>{ cur }</span><br></br>
   <button onClick={gettiming}>Get Time</button>
     <h6>Design and Develop By Naba </h6>
  </>
);
}
export default App1;