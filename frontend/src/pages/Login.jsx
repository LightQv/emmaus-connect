import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import logo from "../assets/images/logo.svg";
import { useUserContext } from "../contexts/UserContext";
import "react-toastify/dist/ReactToastify.css";
import { loginSchema } from "../services/validators";
import { notifyError } from "../services/toasts";
import APIService from "../services/APIService";
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

    onSubmit: async (values) => {
      try {
        const res = await APIService.post(`/login`, values);
        if (res) {
          login(res.data);
          navigate("/calc");
        } else throw new Error();
      } catch (error) {
        if (error.request.status === 401) {
          notifyError("Email et/ou Mot de passe invalide.");
        }
      }
    },
  });
  return (
    <main className={styles.page}>
      <form
        action="login"
        onSubmit={formik.handleSubmit}
        className={styles.formWrapper}
      >
        <h3 className={styles.formTitle}>Connectez-vous.</h3>
        <div className={styles.inputBox}>
          <label
            htmlFor="email"
            className={styles.label}
            style={
              formik.touched.email && formik.errors.email
                ? { color: "rgb(239, 3, 3)" }
                : { color: "white" }
            }
          >
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : "Email"}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="adresse@mail.com"
            required=""
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={styles.input}
          />
        </div>
        <div className={styles.inputBox}>
          <label
            htmlFor="password"
            className={styles.label}
            style={
              formik.touched.password && formik.errors.password
                ? { color: "rgb(239, 3, 3)" }
                : { color: "white" }
            }
          >
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : "Mot de passe"}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            required=""
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={styles.input}
          />
        </div>
        <button
          type="submit"
          onSubmit={formik.handleSubmit}
          className={styles.btn}
          disabled={!loginSchema.isValidSync(formik.values)}
        >
          Connexion
        </button>
      </form>
      <div className={styles.boxLogo}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
      </div>
      <ToastContainer limit={1} />
    </main>
  );
}
