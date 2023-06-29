import PropTypes from "prop-types";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./ScoreChart.module.css";

export default function ScoreChart({ categorie, price }) {
  const percentage = () => {
    if (categorie === "C") return 25;
    if (categorie === "B") return 50;
    if (categorie === "A") return 75;
    if (categorie === "S") return 100;
    return null;
  };

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartBox}>
        <CircularProgressbarWithChildren
          value={percentage()}
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
  price: PropTypes.number.isRequired,
};
