import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//HOOKS
function App() {
   let [counterValue,setcounterValue]=useState(15);
  const addvalue=()=>{
    counterValue+=1;
    if(counterValue>20)
    { 
      counterValue=20;
      setcounterValue(20);
    }
    else
      setcounterValue(counterValue);
  }
  const subvalue=()=>{
    counterValue-=1;
    if(counterValue<0)
    { counterValue=0;
      setcounterValue(0);
    }
    else
      setcounterValue(counterValue);
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter button : {counterValue}</h2>
      <button onClick={addvalue}>increase value</button>
       <br/>
      <button onClick={subvalue}>decrease value</button>
    </>
  )
}

export default App
