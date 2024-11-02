import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loda from './components/loda'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className='bg-green-400 text-white p-4 rounded-xl'>Tailwind test</h1>
      <Loda username="shresth" profession='software'/>
      <Loda username="gadhwala" />
    </>
  )
}

export default App
