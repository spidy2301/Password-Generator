import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState("olive");

  return (
    <>
     <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
          <div className='flex flex-wrap justify-center gap-3 px-3 py-1 shadow-lg rounded-3xl bg-white'>
            <button onClick={()=>setColor("red")} className='outline-none justify-center rounded-full shadow-lg px-4 py-1'
                    style={{backgroundColor:"red"}}>
              RED
            </button>
            <button onClick={()=>setColor("yellow")} className='outline-none justify-center rounded-full shadow-lg px-4 py-1'
                    style={{backgroundColor:"yellow"}}>
              YELLOW
            </button>
            <button onClick={()=>setColor("blue")} className='outline-none justify-center rounded-full shadow-lg px-4 py-1'
                    style={{backgroundColor:"blue"}}>
              BLUE
            </button>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App
