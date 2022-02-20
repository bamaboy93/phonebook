import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Loader from "./components/Loader";
import AppBar from "./components/AppBar";
import operations from "./redux/auth/auth-operations";

const LoginView = lazy(() =>
  import("./views/LoginView" /* webpackChunkName: "LoginPage" */)
);

const RegisterView = lazy(() =>
  import("./views/RegisterView" /* webpackChunkName: "RegistrationPage" */)
);

const ContactsView = lazy(() =>
  import("./views/ContactsView" /* webpackChunkName: "ContactsPage" */)
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/contacts/*" element={<ContactsView />} />
          <Route path="/register/*" element={<RegisterView />} />
          <Route path="/login/*" element={<LoginView />} />
        </Routes>
      </Suspense>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default App;
