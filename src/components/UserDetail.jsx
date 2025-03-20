// src/pages/UserDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!user)
    return (
      <p className="container mx-auto px-6 py-8 text-center text-lg">Загрузка...</p>
    );

  return (
    <main className="container mx-auto px-6 py-8">
      <div className="bg-gradient-to-br from-green-800 to-green-600 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto text-white">
        <h1 className="text-3xl font-bold text-center mb-6">
          {user.name.firstname} {user.name.lastname}
        </h1>
        <div className="space-y-4">
          <div>
            <p className="text-lg">
              <strong>Username:</strong> {user.username}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-lg">
              <strong>Пароль:</strong> {showPassword ? user.password : '••••••••'}
            </p>
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="ml-4 text-blue-200 underline"
            >
              {showPassword ? 'Скрыть' : 'Показать'}
            </button>
          </div>
          <div>
            <p className="text-lg">
              <strong>Email:</strong> {user.email}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Адрес</h2>
            <p className="text-lg">
              {user.address.number} {user.address.street}
            </p>
            <p className="text-lg">
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
          <div>
            <p className="text-lg">
              <strong>Телефон:</strong> {user.phone}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Геолокация</h2>
            <p className="text-lg">
              Широта: {user.address.geolocation.lat}
            </p>
            <p className="text-lg">
              Долгота: {user.address.geolocation.long}
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/users"
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors"
          >
            Назад к списку пользователей
          </Link>
        </div>
      </div>
    </main>
  );
};

export default UserDetail;
