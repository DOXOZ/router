// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="container mx-auto px-6 py-8 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-2xl text-gray-600">Страница не найдена</p>
      <Link
        to="/users"
        className="mt-6 bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors"
      >
        Вернуться на главную
      </Link>
    </main>
  );
};

export default NotFound;
