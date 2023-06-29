import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import APIService from "../services/APIService";

const CalcContext = createContext();

export default CalcContext;

export function CalcContextProvider({ children }) {
  const [brands, setBrands] = useState();
  const [models, setModels] = useState();
  const [rams, setRams] = useState();
  const [storages, setStorages] = useState();
  const [colors, setColors] = useState();
  const [states, setStates] = useState();
  const [screens, setScreens] = useState();
  const [networks, setNetworks] = useState();

  const data = async () => {
    try {
      const brand = await APIService.get("/brand");
      if (brand) {
        setBrands(brand.data);
      } else throw new Error();

      const model = await APIService.get("/model");
      if (model) {
        setModels(model.data);
      } else throw new Error();

      const ram = await APIService.get("/ram");
      if (ram) {
        setRams(ram.data);
      } else throw new Error();

      const storage = await APIService.get("/storage");
      if (storage) {
        setStorages(storage.data);
      } else throw new Error();

      const color = await APIService.get("/colour");
      if (color) {
        setColors(color.data);
      } else throw new Error();

      const state = await APIService.get("/state");
      if (state) {
        setStates(state.data);
      } else throw new Error();

      const screen = await APIService.get("/screen");
      if (screen) {
        setScreens(screen.data);
      } else throw new Error();

      const network = await APIService.get("/network");
      if (network) {
        setNetworks(network.data);
      } else throw new Error();
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    data();
  }, []);

  const memo = useMemo(() => {
    return {
      brands,
      setBrands,
      models,
      setModels,
      rams,
      setRams,
      storages,
      setStorages,
      colors,
      setColors,
      states,
      setStates,
      screens,
      setScreens,
      networks,
      setNetworks,
    };
  }, [brands, models, rams, storages, colors, states, screens, networks]);

  return <CalcContext.Provider value={memo}>{children}</CalcContext.Provider>;
}
export const useCalcContext = () => useContext(CalcContext);

CalcContextProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
