import ParametersForm from "../components/ParametersForm";
import styles from "./Parameters.module.css";

export default function Parameters() {
  return (
    <div className={styles.page}>
      <div className={styles.empty} />
      <div className={styles.content}>
        <h2>Changer les paramètres de calcul</h2>
        <ParametersForm />
      </div>
    </div>
  );
}
