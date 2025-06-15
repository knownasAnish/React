import React, {useState, useEffect} from 'react'
import {TodoProvider} from './contexts/index.js'
import Form from './components/Form.jsx'
import TodoItem from './components/TodoItem.jsx'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, {...todo, id:Date.now()}])
  }
  
  const updateTodo = (todo, id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => (
        prevTodo.id === id ? todo : prevTodo
      ))
    )
  }
  
  const deleteTodo = (id) => {
    setTodos((prev) => 
      prev.filter((prevTodo) => prevTodo.id !== id)
    )
  }

  const toggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
      )
    )
  }

  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem('todoStore'))
    if (todoStore && todoStore.length > 0) {
      setTodos(todoStore)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todoStore', JSON.stringify(todos))
  }, [todos])
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className='w-full min-h-screen bg-gray-900 flex flex-col items-center'>
        <h1 className='text-white font-bold text-3xl mt-10'>To Do List</h1>
        <Form />
        <div className='w-[80vw] h-fit p-5 mt-[3vh] flex flex-col items-center'>
          {todos.map((todo) => (
            <div className=' w-[60vw] ' key={todo.id}>
              <TodoItem todo={todo} />
            </div>
            ))
          }
        </div>
      </div>
      
    </TodoProvider>
  )
}

export default App
