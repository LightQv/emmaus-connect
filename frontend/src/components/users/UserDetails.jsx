import PropTypes from "prop-types";
import styles from "./UserDetails.module.css";

export default function UserDetails({ user, setSelectedUser, setIsShow }) {
  const handleEdit = () => {
    setSelectedUser(user.id);
    setIsShow({ modalEdit: true });
  };
  const handleDelete = () => {
    setSelectedUser(user.id);
    setIsShow({ modalDelete: true });
  };

  return (
    <li>
      <div>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
        <h3>{user.role}</h3>
      </div>
      <div>
        <button type="button" onClick={handleEdit} className={styles.btnEdit}>
          Edit
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className={styles.btnDelete}
        >
          Del
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
