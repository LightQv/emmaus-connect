import React, { useState } from "react";
import style from "./FAQ.module.css";
import arrow from "../assets/icons/arrow.svg";

const dataCollection = [
  {
    question: "Comment puis-je modifier mon compte?",
    answer:
      "Nous vous invitons à contacter votre administrateur, via le formulaire de contact, pour toutes modifications de compte.",
  },
  {
    question: "Comment puis-je contacter le service administratif?",
    answer:
      "Vous pouvez contacter le service administratif via le formulaire de contact.",
  },
  {
    question: "Comment remplir le formulaire?",
    answer: "",
  },
  {
    question: "Quel coefficient est appliqué à quelle valeur?",
    answer: "",
  },
  {
    question:
      "Quelles sont les caractéristiques à remplir pour obtenir le prix?",
    answer: "",
  },
];
export default function FAQ() {
  const [accordion, setActiveAccordion] = useState(-1);
  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }
  return (
    <div className={style.page}>
      <h2>Foire aux questions</h2>

      {dataCollection.map((item, index) => (
        <div className={style.accordionFaq}>
          <button
            type="button"
            onClick={() => toggleAccordion(index)}
            className={style.button}
          >
            <h3>{item.question}</h3>
            <img
              src={arrow}
              alt="arrow"
              className={`${
                accordion === index ? style.rotateIcon : style.arrow
              }`}
            />
          </button>
          <div className={style.answer}>
            <p
              className={`${
                accordion === index ? style.active : style.inactive
              }`}
            >
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
