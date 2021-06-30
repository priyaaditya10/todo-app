import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]); // using react useState hooks

    // function for adding new todo item
    const addTodo = todo => {
        // check if user entered spaces for todo or left it blank
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos]; // using spread operator to append todos array items with todo

        setTodos(newTodos);   // updating new todos to todos array
        console.log(...todos);
    };

    // function to remove items from todo list
    const removeTodo = id => {
        // checking and passing all todoitems to removedItem whose id do not match with element which is removed id
        const removedItem = [...todos].filter(todo => todo.id !== id);

        setTodos(removedItem);
    };

    // function to edit value of and todoitem
    const updateTodo =( id, updatedValue) => {
        if (!updatedValue.text || /^\s*$/.test(updatedValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === id ? updatedValue : item)));

    };

  // function to check whether a todo item is completed or not
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <>
            <h1>What you wanna do today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </>
    );
}

export default TodoList;