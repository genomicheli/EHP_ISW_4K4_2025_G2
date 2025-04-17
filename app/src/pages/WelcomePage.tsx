import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.tsx';

export default function WelcomePage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="form-container relative px-6">
      <div className="card">
      <img
          src="/ecoharmonyPark.png"
          style={{ height: '100px', marginBottom: '-2rem', objectFit: 'contain' }}
        />
      <div className="text-center flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold">¡Bienvenido, {user}!</h1>
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-sm">
          <button
            onClick={() => navigate('/purchase')}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Comprar
          </button>
          <button
            onClick={() => handleLogout()}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
