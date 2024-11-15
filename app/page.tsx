// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">ToDoアプリ ホーム</h1>

      <div className="flex space-x-4">
        <Link href="/todos" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          ToDo一覧
        </Link>

        <Link href="/todos/new" className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300">
          新しいToDoを追加
        </Link>
      </div>
    </div>
  );
}
