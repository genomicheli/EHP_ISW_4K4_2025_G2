import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/EHP_CTX_AuthContext';
import { useState } from 'react';

export default function LoginPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const users = [{ username: 'usuario', password: 'abcd' }];
    const userValid = users.find(u => u.username === username && u.password === password);

    if (userValid) {
      login(username);
      navigate('/welcome');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="form-container flex justify-center items-center mt-10">
      <div className="card">
        <img
          src="/ecoharmonyPark.png"
          style={{ height: '100px', marginBottom: '-2rem', objectFit: 'contain' }}
        />
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md w-80">
          <h1 className="text-3xl font-bold mb-4">Iniciar Sesión</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Usuario"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}