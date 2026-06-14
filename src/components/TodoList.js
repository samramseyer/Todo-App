import React, { useState } from 'react';

/**
 * TodoList component that manages a list of todos with full CRUD functionality
 * @component
 * @returns {JSX.Element} Complete todo management interface
 */
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();

    if (trimmedValue) {
      setTodos(prevTodos => [...prevTodos, {
        text: trimmedValue,
        completed: false,
        id: Date.now()
      }]);
      setInputValue('');
    }
  };

  const removeTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'completed':
        return todo.completed;
      case 'active':
        return !todo.completed;
      default:
        return true;
    }
  });

  const activeCount = todos.filter(t => !t.completed).length;
  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className="todo-list-container">
      <div className="todo-stats" aria-label="Todo statistics">
        <div className="todo-stat">
          <span className="todo-stat-value">{todos.length}</span>
          <span className="todo-stat-label">Total</span>
        </div>
        <div className="todo-stat">
          <span className="todo-stat-value">{activeCount}</span>
          <span className="todo-stat-label">Active</span>
        </div>
        <div className="todo-stat">
          <span className="todo-stat-value">{completedCount}</span>
          <span className="todo-stat-label">Done</span>
        </div>
      </div>

      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
          className="todo-input"
          aria-label="New todo input"
          required
        />
        <button type="submit" className="add-button">Add Todo</button>
      </form>

      <div className="filter-buttons" role="tablist" aria-label="Todo filters">
        <button
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
          role="tab"
          aria-selected={filter === 'all'}
        >
          All ({todos.length})
        </button>
        <button
          onClick={() => setFilter('active')}
          className={filter === 'active' ? 'active' : ''}
          role="tab"
          aria-selected={filter === 'active'}
        >
          Active ({activeCount})
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'active' : ''}
          role="tab"
          aria-selected={filter === 'completed'}
        >
          Completed ({completedCount})
        </button>
      </div>

      {filteredTodos.length === 0 ? (
        <div className="empty-message">
          <span className="empty-icon" aria-hidden="true">📝</span>
          <p>
            {filter === 'all'
              ? 'No todos yet. Add your first task above!'
              : `No ${filter} todos right now.`}
          </p>
        </div>
      ) : (
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <button
                type="button"
                className="todo-checkbox"
                onClick={() => toggleComplete(todo.id)}
                aria-label={`Mark "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
                aria-pressed={todo.completed}
              >
                {todo.completed && <span className="checkmark" aria-hidden="true">✓</span>}
              </button>
              <span
                className="todo-text"
                onClick={() => toggleComplete(todo.id)}
                role="button"
                tabIndex={0}
                aria-label={`Toggle completion for: ${todo.text}`}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleComplete(todo.id);
                  }
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => removeTodo(todo.id)}
                className="remove-button"
                aria-label={`Remove todo: ${todo.text}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
