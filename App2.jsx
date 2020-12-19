import React,{useState} from 'react';
import './App1.css'
function App2()
{
    const[ctime,utime]=useState(new Date().toLocaleTimeString())
    const newtime=()=>{
        var tim=new Date();
        tim=tim.toLocaleTimeString();
        utime(tim);
    }
    setInterval(newtime,1000)
    return(
        <>
        <h1>
            Digital Clock Using React Js
        </h1>
      <h2> {ctime}</h2>
      <h6>Project :Naba Zehra</h6>
        </>
    );
}
export default App2;