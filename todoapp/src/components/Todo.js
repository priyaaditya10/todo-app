import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { FaEdit} from 'react-icons/fa';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'} // checking if a todo is complete or not
            key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiDeleteBin5Fill onClick ={()=> removeTodo(todo.id)} className="remove-icon" />
                <FaEdit onClick={()=> setEdit({id: todo.id, value: todo.text})} className="edit-icon" />
            </div>
        </div>
    ));
};

export default Todo;