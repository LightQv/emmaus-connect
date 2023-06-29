import PropTypes from "prop-types";
import closeIcn from "../assets/images/close.svg";
import styles from "./Modal.module.css";

export default function Modal({ component, setIsShow }) {
  return (
    <div className={styles.modalPage}>
      <button
        type="button"
        className={styles.btnClose}
        onClick={() => setIsShow(false)}
      >
        <img src={closeIcn} alt="close" className={styles.closeIcn} />
      </button>
      {component}
    </div>
  );
}

Modal.propTypes = {
  component: PropTypes.shape().isRequired,
  setIsShow: PropTypes.func.isRequired,
};
