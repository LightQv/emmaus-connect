import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import styles from "./ParametersForm.module.css";
import Dropzone from "./Dropzone";
import notifySuccess, { notifyError } from "../services/toasts";

function ParametersForm() {
  const [notification, setNotification] = useState(null);
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

  useEffect(() => {
    if (notification === "Base de données mise à jour.") {
      notifySuccess(notification);
    } else if (notification) {
      notifyError(notification);
    }
    setNotification(null);
  }, [notification]);

  return (
    <>
      <div className={styles.parametersForm}>
        {parameters.map((parameter) => {
          return (
            <Dropzone
              key={parameter}
              parameter={parameter}
              notification={notification}
              setNotification={setNotification}
            />
          );
        })}
      </div>
      <ToastContainer limit={1} />
    </>
  );
}

export default ParametersForm;
