import React, { useRef } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styles from "./Dropzone.module.css";

function Dropzone({ parameter }) {
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
    const formData = new FormData();
    formData.append(parameter, inputRef.current.files[0]);
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/${parameter}`, formData);
    e.target.reset();
  };

  return (
    <form
      className={styles.formLine}
      encType="multipart/form-data"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label htmlFor={parameter}>{label} :</label>
      <input
        ref={inputRef}
        className={styles.dropZone}
        type="file"
        accept=".csv"
        name={parameter}
      />
      <input type="submit" value="Envoyer" />
    </form>
  );
}

export default Dropzone;

Dropzone.propTypes = {
  parameter: PropTypes.string.isRequired,
};
