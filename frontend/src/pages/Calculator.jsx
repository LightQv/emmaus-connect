import { useState } from "react";
import style from "./Calculator.module.css";

export default function Calculator() {
  const [formInfo, setFormInfo] = useState({
    brand: "",
    model: "",
    ram: "",
    storage: "",
    color: "",
    state: "",
    screen: "",
    network: "",
  });
  const handleChange = (event) => {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  };
  // Envoi au back des données recueillies dans le formulaire

  return (
    <div className={style.page}>
      <h2>Calculer l'indice d'un smartphone</h2>
      <div>
        <div className={style.cardForm}>
          <div className={style.form}>
            <form className={style.formGrid}>
              <div>
                <label htmlFor="brand">Marque</label>
                <input
                  type="text"
                  name="brand"
                  value={formInfo.brand}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="model">Modèle</label>
                <input
                  type="text"
                  name="model"
                  value={formInfo.model}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="ram">RAM</label>
                <input
                  type="text"
                  name="ram"
                  value={formInfo.ram}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="storage">Stockage</label>
                <input
                  type="text"
                  name="storage"
                  value={formInfo.storage}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="color">Couleur</label>
                <input
                  type="text"
                  name="color"
                  value={formInfo.color}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="state">Etat</label>
                <input
                  type="text"
                  name="state"
                  value={formInfo.state}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="screen">Ecran</label>
                <input
                  type="text"
                  name="screen"
                  value={formInfo.screen}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="network">Réseau</label>
                <input
                  type="text"
                  name="network"
                  value={formInfo.network}
                  onChange={handleChange}
                />
              </div>
              <button type="button" className={style.sendButton}>
                Calculer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
