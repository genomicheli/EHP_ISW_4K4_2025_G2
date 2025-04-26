import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/EHP_PAGE_LoginPage.tsx';
import WelcomePage from './pages/EHP_PAGE_WelcomePage.tsx';
import PurchasePage from './pages/EHP_PAGE_PurchasePage.tsx';
import SuccessPage from './pages/EHP_PAGE_SuccessPage.tsx';
import { AuthProvider, useAuth } from './context/EHP_CTX_AuthContext.tsx';
import { JSX } from 'react';

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/welcome" element={<ProtectedRoute><WelcomePage /></ProtectedRoute>} />
          <Route path="/purchase" element={<ProtectedRoute><PurchasePage /></ProtectedRoute>} />
          <Route path="/success" element={<ProtectedRoute><SuccessPage /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;