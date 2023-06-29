import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import AddUser from "../components/users/AddUser";
import EditUser from "../components/users/EditUser";
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
    modalDelete: false,
  });
  const [selectedUser, setSelectedUser] = useState();

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
      <div className={styles.titleWrapper}>
        <h3 className={styles.pageTitle}>Liste des utilisateurs</h3>
      </div>
      <div className={styles.listWrapper}>
        <div className={styles.searchBox}>
          <label htmlFor="search" className={styles.label}>
            Rechercher
          </label>
          <input
            type="text"
            name="search"
            id="search"
            className={styles.input}
          />
        </div>
        {userList && userList.length !== 0 ? (
          <ul className={styles.userList}>
            {userList.map((user) => (
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
          isShow.modalAdd || isShow.modalEdit || isShow.modalDelete
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
    </main>
  );
}
