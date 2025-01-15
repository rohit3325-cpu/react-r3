import { useState, useCallback, useEffect,useRef } from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [Password, setpassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) { str += "0123456789"}
    if(characters){ str += "!@#$%^&{}[]+-/*~'"}
    for (let i = 1; i <= length;i++){
          let char = Math.floor(Math.random()*str.length +1)
          pass += str.charAt(char)
    }
    setpassword(pass)
  } , [length,numberAllowed,characters,setpassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
        window.navigator.clipboard.writeText(Password);
    
}, [passwordRef])

 useEffect(() => {
  passwordGenerator()
 }, [length,numberAllowed,characters,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className=' text-center text-white  my-3'>Password Generator</h1>
      
        <div className='flex shadow rounded-lg overflow-hidden mb-8 '>
          <input type="text" 
          value={Password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard} 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0  '
          >copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
         type="range"
         min={6}
         max={40}
         value={length}
         className='cursor-pointer'
         onChange={(e) => {setlength(e.target.value)}}
           />
           <label >Length :{length}</label>
      </div>
       <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setnumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={characters}
              id="characterInput"
              onChange={() => {
              setCharacters((prev) => !prev);
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
