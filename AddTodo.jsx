import React, { useContext, useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
  const[title, setTitle] = useState('');
  const[todos, setTodos] = useContext(TodoContext);

  const addTodo = (e) => {
    if('' === title || undefined === title){
      alert('Field can not be blank');
      return;
    }

    const newTodos = [...todos, {id:uuidv4(), title: title, completed: false}];
    setTodos(newTodos);
    setTitle('');

  }
  return (
    <div className='form-input-container'>
      <input value={title} className='form-input' onChange={e => setTitle (e.target.value)} placeholder='Add a new task...'/>
      <button type='button' className='form-btn' onClick={addTodo}>Create</button>
      
    </div>
  )
}

export default AddTodo;
