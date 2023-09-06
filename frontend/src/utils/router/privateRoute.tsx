import { Navigate, Outlet } from 'react-router-dom';
import { IPropsPrivateRoute } from './interfaces';

const PrivateRoute: React.FC< IPropsPrivateRoute> = (props: IPropsPrivateRoute): JSX.Element => {
  return props.token ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRoute;
