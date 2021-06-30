import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="container">
     <div className="col-6 todo-app">
      
      <TodoList/>
      
     </div>
    </div>
  );
}

export default App;
