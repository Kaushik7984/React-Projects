import { useCallback, useState , useEffect,  useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
const [length , setLength] =  useState(8)
const [numberAllowed , setNumberAllowed] =  useState(false);
const [charAllowed , setCharAllowed] =  useState(true);
const [password , setPassword] =  useState("");

//useRef hook

const passwordRef = useRef(null)

const passwordGenerator = useCallback(() => {

let pass = ""
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "

if(numberAllowed) str += "0123456789"
if(charAllowed) str += "!@#$%^&*()_+"

for (let i = 0; i < length; i++) {
  let char = Math.floor(Math.random() * str.length + 1)
  pass += str.charAt(char)

}
setPassword(pass)

} ,[length,numberAllowed , charAllowed, setPassword ] )

const copyPasswordToClipboard = useCallback( ()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(  () => {
  passwordGenerator()
}, [length,numberAllowed , charAllowed,passwordGenerator])
  return (
    <>
    <div className='w-full max-w-[26rem] mx-96 items-center  py-3 shadow-md rounded-lg px-4 my-8  text-orange-600 bg-gray-800'> 
      <h1 className='text-white text-center text-lg'>Password Generator</h1>
      <div className='flex rounded-lg shadow text-orange-600 overflow-hidden m-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password '
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='  rounded-s-none bg-orange-600 text-black px-3 py-1
            active:bg-orange-500 font-thin'>Copy</button>


       </div>
       <div className='flex text-sm gap-x-3'>
       <div className='flex items-center gap-x-3 '>
        <input
         type="range"
         min={6}
         max={100}
         value={length}
         className='cursor-pointer'
         onChange={ (e) => {setLength(e.target.value)}}
         />
         <label htmlFor="">Length: {length}</label>

       </div>
       <div className='flex items-center gap-x-1'>
        <input
         type="checkbox"
         defaultChecked = {numberAllowed}
         id='numberInput'
         onChange={ () => {
          setNumberAllowed((prev) =>!prev )
         }}
         />
         <label htmlFor="numberInput">Number</label>

       </div>
       
       <div className='flex items-center gap-x-1'>
        <input
         type="checkbox"
         defaultChecked = {charAllowed}
         id='characterInput'
         onChange={ () => {
          setCharAllowed((prev) => ! prev )
         }}
         />
         <label htmlFor="characterInput">Characters</label>

       </div>
       
       </div>
       

     </div>
    </>
  )
}

export default App
