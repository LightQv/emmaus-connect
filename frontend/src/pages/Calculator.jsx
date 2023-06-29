import { useEffect, useState } from "react";
import { useFormik } from "formik";
import style from "./Calculator.module.css";
import { formSchema } from "../services/validators";
import { useCalcContext } from "../contexts/CalcContext";

export default function Calculator() {
  const {
    brands,
    models,
    rams,
    storages,
    colors,
    states,
    screens,
    networks,
    priceIndexes,
    categories,
  } = useCalcContext();
  const [resultIndex, setResultIndex] = useState();
  const [resultCategory, setResultCategory] = useState();
  const [resultPrice, setResultPrice] = useState();

  /* --- object containing the values needed for calculating the index --- */
  const calcValues = {
    coef: {
      brand: 0,
      model: 0,
      color: 0,
    },
    value: {
      ram: 0,
      storage: 0,
      network: 0,
      screen: 0,
    },
    weighting: {
      state: 0,
    },
  };

  /* --- calculate the final category for the smartphone --- */
  const findCategory = () => {
    categories.forEach((cat) => {
      if (
        Math.round(resultIndex) >= cat.val_min &&
        Math.round(resultIndex) <= cat.val_max
      ) {
        setResultCategory(cat.name);
      }
    });
  };

  /* --- calculate the final price for the smartphone --- */
  const findPrice = () => {
    setResultPrice(Math.round(resultIndex * parseFloat(priceIndexes[0].price)));
  };

  /* --- find the category and the price once the index is calculated --- */
  useEffect(() => {
    if (resultIndex) {
      findCategory();
      findPrice();
    }
  }, [resultIndex]);

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
    onSubmit: (values) => {
      /* --- updating the object containing the values need for calculation with the specs enter by the user --- */
      brands.forEach((brand) => {
        if (values.brand === brand.name) {
          calcValues.coef.brand = parseFloat(brand.coef);
        }
      });
      models.forEach((model) => {
        if (values.model === model.name) {
          calcValues.coef.model = parseFloat(model.coef);
        }
      });
      rams.forEach((ram) => {
        if (parseInt(values.ram, 10) === parseInt(ram.capacity, 10)) {
          calcValues.value.ram = ram.value;
        }
      });
      storages.forEach((storage) => {
        if (parseInt(values.storage, 10) === parseInt(storage.capacity, 10)) {
          calcValues.value.storage = storage.value;
        }
      });
      colors.forEach((color) => {
        if (values.color === color.name) {
          calcValues.coef.color = parseFloat(color.coef);
        }
      });
      states.forEach((state) => {
        if (values.state === state.state) {
          calcValues.weighting.state = state.weighting;
        }
      });
      screens.forEach((screen) => {
        if (parseInt(values.screen, 10) === parseInt(screen.size, 10)) {
          calcValues.value.screen = screen.value;
        }
      });
      networks.forEach((network) => {
        if (values.network === network.name) {
          calcValues.value.network = network.value;
        }
      });

      /* --- calculate the value --- */
      const value =
        calcValues.value.ram +
        calcValues.value.storage +
        calcValues.value.network +
        calcValues.value.screen;
      /* --- calculate the coefficient --- */
      const coef =
        calcValues.coef.brand * calcValues.coef.model * calcValues.coef.color;
      /* --- multiply the value with the coefficient --- */
      const interValue = value * coef;
      /* --- calculate the percentage depending on the state of the smartphone --- */
      const weight = interValue * (calcValues.weighting.state / 100);
      /* --- calculate the result --- */
      const result = interValue + weight;
      setResultIndex(result);
    },
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
          {resultCategory && resultPrice ? (
            <div>{`Catégorie : ${resultCategory} | Prix : ${resultPrice}`}</div>
          ) : null}
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
