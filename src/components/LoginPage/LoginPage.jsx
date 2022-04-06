import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { BsEye, BsEyeSlash } from "react-icons/bs";

import googleIcon from "../../images/icons/google.svg";
import authOperations from "../../redux/auth/auth-operations";

import styles from "./LoginPage.module.scss";

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
        <div className={styles.loginMain}>
          <div className={styles.container}>
            <h1 className={styles.title}>Phonebook</h1>
            <div className={styles.screen}>
              <div className={styles.screenContent}>
                <form className={styles.login} autoComplete="off">
                  <div className={styles.loginField}>
                    <input
                      className={styles.loginInput}
                      type={`text`}
                      name={`email`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      id="mail"
                      placeholder="E-mail"
                    />
                    {touched.email && errors.email && (
                      <p className={styles.loginError}>{errors.email}</p>
                    )}
                  </div>
                  <div className={styles.loginField}>
                    <input
                      className={styles.loginInput}
                      type={isPasswordHidden ? "password" : "text"}
                      name={`password`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      id="password"
                      placeholder="Password"
                      autoComplete="off"
                    />

                    <button className={styles.loginIconEye} onClick={onCLick}>
                      {isPasswordHidden ? <BsEye /> : <BsEyeSlash />}
                    </button>

                    {touched.password && errors.password && (
                      <p className={"loginError"}>{errors.password}</p>
                    )}
                  </div>

                  <button className={styles.loginSubmit} onClick={handleSubmit}>
                    <span className={styles.buttonText}>Sign In </span>
                  </button>
                  <div className={styles.signUpButton}>
                    <NavLink to="/register">Sign Up</NavLink>
                  </div>
                </form>
                <div className={styles.socialLogin}>
                  <h3>Sign In with</h3>
                  <div className={styles.socialIcons}>
                    <a href="" className={styles.googleButton}>
                      <img
                        src={googleIcon}
                        alt="google icon"
                        className={styles.icon}
                      ></img>
                      Google
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.screenBackground}>
                <span className={styles.screenBackgroundShape4}></span>
                <span className={styles.screenBackgroundShape3}></span>
                <span className={styles.screenBackgroundShape2}></span>
                <span className={styles.screenBackgroundShape1}></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
