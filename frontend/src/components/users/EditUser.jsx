import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import { editSchema } from "../../services/validators";
import notifySuccess, { notifyError } from "../../services/toasts";
import APIService from "../../services/APIService";
import styles from "./AddUser.module.css";

export default function EditUser({ selectedUser, setSelectedUser, setIsShow }) {
  const [userInfos, setUserInfos] = useState({
    name: "",
    email: "",
    role: "",
  });

  // Fetch user data
  useEffect(() => {
    APIService.get(`/users/${selectedUser}`)
      .then((res) => {
        setUserInfos({
          name: res.data.name,
          email: res.data.email,
          role: res.data.role,
        });
      })
      .catch((err) => {
        if (err.request?.status === 401) {
          notifyError(`${err.request?.status} : La requete a échouée.`);
        }
      });
  }, []);

  // Formik Logic
  const formik = useFormik({
    initialValues: {
      name: userInfos.name,
      email: userInfos.email,
      role: userInfos.role,
    },

    validationSchema: editSchema,

    onSubmit: async (values) => {
      try {
        const res = await APIService.put(`/users/${selectedUser}`, values);
        if (res) {
          notifySuccess("L'utilisateur a bien été modifié.");
          setSelectedUser();
          setIsShow({ modalEdit: false });
        } else throw new Error();
      } catch (error) {
        if (error.request?.status === 401) {
          notifyError("La requête a échouée.");
        }
      }
    },
  });

  useEffect(() => {
    formik.values.name = userInfos.name;
    formik.values.email = userInfos.email;
    formik.values.role = userInfos.role;
  }, [userInfos]);

  if (!userInfos) return null;
  return (
    <>
      <h3 className={styles.formTitle}>Modifier un utilisateur.</h3>
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
            required=""
            value={formik.values?.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={styles.input}
          />
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
            required=""
            value={formik.values?.email}
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
            value={formik.values?.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={styles.input}
          >
            <option value="">Selectionner un rôle</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>
        <button
          type="submit"
          onSubmit={formik.handleSubmit}
          className={styles.btn}
          disabled={!editSchema.isValidSync(formik.values)}
        >
          Modifier
        </button>
      </form>
      <ToastContainer limit={1} />
    </>
  );
}

EditUser.propTypes = {
  selectedUser: PropTypes.number.isRequired,
  setSelectedUser: PropTypes.func.isRequired,
  setIsShow: PropTypes.func.isRequired,
};
