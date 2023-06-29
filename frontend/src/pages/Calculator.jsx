import { useFormik } from "formik";
import style from "./Calculator.module.css";
import { formSchema } from "../services/validators";
import { useCalcContext } from "../contexts/CalcContext";

export default function Calculator() {
  const { brands, models, rams, storages, colors, states, screens, networks } =
    useCalcContext();

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
    /* onSubmit: async (values) => {
      // calculator
    }, */
  });
  if (
    !brands ||
    !models ||
    !rams ||
    !storages ||
    !colors ||
    !states ||
    !screens ||
    !networks
  )
    return null;

  return (
    <div className={style.page}>
      <div className={style.empty} />
      <div className={style.content}>
        <h2>Calculer l'indice d'un smartphone</h2>
        <div>
          <div className={style.cardForm}>
            <div className={style.form}>
              <form className={style.formGrid} onSubmit={formik.handleSubmit}>
                <div>
                  <label htmlFor="brand">Marque</label>
                  <input
                    type="text"
                    name="brand"
                    placeholder="ex: Apple"
                    value={formik.values.brands}
                    onChange={formik.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="model">Modèle</label>
                  <input
                    type="text"
                    name="model"
                    placeholder="ex: Iphone 12"
                    value={formik.values.models}
                    onChange={formik.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="ram">RAM</label>
                  <select
                    type="text"
                    name="ram"
                    value={formik.values.rams}
                    onChange={formik.handleChange}
                  >
                    <option value="">Sélectionner la RAM</option>
                    {rams.map((ram) => (
                      <option value={formik.values.rams} key={ram.id}>
                        {ram.capacity}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="storage">Stockage</label>
                  <select
                    name="storage"
                    value={formik.values.storages}
                    onChange={formik.handleChange}
                  >
                    <option value="storage">Sélectionner le stockage</option>
                    {storages.map((storage) => (
                      <option value={formik.values.storages} key={storage.id}>
                        {storage.capacity}
                      </option>
                    ))}{" "}
                  </select>
                </div>
                <div>
                  <label htmlFor="color">Couleur</label>
                  <select
                    type="text"
                    name="color"
                    value={formik.values.colors}
                    onChange={formik.handleChange}
                  >
                    <option value="">Sélectionner la couleur</option>

                    {colors.map((color) => (
                      <option value={formik.values.colors} key={color.id}>
                        {color.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="state">Etat</label>
                  <select
                    type="text"
                    name="state"
                    value={formik.values.states}
                    onChange={formik.handleChange}
                  >
                    <option value="">Sélectionner l'état</option>
                    {states.map((state) => (
                      <option value={formik.values.states} key={state.id}>
                        {state.state}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="screen">Ecran</label>
                  <select
                    type="text"
                    name="screen"
                    value={formik.values.screens}
                    onChange={formik.handleChange}
                  >
                    <option value="">Sélectionner l'ecran</option>
                    {screens.map((screen) => (
                      <option value={formik.values.screens} key={screen.id}>
                        {screen.size}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="network">Réseau</label>
                  <select
                    type="text"
                    name="network"
                    value={formik.values.networks}
                    onChange={formik.handleChange}
                  >
                    <option value="">Sélectionner le réseau</option>
                    {networks.map((network) => (
                      <option value={formik.values.networks} key={network.id}>
                        {network.name}
                      </option>
                    ))}
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
    </div>
  );
}
