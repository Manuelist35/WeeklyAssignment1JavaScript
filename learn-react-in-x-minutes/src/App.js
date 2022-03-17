import React, { useState } /*Here we are defining our state for this app beacuse the way react works is based on states so whenver the sate chenges also the app re renders and changes based on the new state  and we want to store our state for the todos in order to rerender whenver our todos change too*/from 'react';
import TodoList from './TodoList' // here we are importing this component from the file that is linked in this same line which is our ToDoList component

function App() {
  const /*the useSatate fiunction gives originally an array so with this variable we are destructuring this array in two different elemnts the first is gonna be our total todos and the second element is gonna be a function that allow us to update our todos */ [todos, setTodos] = useState(['Todo 1', 'Todo 2']) //in this line we are calling the useState function with an initial value for our todos which is gonna be an empty array
  return ( // here inside our app component (which is gonna be the root of our app) we are calling this function in order to return some html tags that we are writting in to display them inside our app 
    <> {/* Here we are creating a fragment and the reason why we are creating a fragment right here it's beacuse a common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. because you cannot put two jsx alements inside our return otherwise is gonna provoke an error but that's why here we are using the fragment*/}
    <TodoList todos={todos}/> {/*this is the first component inside our app which is gonna be an independant component*/}
    < input type="text" />
    <button>Add Todo</button>
    <button>Clear complete</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
