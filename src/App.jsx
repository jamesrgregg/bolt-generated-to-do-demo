import React, { useState } from 'react';
  import TodoList from './components/TodoList';
  import TodoForm from './components/TodoForm';

  function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
      const newTodos = [...todos, { text, completed: false }];
      setTodos(newTodos);
    };

    const toggleTodo = (index) => {
      const newTodos = [...todos];
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
    };

    const removeTodo = (index) => {
      const newTodos = todos.filter((_, i) => i !== index);
      setTodos(newTodos);
    };

    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Arena Si DevOps Demo ToDo App</h1>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        </div>
      </div>
    );
  }

  export default App;
