import { NavLink } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import styles from "./Navbar.module.css";
import logo from "../assets/logo.png";
import off from "../assets/off.svg";

export default function Navbar() {
  const { user, logout } = useUserContext();

  const navlinksAdmin = [
    { name: "CALCULATRICE", link: "calc" },
    { name: "PARAMÈTRES", link: "params" },
    { name: "UTILISATEURS", link: "users" },
    { name: "FAQ", link: "faq" },
  ];

  const navlinksUser = [
    { name: "CALCULATRICE", link: "calc" },
    { name: "FAQ", link: "faq" },
  ];

  return (
    <nav className={styles.nav}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul>
        {user.role === "Admin"
          ? navlinksAdmin.map((el) => (
              <li key={el.link}>
                <NavLink
                  to={`/${el.link}`}
                  type="button"
                  className={({ isActive }) =>
                    isActive ? `${styles.active} ${styles.link}` : styles.link
                  }
                >
                  {el.name}
                </NavLink>
              </li>
            ))
          : navlinksUser.map((el) => (
              <li key={el.link}>
                <NavLink
                  to={`/${el.link}`}
                  type="button"
                  className={({ isActive }) =>
                    isActive ? `${styles.active} ${styles.link}` : styles.link
                  }
                  style={{ justifyContent: "flex-end" }}
                >
                  {el.name}
                </NavLink>
              </li>
            ))}
        <li>
          <button type="button" onClick={() => logout()}>
            <img src={off} alt="disconnect" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
