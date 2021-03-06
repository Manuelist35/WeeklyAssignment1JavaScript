import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAddToDo(e) {
    const name = todoNameRef.current.value
    if (name === '') return 
    setTodos(prevTodos =>{
      return[...prevTodos, { id: uuidv4(), name:name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  return (
   <>
     <TodoList todos={todos}/>
     <input ref={todoNameRef} type="text" />
     <button onClick={handleAddToDo}>Add Todo</button>
     <button>Clear completed Todos</button>
     <div>0 left Todos</div>
   </>
  )
}

export default App;
