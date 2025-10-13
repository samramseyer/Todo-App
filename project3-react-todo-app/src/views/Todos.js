import React from 'react';
import TodoList from '../components/TodoList';

const Todos = () => {
  return (
    <div className="todos-container">
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
};

export default Todos;