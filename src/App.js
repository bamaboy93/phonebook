import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LinearProgress } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import AppBar from "./components/AppBar";
import PublicRoute from "./components/Routes/PublicRoute/PublicRoute";
import PrivateRoute from "./components/Routes/PrivateRoute/PrivateRoute";

import operations from "./redux/auth/auth-operations";
import authSelectors from "./redux/auth/auth-selectors";

const VerifyView = lazy(() =>
  import("./views/VerifyView/VerifyView" /* webpackChunkName: "VerifyPage" */)
);

const LoginView = lazy(() =>
  import("./views/LoginView" /* webpackChunkName: "LoginPage" */)
);

const RegisterView = lazy(() =>
  import("./views/RegisterView" /* webpackChunkName: "RegistrationPage" */)
);

const ContactsView = lazy(() =>
  import(
    "./views/ContactsView/ContactsView" /* webpackChunkName: "ContactsPage" */
  )
);

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.isLoading);
  const isRefreshCurrentUser = useSelector(authSelectors.getIsRefreshCurrent);

  useEffect(() => {
    dispatch(operations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <LinearProgress />
      ) : (
        !isRefreshCurrentUser && (
          <>
            <Suspense fallback={null}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <PublicRoute restricted>
                      <LoginView />
                    </PublicRoute>
                  }
                />

                <Route
                  path="/register"
                  element={
                    <PublicRoute restricted>
                      <RegisterView />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/verified"
                  element={
                    <PublicRoute restricted>
                      <VerifyView />
                    </PublicRoute>
                  }
                />

                <Route
                  path="/login"
                  element={
                    <PublicRoute restricted>
                      <LoginView />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute>
                      <AppBar />
                      <ContactsView />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </Suspense>

            <ToastContainer position="top-center" autoClose={2000} />
          </>
        )
      )}
    </>
  );
};

export default App;

// https://phonebooknodejs.herokuapp.com/api/users/verify/undefined
