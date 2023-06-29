import React, { useRef } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import styles from "./Dropzone.module.css";
import button from "../assets/icons/bouton.svg";
import info from "../assets/icons/info.png";

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

  let tooltip;
  if (parameter === "brand") {
    tooltip = `Chaque ligne du fichier .csv doit être au format 'Marque,Coefficient' (ex: 'Apple,1.5')`;
  }
  if (parameter === "model") {
    tooltip = `Chaque ligne du fichier .csv doit être au format 'Modèle,Coefficient' (ex: 'iphone X,1.2')`;
  }
  if (parameter === "ram") {
    tooltip = `Chaque ligne du fichier .csv doit être au format 'Taille,Valeur' (ex: '8,50')`;
  }
  if (parameter === "storage") {
    tooltip = `Chaque ligne du fichier .csv doit être au format 'Taille,Valeur' (ex: '512,70')`;
  }
  if (parameter === "colour") {
    tooltip = `Chaque ligne du fichier .csv doit être au format 'Couleur,Coefficient' (ex: 'Noir,1.3')`;
  }
  if (parameter === "state") {
    tooltip = `Chaque ligne du fichier .csv doit être au format 'Etat,Pondération' (ex: 'Réparé,20')`;
  }
  if (parameter === "network") {
    tooltip = `Chaque ligne du fichier .csv doit être au format 'Réseau,Valeur' (ex: '5G,50')`;
  }
  if (parameter === "screen") {
    tooltip = `Chaque ligne du fichier .csv doit être au format 'Taille,Valeur' (ex: '4,20')`;
  }
  if (parameter === "categories") {
    tooltip = `Chaque ligne du fichier .csv doit être au format 'Grade,Valeur min, Valeur max' (ex: 'A,280,374')`;
  }
  if (parameter === "price_index") {
    tooltip = `Chaque ligne du fichier .csv doit être au format 'Indice' (ex: '0.25')`;
  }

  const HtmlTooltip = styled(({ className, ...props }) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#ffcc38",
      color: "#002743",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(15),
      border: "1px solid #dadde9",
      borderRadius: "10px",
    },
  }));

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
        <p>
          <HtmlTooltip title={tooltip} placement="top">
            <img src={info} className={styles.info} alt="info" />
          </HtmlTooltip>
          {` ${label} :`}
        </p>
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
