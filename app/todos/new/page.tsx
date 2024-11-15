// app/todos/new/page.tsx
'use client';

import { useState } from 'react';

const NewTodo = () => {
  const [task, setTask] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify({ task }),
      headers: { 'Content-Type': 'application/json' },
    });

    setTask('');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">新しいToDoを追加</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="新しいToDo"
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        <button
          type="submit"
          className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
        >
          追加
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
