// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      {/* Header будет отображаться на всех страницах */}
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
