import { useState } from 'react'
import './App.css'
import { TodoContext } from './context/TodoContext'
import TodoPage from './components/TodoPage'

function App() {
  const [todos, setTodos] = useState([{
    title: 'Todo 1',
    isDone: false
  }])


  return (
    <>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <TodoPage/>
      </TodoContext.Provider>
    </>
  )
}

export default App
