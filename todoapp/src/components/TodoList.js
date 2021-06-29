import React,{useState} from 'react';
import TodoForm from './TodoForm';


function TodoList() {
    const [todos,setTodos] =useState([]); // useState hook
    
    const addTodo = todo =>{
     if(!todo.text || /^\s*$/.test(todo.text))
     {
       return;
     }

     const newTodos = [todo, ...todos];// using spread operator to add items of todos array in newTodos
     setTodos(newTodos);
     console.log(...todos);
     

    };

    return (
        <div>
            <h1> What you wanna do today?</h1>
            <TodoForm onSubmit={addTodo}/>
   
        </div>
    );
}

export default TodoList;
