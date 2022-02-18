import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Loader from "./components/Loader";
import AppBar from "./components/AppBar";

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
