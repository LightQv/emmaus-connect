import { useFormik } from "formik";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import { addSchema } from "../../services/validators";
import notifySuccess, { notifyError } from "../../services/toasts";
import APIService from "../../services/APIService";
import styles from "./AddUser.module.css";

export default function AddUser({ setIsShow }) {
  // Formik Logic
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "",
    },

    validationSchema: addSchema,

    onSubmit: async (values) => {
      try {
        const res = await APIService.post(`/users`, values);
        if (res) {
          notifySuccess("L'utilisateur a bien été ajouté.");
          setIsShow(false);
        } else throw new Error();
      } catch (error) {
        if (error.request.status === 401) {
          notifyError("La requête a échouée.");
        }
      }
    },
  });

  return (
    <>
      <h3 className={styles.formTitle}>Ajouter un utilisateur.</h3>
      <form
        action="add"
        onSubmit={formik.handleSubmit}
        className={styles.formWrapper}
      >
        <div className={styles.inputBox}>
          <label
            htmlFor="name"
            className={styles.label}
            style={
              formik.touched.name && formik.errors.name
                ? { color: "rgb(239, 3, 3)" }
                : { color: "var(--main-color-dark)" }
            }
          >
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : "Nom"}
          </label>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Nom de l'utilisateur"
            required=""
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={styles.input}
          />
        </div>
        <div className={styles.inputBox}>
          <label
            htmlFor="role"
            className={styles.label}
            style={
              formik.touched.role && formik.errors.role
                ? { color: "rgb(239, 3, 3)" }
                : { color: "var(--main-color-dark)" }
            }
          >
            {formik.touched.role && formik.errors.role
              ? formik.errors.role
              : "Role"}
          </label>
          <select
            name="role"
            id="role"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={styles.input}
          >
            <option value="">Selectionner un rôle</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>
        <div className={styles.inputBox}>
          <label
            htmlFor="email"
            className={styles.label}
            style={
              formik.touched.email && formik.errors.email
                ? { color: "rgb(239, 3, 3)" }
                : { color: "var(--main-color-dark)" }
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
                : { color: "var(--main-color-dark)" }
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
          disabled={!addSchema.isValidSync(formik.values)}
        >
          Ajouter
        </button>
      </form>
      <ToastContainer limit={1} />
    </>
  );
}

AddUser.propTypes = {
  setIsShow: PropTypes.func.isRequired,
};
