import { useFormik } from "formik";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import { passwordSchema } from "../../services/validators";
import notifySuccess, { notifyError } from "../../services/toasts";
import APIService from "../../services/APIService";
import styles from "./AddUser.module.css";

export default function EditPwUser({
  selectedUser,
  setSelectedUser,
  setIsShow,
}) {
  const [verifPw, setVerifPw] = useState("");
  // Formik Logic
  const formik = useFormik({
    initialValues: {
      password: "",
    },

    validationSchema: passwordSchema,

    onSubmit: async (values) => {
      if (values.password === verifPw) {
        try {
          const res = await APIService.put(`/users/pw/${selectedUser}`, values);
          if (res) {
            notifySuccess("Le mot de passe a bien été modifié.");
            setSelectedUser();
            setIsShow({ modalEditPw: false });
          } else throw new Error();
        } catch (error) {
          if (error.request?.status === 401) {
            notifyError("La requête a échouée.");
          }
        }
      } else notifyError("Les deux mots de passes ne sont pas identiques.");
    },
  });

  return (
    <>
      <h3 className={styles.formTitle}>Changer de mot de passe.</h3>
      <form
        action="add"
        onSubmit={formik.handleSubmit}
        className={styles.formWrapper}
      >
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
              : "Confirmation mot de passe"}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            required=""
            // value={target.value}
            onChange={(e) => setVerifPw(e.target.value)}
            onBlur={formik.handleBlur}
            className={styles.input}
          />
        </div>
        <button
          type="submit"
          onSubmit={formik.handleSubmit}
          className={styles.btn}
          disabled={!passwordSchema.isValidSync(formik.values)}
        >
          Modifier
        </button>
      </form>
      <ToastContainer limit={1} />
    </>
  );
}

EditPwUser.propTypes = {
  selectedUser: PropTypes.number.isRequired,
  setSelectedUser: PropTypes.func.isRequired,
  setIsShow: PropTypes.func.isRequired,
};
