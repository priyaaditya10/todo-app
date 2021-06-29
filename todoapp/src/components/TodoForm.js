import React, { useState } from 'react'

function TodoForm(props) {

    const [input, setInput] = useState('');

    const controlChange = e=>{
      setInput(e.target.value);
    };

    const controlSubmit = e =>{
        e.preventDefault(); // to prevent page to refreshing after submitting

        // for genrating random id for each todo
        props.onSubmit({
        id: Math.floor(Math.random()*10000),
        text: input
        });

        setInput(''); // onSubmit just set the state of input to an empty string
    };

    return (
        <form className="todo-form" onSubmit={controlSubmit}>
            <input type="text" placeholder="Add an item...." value={input} name="text" className="todo-input" onChange={controlChange}/>
            <button className="todo-button">Add</button>

        </form>
    );
}

export default TodoForm;
