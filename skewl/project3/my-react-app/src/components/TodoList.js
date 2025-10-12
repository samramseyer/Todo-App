import React, { useState } from 'react';

/**
 * TodoList component that manages a list of todos with full CRUD functionality
 * Features: Add, remove, toggle completion, and filter todos by status
 * @component
 * @returns {JSX.Element} Complete todo management interface
 */
const TodoList = () => {
  // State management for todos and UI
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  /**
   * Adds a new todo item to the list
   * @param {Event} e - Form submission event
   */
  const addTodo = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    
    if (trimmedValue) {
      setTodos(prevTodos => [...prevTodos, { 
        text: trimmedValue, 
        completed: false,
        id: Date.now() // Simple ID generation
      }]);
      setInputValue('');
    }
  };

  /**
   * Removes a todo item from the list
   * @param {number} index - Index of the todo to remove
   */
  const removeTodo = (index) => {
    setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
  };

  /**
   * Toggles the completion status of a todo item
   * @param {number} index - Index of the todo to toggle
   */
  const toggleComplete = (index) => {
    setTodos(prevTodos => 
      prevTodos.map((todo, i) => 
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  /**
   * Filters todos based on current filter setting
   * @returns {Array} Filtered array of todos
   */
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

  return (
    <div className="todo-list-container">
      {/* Add new todo form */}
      <form onSubmit={addTodo} className="todo-form">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Add a new todo" 
          className="todo-input"
          aria-label="New todo input"
          required 
        />
        <button type="submit" className="add-button">Add Todo</button>
      </form>

      {/* Filter buttons */}
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
          Active ({todos.filter(t => !t.completed).length})
        </button>
        <button 
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'active' : ''}
          role="tab"
          aria-selected={filter === 'completed'}
        >
          Completed ({todos.filter(t => t.completed).length})
        </button>
      </div>

      {/* Todo list */}
      {filteredTodos.length === 0 ? (
        <p className="empty-message">
          {filter === 'all' ? 'No todos yet. Add one above!' : `No ${filter} todos.`}
        </p>
      ) : (
        <ul className="todo-list">
          {filteredTodos.map((todo, index) => (
            <li key={todo.id || index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <span 
                className="todo-text"
                onClick={() => toggleComplete(index)}
                role="button"
                tabIndex={0}
                aria-label={`Toggle completion for: ${todo.text}`}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleComplete(index);
                  }
                }}
              >
                {todo.text}
              </span>
              <button 
                onClick={() => removeTodo(index)}
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