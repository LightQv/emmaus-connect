import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import notifySuccess, { notifyError } from "../../services/toasts";
import APIService from "../../services/APIService";
import styles from "./DeleteUser.module.css";

export default function DeleteUser({
  selectedUser,
  setSelectedUser,
  setIsShow,
}) {
  // Submit Delete Protocol Request
  const handleDelete = async () => {
    try {
      const res = await APIService.delete(`/users/${selectedUser}`);
      if (res) {
        notifySuccess("L'utilisateur a bien été supprimé.");
        setSelectedUser();
        setIsShow({ modalDelete: false });
      }
      throw new Error();
    } catch (err) {
      if (err.request?.status === 500) {
        notifyError("La requête a échouée.");
      }
    }
  };

  return (
    <div className={styles.deleteModal}>
      <h3 className={styles.deleteTitle}>Supprimer cet utilisateur ?</h3>
      <div className={styles.btnBox}>
        <button type="button" className={styles.btnYes} onClick={handleDelete}>
          Oui
        </button>
        <button
          type="button"
          className={styles.btnNo}
          onClick={() => setIsShow({ modalDelete: false })}
        >
          Non
        </button>
      </div>
      <ToastContainer limit={1} />
    </div>
  );
}

DeleteUser.propTypes = {
  selectedUser: PropTypes.number.isRequired,
  setSelectedUser: PropTypes.func.isRequired,
  setIsShow: PropTypes.func.isRequired,
};
