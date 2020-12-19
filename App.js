// import React , {useState,useEffect,useContext } from 'react';
// import './App.css';

// // function App() {
// //   return (
// //     // <div className="App">
      
// //     //   <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap" rel="stylesheet"></link>
// //     //   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
// //     //   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
// //       {/* <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //            Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //          Sign Up
// //         </a>
// //       </header> */}
// // {/* 
// //       <header className="head">
// //       <h1>Sign Up</h1>
// //       <p>Please Fill This Form To Create An Account</p>
// //        <hr/>
       
// //        <span class="glyphicon glyphicon-user"><input type="text" placeholder="User-Name" ></input></span>
// //       <br/><i class="fa fa-envelope"><input type="text" placeholder="Email Address" ></input></i>
// //      <br/> <i class="fa fa-lock"><input type="Password" placeholder="Password"required></input></i>
// //      <br/> <i class="fa fa-lock"><input type="Password" placeholder="Confirm Password"required></input></i>
// //     <br/>
// //     <button>Sign Up</button>
// //     <br/>
// //       </header>
// //     </div>
// //   );
// // } */}
// // const App=()=>
// // {
// //   const [count,setCount]=useState(4)
// //   function inc(){
// //           // setCount(count+1)
// //           setCount(prevCount=>prevCount+1
// //             )
// //   }
// //   function dec(){
// //     // setCount(count-1)
// //     // setCount(count-1)
// //     // setCount(prevCount=>prevCount-1
// //     //   )
// //       setCount(prevCount=>prevCount-1
// //         )
// // }
// //   return (
// //     <>
// //     <h1>Counter using use State Hooks</h1>
// //     <button onClick={inc}>
// //       +
// //     </button>
// //     <span> 
// //       { count }

// //     </span> 
    
// //     <button onClick={dec}>-</button>
// //     </>
    
// //   );

// // }
// // const App=()=>
// // {
// //   const[state,setstate]=useState('Posts');
// //   const[windowWidth,setwindowWidth]=useState('Posts');
// //   const handleResize=()=>
// //   {
// //     setwindowWidth(window.innerWidth);
// //   }
// //   useEffect(()=>
// //   {
// //     window.addEventListener('resize',handleResize)
// //     return ()=>
// //     {
// //       window.removeEventListener('resize',handleResize)
// //     }

    
// //   },[])
// //   // const[windowWidth,setwindowWidth]=useState(window.innerWidth);
// //   // useEffect(()=>{
// //   //   console.log(fetch(`https://jsonplaceholder.typicode.com/${state}`)
// //   //   .then(response => response.json())
// //   //   .then(json => console.log(json)),[state]);
// //   // })
// //   function Comments(){
// //       setstate(setstate=>'Comments') 
        
// //   }
// //   function Posts(){
// //     console.log('back data cleared');
// //     setstate(setstate=>'Posts') 
// //     console.log('Hello');
    
// // }
// // function Users(){
// //   setstate(setstate=>'Users') 
    
// // }
// //   return(
// //     <>
   
// //    <br>
// //    </br>
// //    <h3>{windowWidth}</h3>
// //     <br></br>
// //     <button onClick={Posts}>Posts</button>
// //     <button onClick={Comments}>Comments</button>
// //     <button onClick={Users}>Users</button><br></br>
// //     <span>{state}</span>
// //     </>
// //   );

// // }
// function App()
// {
//   const[evenno,updatedeveno]=useState(2)
//   function updateev(){
//     updatedeveno(2+evenno);
//   }
//  return( <>
//   <h1> This Is First Project Using Hooks

//   </h1>
//   <span>{evenno}</span><br></br>
//   <button onClick={updateev}>click to get next even no</button>
//   </>);
// }



// export default App;
