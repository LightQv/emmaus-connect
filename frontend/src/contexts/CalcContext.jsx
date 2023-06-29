import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import APIService from "../services/APIService";

const CalcContext = createContext();

export default CalcContext;

export function CalcContextProvider({ children }) {
  const [brands, setBrands] = useState();

  useEffect(() => {
    APIService.get("/brand")
      .then((response) => setBrands(response.data))
      .catch((err) => console.error(err));
  }, []);
  const memo = useMemo(() => {
    return { brands, setBrands };
  }, [brands]);

  return <CalcContext.Provider value={memo}>{children}</CalcContext.Provider>;
}
export const useCalcContext = () => useContext(CalcContext);

CalcContextProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
