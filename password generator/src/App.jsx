import { useState,useCallback,useEffect,useRef} from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed]=useState(false);
  const [charallowed,setCharallowed]=useState(false);
  const [password,setPassword]=useState("");
  
  //useRef hook
  const passwordRef=useRef(null);
  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberallowed)
       str+="0123456789";
    if(charallowed)
       str+="!@#$%^&*(){}[]~";  
    for(let i=1;i<=length;i++)
    {
      let char=Math.floor(Math.random()*(str.length+1));
      pass+=str.charAt(char);
    }
    setPassword(pass);
  },[length,numberallowed,charallowed,setPassword])
  //setPassword used for memoization 
  const copypasswordtoclipboard=useCallback(()=>{ 
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
      passwordGenerator()
  },[length,numberallowed,charallowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto text-center shadow-mdrounded-lg bg-gray-700 text-orange-500 px-4 py-2'>
        
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden py-2'>
        <input 
        type="text"
        value={password}
        placeholder='Password'
        readOnly
        className='outline-none w-full px-3 py-1'
        ref={passwordRef}
        />
        <button onClick={copypasswordtoclipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}} 
            />
            <label>length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
             defaultChecked={numberallowed}
             id="numberInput"
             className='cursor-pointer'
             onChange={(e)=>
              {setNumberallowed((prev)=>!(prev))}}
             />
            <label>Numbers</label> 
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
             defaultChecked={charallowed}
             id="numberInput"
             className='cursor-pointer'
             onChange={(e)=>
              {setCharallowed((prev)=>!(prev))}}
             />
            <label>Characters</label> 
          </div>
        </div>
      </div>
    </>
  )
}

export default App
