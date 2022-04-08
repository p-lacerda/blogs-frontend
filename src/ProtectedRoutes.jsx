import { Navigate, Outlet } from "react-router-dom";
import { connect } from 'react-redux';

const useAuth = (name) => {
  const user = { loggedIn: name !== '' };
  return user && user.loggedIn;
}

const ProtectedRoutes = (props) => {
  const { name } = props;
  const isAuth = useAuth(name);
  return isAuth ? <Outlet /> : <Navigate to="/signup" />
}

const mapStateToProps = (state) => {
  const { user } = state;
  return user;
};

export default connect(mapStateToProps, null)(ProtectedRoutes);

