import { useSelector } from "react-redux";
import { Navigate } from "react-router";

import authSelectors from "../../../redux/auth/auth-selectors";

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const isLoggedIn = false;
  return isLoggedIn ? children : <Navigate to="/login" />;
}
