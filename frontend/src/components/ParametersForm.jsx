import React from "react";
import styles from "./ParametersForm.module.css";
import Dropzone from "./Dropzone";

function ParametersForm() {
  const parameters = [
    "brand",
    "model",
    "ram",
    "storage",
    "colour",
    "state",
    "network",
    "screen",
    "categories",
    "price_index",
  ];

  return (
    <div className={styles.parametersForm}>
      {parameters.map((parameter) => {
        return <Dropzone key={parameter} parameter={parameter} />;
      })}
    </div>
  );
}

export default ParametersForm;
