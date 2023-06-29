import React, { useState } from "react";
import style from "./FAQ.module.css";
import arrow from "../assets/icons/arrow.svg";

const dataCollection = [
  {
    question: "Comment puis-je modifier les informations de mon compte ?",
    answer:
      "Nous vous invitons à contacter votre administrateur pour toute création, modification ou suppression de compte utilisateur.",
  },
  {
    question: "Comment puis-je contacter l'administrateur ?",
    answer:
      "Vous pouvez contacter l'administrateur via l'adresse  de contact habituelle.",
  },
  {
    question:
      "Je ne trouve pas les caractéristiques voulues dans le formulaire, que dois-je faire ?",
    answer:
      "Assurez-vous que les caractéristiques répondent au minimum requis. Si de nouvelles informations doivent être ajoutées à la base de données, contactez votre administrateur.",
  },
  {
    question: "Quel est la configuration minimale requise ?",
    answer:
      "Mémoire Vive : 2Go. Stockage : 16Go. Taille de l'écran : 4 pouces. Réseau : 4G. ",
  },
  {
    question:
      "Le calculateur ne me donne pas de prix lorsque je valide le formulaire. Que dois-je faire ?",
    answer:
      "Assurez-vous que l'orthographe des informations renseignées est correcte. Si besoin, contactez votre administrateur.",
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
      <div className={style.empty} />
      <div className={style.faq}>
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
    </div>
  );
}
