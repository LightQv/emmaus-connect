import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import AddUser from "../components/users/AddUser";
import EditUser from "../components/users/EditUser";
import EditPwUser from "../components/users/EditPwUser";
import DeleteUser from "../components/users/DeleteUser";
import UserDetails from "../components/users/UserDetails";
import APIService from "../services/APIService";
import { notifyError } from "../services/toasts";
import styles from "./Users.module.css";

export default function Users() {
  const [userList, setUserList] = useState(null);
  const [isShow, setIsShow] = useState({
    modalAdd: false,
    modalEdit: false,
    modalEditPw: false,
    modalDelete: false,
  });
  const [selectedUser, setSelectedUser] = useState();
  const [selectedRole, setSelectedRole] = useState();

  useEffect(() => {
    APIService.get(`/users`)
      .then((res) => {
        setUserList(res.data);
      })
      .catch((err) => {
        if (err.request.status === 401) {
          notifyError(`${err.request.status} : La requete a échouée.`);
        }
      });
  }, [isShow]);

  return (
    <main className={styles.page}>
      <div className={styles.empty} />
      <div className={styles.userContent}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.pageTitle}>Liste des utilisateurs</h3>
        </div>
        <div className={styles.listWrapper}>
          <div className={styles.searchBox}>
            <label htmlFor="search" className={styles.label}>
              Filtrer par rôle
            </label>
            <select
              name="role"
              id="role"
              className={styles.input}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="">Tous</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>
          {userList && userList.length !== 0 ? (
            <ul className={styles.userList}>
              {userList
                .filter((user) =>
                  selectedRole ? user.role === selectedRole : user
                )
                .map((user) => (
                  <UserDetails
                    key={user.id}
                    user={user}
                    setSelectedUser={setSelectedUser}
                    setIsShow={setIsShow}
                  />
                ))}
            </ul>
          ) : (
            <p>Aucun utilisateur disponible.</p>
          )}
          <button
            type="button"
            className={styles.btnAdd}
            onClick={() => setIsShow({ modalAdd: true })}
          >
            Ajouter un utilisateur
          </button>
        </div>
        <div
          className={
            isShow.modalAdd ||
            isShow.modalEdit ||
            isShow.modalEditPw ||
            isShow.modalDelete
              ? styles.modalOpen
              : styles.modalHidden
          }
        >
          {isShow.modalAdd && (
            <Modal component={<AddUser />} setIsShow={setIsShow} />
          )}
          {isShow.modalEdit && (
            <Modal
              component={
                <EditUser
                  selectedUser={selectedUser}
                  setSelectedUser={setSelectedUser}
                />
              }
              setIsShow={setIsShow}
            />
          )}
          {isShow.modalEditPw && (
            <Modal
              component={
                <EditPwUser
                  selectedUser={selectedUser}
                  setSelectedUser={setSelectedUser}
                />
              }
              setIsShow={setIsShow}
            />
          )}
          {isShow.modalDelete && (
            <Modal
              component={
                <DeleteUser
                  selectedUser={selectedUser}
                  setSelectedUser={setSelectedUser}
                  setIsShow={setIsShow}
                />
              }
              setIsShow={setIsShow}
            />
          )}
        </div>
      </div>
    </main>
  );
}
