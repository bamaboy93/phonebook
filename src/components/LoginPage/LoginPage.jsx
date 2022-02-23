import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { BsEye, BsEyeSlash } from "react-icons/bs";

import Container from "../Container";
import authOperations from "../../redux/auth/auth-operations";

import "./LoginPage.css";

export default function LoginPage() {
  const dispatch = useDispatch();

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const onCLick = (e) => {
    e.preventDefault();
    setIsPasswordHidden(!isPasswordHidden);
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email("Write correct email").required("Required"),
    password: yup
      .string()
      .min(6)
      .typeError("Must be a string")
      .required("Required"),
  });

  const handleSubmit = (e) => {
    // e.preventDefault();
    const email = e.email;
    const password = e.password;
    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validateOnBlur
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      onCLick={onCLick}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div class="loginMain">
          <Container>
            <div class="container">
              <h1 class="title">Phonebook</h1>
              <div class="screen">
                <div class="screen__content">
                  <form class="login" autoComplete="off">
                    <div class="login_field">
                      <i class="login__icon fas fa-user"></i>
                      <input
                        class="login__input"
                        type={`text`}
                        name={`email`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        id="mail"
                        placeholder="E-mail"
                      />
                      {touched.email && errors.email && (
                        <p class="loginError">{errors.email}</p>
                      )}
                    </div>
                    <div class="login_field password">
                      <i class="login__icon fas fa-lock"></i>
                      <input
                        class="login__input"
                        type={isPasswordHidden ? "password" : "text"}
                        name={`password`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        id="password"
                        placeholder="Password"
                        autoComplete="off"
                      />

                      <button class="loginIconEye" onClick={onCLick}>
                        {isPasswordHidden ? <BsEye /> : <BsEyeSlash />}
                      </button>

                      {touched.password && errors.password && (
                        <p className={"loginError"}>{errors.password}</p>
                      )}
                    </div>

                    <button class="button login__submit" onClick={handleSubmit}>
                      <span class="button__text">Log In </span>
                      <i class="button__icon fas fa-chevron-right"></i>
                    </button>
                    <div class="signUpButton">
                      <NavLink to="/register">Sign Up</NavLink>
                    </div>
                  </form>
                  <div class="social-login">
                    <h3>log in via</h3>
                    <div class="social-icons">
                      <button class="logButton google-button" type="button">
                        Google
                      </button>
                    </div>
                  </div>
                </div>
                <div class="screen__background">
                  <span class="screen__background__shape screen__background__shape4"></span>
                  <span class="screen__background__shape screen__background__shape3"></span>
                  <span class="screen__background__shape screen__background__shape2"></span>
                  <span class="screen__background__shape screen__background__shape1"></span>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </Formik>
  );
}
