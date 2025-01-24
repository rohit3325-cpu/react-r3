import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>
      Learn about toolkit
    </h1>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
