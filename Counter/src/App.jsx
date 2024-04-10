import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

let [counter , setCounter ] = useState(15);

  // let counter = 15 


  const addValue = () => {
    
      setCounter(counter + 1)
      
    }

 const removeValue = () => {
      
      setCounter(counter - 1)   
      
    }

if(counter<0){
  setCounter(counter==0)
}
else if(counter>20){
  setCounter(counter==20)
}

  return (
    <>
   <h1>Number Counter</h1>
   <h2>Counter Value  : {counter}</h2>

   <button onClick = {addValue} >Add value</button>

   <br />
   <br />

   <button onClick = {removeValue} >remove value </button>
    </>
  )
}

export default App
 