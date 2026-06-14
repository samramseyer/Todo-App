import React from 'react';
import TodoList from '../components/TodoList';

const Todos = () => {
  return (
    <div className="todos-container page-container">
      <header className="page-header">
        <p className="page-eyebrow">Task manager</p>
        <h1>My Todos</h1>
        <p className="page-subtitle">
          Keep track of everything you need to get done today.
        </p>
      </header>
      <TodoList />
    </div>
  );
};

export default Todos;
