import PropTypes from "prop-types";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./ScoreChart.module.css";

export default function ScoreChart({ categorie, value, price }) {
  const percentage = value;

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartBox}>
        <CircularProgressbarWithChildren
          value={percentage}
          minValue={0}
          maxValue={100}
          background
          styles={buildStyles({
            pathColor: "var(--secondary-color)",
            textColor: "white",
            trailColor: "white",
            backgroundColor: "var(--main-color-dark)",
          })}
        >
          <h3 className={styles.categorieName}>Catégorie</h3>
          <p className={styles.categorieGrade}>{`${categorie}`}</p>
        </CircularProgressbarWithChildren>
      </div>
      <div className={styles.priceBox}>
        <h3 className={styles.priceTitle}>Prix conseillé</h3>
        <h5 className={styles.price}>{`${price} €`}</h5>
      </div>
    </div>
  );
}

ScoreChart.propTypes = {
  categorie: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
