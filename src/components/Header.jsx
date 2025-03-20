// src/components/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 flex justify-between items-center px-6 py-4 shadow-lg">
      <Link to="/users" className="text-2xl font-extrabold tracking-tight text-white">
        My Users App
      </Link>
      <nav>
        <Link to="/users" className="px-4 py-2 text-white hover:underline transition-colors">
          Список пользователей
        </Link>
      </nav>
    </header>
  );
};

export default Header;
