import React from 'react';
import './App.css';
import AddTodo from './Components/AddTodo';
import { TodoProvider } from './context/TodoContext';
import TodoList from './Components/TodoList';

function App() {
  return (
    <TodoProvider>
       <div className="container">
      <h1 className='app-Title'>To Do List</h1>
      <AddTodo/>
      <TodoList/>
    </div>
    </TodoProvider>
  ) 
}

export default App;
