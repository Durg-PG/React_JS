import { useState, useCallback, useEffect,useRef } from 'react';
// import './App.css';

function App() {

  const [length, setLength] = useState(8)
  const [numberallowed , setNumberAllowed] = useState(false)
  const [charallowed , setCharAllowed] = useState(false)
  const[password, setPassword] = useState("")

  //reff Hook
  const passwordreff = useRef(null)

  //UseCallback(fn, dependencies) --> React Hook that lets you cache a function definition between re-renders
  const passwordGenerator= useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str+= "0123456789"
    if(charallowed) str+= "@$%&*!"

    for (let i = 1;  i <=length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)

  },[length, numberallowed, charallowed,setPassword]) //setPassword 

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordreff.current?.select()
    //window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberallowed, charallowed]
  )

  
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md
    rouned-lg px-6 py-4 my-9 text-orange-500 bg-gray-800 rounded-lg'>
      <h1 className='text-xl text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordreff}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div className='flex-text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type='range'
          min={8}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          ></input>
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='Checkbox'
          defaultChecked={numberallowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev) => !prev); //True of false value gets reversed
          }}
          ></input>
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='Checkbox'
          defaultChecked={charallowed}
          id='charInput'
          onChange={()=>{
            setCharAllowed((prev) => !prev); //True of false value gets reversed
          }}
          ></input>
          <label htmlFor='charInput'>Characters</label>
        </div>


      </div>
    </div>
    </>
  )
}
export default App;
