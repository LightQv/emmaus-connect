import { useFormik } from "formik";
import style from "./Calculator.module.css";
import { formSchema } from "../services/validators";
import { useCalcContext } from "../contexts/CalcContext";

export default function Calculator() {
  const { brands } = useCalcContext();

  const formik = useFormik({
    initialValues: {
      brand: "",
      model: "",
      ram: "",
      storage: "",
      color: "",
      state: "",
      screen: "",
      network: "",
    },

    validationSchema: formSchema,

    onSubmit: async (values) => {
      // calculator
    },
  });
  if (!brands) return null;
  return (
    <div className={style.page}>
      <h2>Calculer l'indice d'un smartphone</h2>
      <div>
        <div className={style.cardForm}>
          <div className={style.form}>
            <form className={style.formGrid} onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="brand">Marque</label>
                <select
                  type="text"
                  name="brand"
                  value={formik.values.brand}
                  onChange={formik.handleChange}
                >
                  <option value="">Sélectionner la marque</option>
                  {brands.map((brand) => (
                    <option value="brand"> {brand.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="model">Modèle</label>
                <input
                  type="text"
                  name="model"
                  placeholder="ex: Iphone 12"
                  value={formik.values.model}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <label htmlFor="ram">RAM</label>
                <select
                  type="text"
                  name="ram"
                  value={formik.values.ram}
                  onChange={formik.handleChange}
                >
                  <option value="">Sélectionner la RAM</option>
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="12">12</option>
                  <option value="16">16</option>
                </select>
              </div>
              <div>
                <label htmlFor="storage">Stockage</label>
                <select
                  name="storage"
                  value={formik.values.storage}
                  onChange={formik.handleChange}
                >
                  <option value="">Sélectionner le stockage</option>
                  <option value="16">16</option>
                  <option value="32">32</option>
                  <option value="64">64</option>
                  <option value="128">128</option>
                  <option value="256">256</option>
                  <option value="512">512</option>
                  <option value="1000">1000</option>
                </select>
              </div>
              <div>
                <label htmlFor="color">Couleur</label>
                <select
                  type="text"
                  name="color"
                  value={formik.values.color}
                  onChange={formik.handleChange}
                >
                  <option value="">Sélectionner la couleur</option>
                  <option value="Noir">Noir</option>
                  <option value="Blanc">Blanc</option>
                  <option value="Gris/Argenté">Gris/Argent</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="state">Etat</label>
                <select
                  type="text"
                  name="state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                >
                  <option value="">Sélectionner l'état</option>
                  <option value="DEEE">DEEE</option>
                  <option value="Réparable">Réparable</option>
                  <option value="Bloqué">Bloqué</option>
                  <option value="Reconditionnable">Reconditionnable</option>
                  <option value="Reconditionné">Reconditionné</option>
                </select>
              </div>
              <div>
                <label htmlFor="screen">Ecran</label>
                <select
                  type="text"
                  name="screen"
                  value={formik.values.screen}
                  onChange={formik.handleChange}
                >
                  <option value="">Sélectionner l'ecran</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </select>
              </div>
              <div>
                <label htmlFor="network">Réseau</label>
                <select
                  type="text"
                  name="network"
                  value={formik.values.network}
                  onChange={formik.handleChange}
                >
                  <option value="">Sélectionner le réseau</option>
                  <option value="4G">4G</option>
                  <option value="4G+">4G</option>
                  <option value="5G">5G</option>
                </select>
              </div>
              <button
                type="submit"
                onSubmit={formik.handleSubmit}
                className={style.button}
                disabled={!formSchema.isValidSync(formik.values)}
              >
                Calculer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
