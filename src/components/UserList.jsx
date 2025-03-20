// src/pages/UserList.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Список пользователей</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-2xl shadow-xl p-6 bg-gradient-to-br from-green-800 to-green-600 text-white hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={`https://i.pravatar.cc/150?img=${user.id}`}
              alt="avatar"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h2 className="mt-4 text-xl font-semibold text-center">
              {user.name.firstname} {user.name.lastname}
            </h2>
            <p className="text-center">{user.email}</p>
            <p className="text-center">
              {user.address.city}, {user.address.street}
            </p>
            <div className="mt-4 flex justify-center">
              <Link
                to={`/users/${user.id}`}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default UserList;
