import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/logo.png";
import off from "../assets/off.svg";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("calc");
  const navigate = useNavigate();

  const navlinks = [
    { name: "CALCULATRICE", link: "calc" },
    { name: "PARAMÈTRES", link: "params" },
    { name: "UTILISATEURS", link: "users" },
    { name: "FAQ", link: "faq" },
  ];

  const handleClickLink = (e) => {
    setActiveLink(e.target.id);
  };

  useEffect(() => {
    navigate(`/${activeLink}`);
  }, [activeLink]);

  return (
    <nav className={styles.nav}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul>
        {navlinks.map((el) => (
          <li key={el.link}>
            <button
              id={el.link}
              type="button"
              onClick={handleClickLink}
              className={activeLink === el.link ? styles.active : null}
            >
              {el.name}
            </button>
          </li>
        ))}
        <li>
          <button type="button">
            <img src={off} alt="disconnect" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
