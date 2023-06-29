import React, { useRef } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styles from "./Dropzone.module.css";

function Dropzone({ parameter }) {
  const inputRef = useRef({ parameter });

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
      <label htmlFor={parameter}>Changer les paramètres de {parameter}</label>
      <input
        ref={inputRef}
        className={styles.dropZone}
        type="file"
        accept=".csv"
        // onDrop={(e) => dropHandler(e)}
        // onDragOver={(e) => {
        //   onDragOverHandler(e);
        // }}
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
