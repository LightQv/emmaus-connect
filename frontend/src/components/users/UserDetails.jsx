import PropTypes from "prop-types";
import styles from "./UserDetails.module.css";
import edit from "../../assets/images/edit.svg";
import lock from "../../assets/images/lock.svg";
import deleteIcn from "../../assets/images/delete.svg";

export default function UserDetails({ user, setSelectedUser, setIsShow }) {
  const handleEdit = () => {
    setSelectedUser(user.id);
    setIsShow({ modalEdit: true });
  };
  const handleEditPw = () => {
    setSelectedUser(user.id);
    setIsShow({ modalEditPw: true });
  };
  const handleDelete = () => {
    setSelectedUser(user.id);
    setIsShow({ modalDelete: true });
  };

  return (
    <li className={styles.listBox}>
      <div className={styles.userContent}>
        <h3 className={styles.userName}>{user.name}</h3>
        <h3 className={styles.userEmail}>{user.email}</h3>
        <h3 className={styles.userRole}>{user.role}</h3>
      </div>
      <div className={styles.btnBox}>
        <button type="button" onClick={handleEdit} className={styles.btnEdit}>
          <img src={edit} alt="edit" className={styles.svgSize} />
        </button>
        <button type="button" onClick={handleEditPw} className={styles.btnEdit}>
          <img src={lock} alt="edit" className={styles.svgSize} />
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className={styles.btnDelete}
        >
          <img src={deleteIcn} alt="delete" className={styles.svgSize} />
        </button>
      </div>
    </li>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape().isRequired,
  setSelectedUser: PropTypes.func.isRequired,
  setIsShow: PropTypes.func.isRequired,
};
