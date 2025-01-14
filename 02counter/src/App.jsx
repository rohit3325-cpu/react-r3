import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // useState ->it is a hooks.
 let [counter, setCounter]= useState(15)
 let [count, setCount]= useState(15)
  // let counter = 15
  // let count = 15

  const addValue = () => {
    if(counter >= 30){
         counter = 30;
         setCounter(counter)
    }
    else{
    counter= counter+1;
    setCounter(counter)
    }
  }
  const reducevalue = ()=> {
    console.log("clicked",count);
    if(count <= 0){
        count=0;
        setCount(count)
    }else{
    count= count-1;
    setCount(count)
    }
    
  }
  // Babel is a JavaScript compiler that enables React developers to use modern ES6+ features and JSX syntax by converting them into browser-compatible JavaScript.

  return (
    <>
     <h1>Hello here it's Rohit!</h1>
     <h2>Counter value: {counter}</h2>
     <button
     onClick={addValue}>Add value : {counter}</button>
     <br />
     <button
     onClick={reducevalue}>remove value :{count}</button>
     <footer>{counter}</footer>
    </>
  )
}

export default App
