import ParametersForm from "../components/ParametersForm";
import styles from "./Parameters.module.css";

export default function Parameters() {
  return (
    <div className={styles.page}>
      <div className={styles.empty} />
      <ParametersForm />;
    </div>
  );
}
