import React, { useRef } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styles from "./Dropzone.module.css";
import button from "../assets/icons/bouton.svg";

function Dropzone({ parameter, setNotification }) {
  const inputRef = useRef({ parameter });
  let label;
  if (parameter === "brand") {
    label = "Marques";
  }
  if (parameter === "model") {
    label = "Modèles";
  }
  if (parameter === "ram") {
    label = "Mémoire vive";
  }
  if (parameter === "storage") {
    label = "Stockage";
  }
  if (parameter === "colour") {
    label = "Couleur";
  }
  if (parameter === "state") {
    label = "Etat";
  }
  if (parameter === "network") {
    label = "Réseau";
  }
  if (parameter === "screen") {
    label = "Ecran";
  }
  if (parameter === "categories") {
    label = "Catégories";
  }
  if (parameter === "price_index") {
    label = "Indice de prix";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.files[0]) {
      return setNotification("Vous devez soumettre un fichier .csv");
    }

    const formData = new FormData();
    formData.append(parameter, inputRef.current.files[0]);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/${parameter}`, formData)
      .then((response) => {
        if (response.status === 200) {
          setNotification("Base de données mise à jour.");
        } else {
          setNotification("Problème, essayez plus tard");
        }
      })
      .catch(() => {
        setNotification("Problème, essayez plus tard");
      });
    return e.target.reset();
  };

  return (
    <form
      className={styles.formLine}
      encType="multipart/form-data"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label className={styles.label} htmlFor={parameter}>
        <p>{`${label} :`}</p>
        <div className={styles.inputs}>
          <input
            ref={inputRef}
            className={styles.dropZone}
            type="file"
            accept=".csv"
            name={parameter}
          />
          <button className={styles.button} type="submit">
            <img className={styles.buttonImg} src={button} alt="" />
          </button>
        </div>
      </label>
    </form>
  );
}

export default Dropzone;

Dropzone.propTypes = {
  parameter: PropTypes.string.isRequired,
  setNotification: PropTypes.func.isRequired,
};
