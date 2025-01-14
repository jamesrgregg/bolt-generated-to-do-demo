import React from 'react';

  function TodoItem({ todo, index, toggleTodo, removeTodo }) {
    return (
      <li className="flex items-center justify-between mb-3 p-2 bg-gray-100 rounded-lg shadow-sm">
        <span
          className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
          onClick={() => toggleTodo(index)}
        >
          {todo.text}
        </span>
        <button
          className="ml-4 text-red-500 hover:text-red-700"
          onClick={() => removeTodo(index)}
        >
          Remove
        </button>
      </li>
    );
  }

  export default TodoItem;
