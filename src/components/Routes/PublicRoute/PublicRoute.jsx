import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import authSelectors from "../../../redux/auth/auth-selectors";

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const isLoggedIn = false
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
}
