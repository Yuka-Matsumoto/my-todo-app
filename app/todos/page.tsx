// app/todos/page.tsx
'use client';

import { useState, useEffect } from 'react';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch('/api/todos');
      const data = await res.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">ToDo一覧</h1>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li key={todo.id} className="bg-white shadow-md rounded-lg p-4">
            {todo.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
