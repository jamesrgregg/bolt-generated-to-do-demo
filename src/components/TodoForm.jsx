import React, { useState } from 'react';

  function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue('');
    };

    return (
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a new todo"
        />
      </form>
    );
  }

  export default TodoForm;
