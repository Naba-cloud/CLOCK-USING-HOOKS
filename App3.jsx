import React,{useState} from 'react';
function App3(){
//    const bg="Yellow";
const purple='8e44ad';
    const[bg,sbg]=useState(bg)
   function chnge(){
     
        
          
     
       
   }
    return(
        <>
        <span>{ bg }</span>
        <h1 style ={{backgroundColor:'black' ,color:'white',textAlign:'center'}}>BACKGROUND SWITCHER</h1>
           <button onClick={ chnge }>click </button>
        </>
    );
}
export default App3;