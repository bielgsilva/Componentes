import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { getItem } from './routes/storage';
import UseUser from './hooks/useUser';
import Main from './pages/Main'

function MainRoutes() {
  const { setIsAuthenticated } = UseUser();
  const isAuthenticated = getItem('token');

  function ProtectedRoutes({ redirectTo }) {
    setIsAuthenticated(true)
    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
  }

  return (
    <Routes>


      <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Main />} />

      <Route element={<ProtectedRoutes redirectTo="" />}>
   
      </Route>
    </Routes>
  );
}

export default MainRoutes;
