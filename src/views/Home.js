import React from 'react';
import TodoList from '../components/TodoList';

/**
 * Home page with a live todo list demo
 * @component
 * @returns {JSX.Element} Todo list landing page
 */
const Home = () => {
  return (
    <div className="home-container page-container">
      <header className="page-header">
        <p className="page-eyebrow">Your daily planner</p>
        <h1>Todo List</h1>
        <p className="page-subtitle">
          Add tasks, mark them complete, and filter by status — all in one clean workspace.
        </p>
      </header>
      <TodoList />
    </div>
  );
};

export default Home;
