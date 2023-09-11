import { useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  return isAuth ? <Outlet /> : navigate('/signIn');
};

export default PrivateRoute;
