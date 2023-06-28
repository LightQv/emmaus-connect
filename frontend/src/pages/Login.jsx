import { useFormik } from "formik";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import logo from "../assets/images/logo.svg";
import { useUserContext } from "../contexts/UserContext";
import "react-toastify/dist/ReactToastify.css";
import { loginSchema } from "../services/validators";
// import { notifyError } from "../services/ToastNotificationService";
// import FormError from "../components/FormError";
// import APIService from "../services/APIService";
import styles from "./Login.module.css";

export default function Login() {
  const { login } = useUserContext();
  const navigate = useNavigate();

  // Formik Logic
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginSchema,

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <main className={styles.page}>
      <form action="login" className={styles.formWrapper}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="adresse@mail.com"
            required=""
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            required=""
          />
        </div>
      </form>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <ToastContainer limit={1} />
    </main>
  );
}
