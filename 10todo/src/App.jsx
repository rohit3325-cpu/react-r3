import { useState } from 'react'

import './App.css'
import { Todoprovider } from './context'
import { useEffect } from 'react'
import { TodoForm, Todoitem } from './components'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const updateTodo = (id,todo)=>{
       setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id)=>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id) )
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ?  {...prevTodo, completed: !prevTodo.completed}: prevTodo))
  }
  // local storage work on browser if you go to any server then browser local storage will not haandle this.
  useEffect(()=>{
    //  localStorage.getItem("todos") these all values are in stirng so we want in json format
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0){
       setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <Todoprovider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen w-full pl-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg text-white px-4 py-3 ">
                    <h1 className="text-2xl font-bold text-center text-black mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'>
                              <Todoitem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
