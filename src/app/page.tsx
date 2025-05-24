'use client';

import { useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const removeTodo = (index: number) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">📝 ToDo App</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="flex-1 px-4 py-2 border rounded"
            placeholder="Enter a new task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 bg-gray-100 rounded"
            >
              <span>{todo}</span>
              <button
                onClick={() => removeTodo(index)}
                className="text-red-500 hover:text-red-700"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
