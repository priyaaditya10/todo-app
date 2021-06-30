import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputFocus = useRef(null);

    // used to focus on value of inputFocus
    // useEffect is used as an alternative for componentdidmount and componentdidupdate methods
    useEffect(() => {
      // to get focu on text box
        inputFocus.current.focus();
    });

    // function to get invoked when text is changed
    const controlChange = e=>{
      setInput(e.target.value);
    };


    // function to be invoked on clickling on submit button
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
            {props.edit ? (<>
                <input type="text" placeholder="Update your item...." value={input} name="text" className="todo-input"
                    onChange={controlChange} ref={inputFocus} />
                <button className="todo-button">Update</button>
            </>):
            (
                <>
                <input type="text" placeholder="Add an item...." value={input} name="text" className="todo-input"
                    onChange={controlChange} ref={inputFocus} />
                <button className="todo-button">Add</button>
                </>
            )}
        </form>
    );
}

export default TodoForm;
