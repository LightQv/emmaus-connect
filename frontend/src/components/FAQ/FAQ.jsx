import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import style from "./FAQ.module.css";

const dataCollection = [
  {
    question: "Comment puis-je modifier mon compte?",
    answer:
      "Nous vous invitons à contacter votre administrateur, via le formulaire de contact, pour toutes modifications de compte.",
  },
  {
    question: "blablabla",
    answer: "bliblibli",
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
    <div>
      <div>
        <h2>FAQ</h2>
        <div className={style.accordionFaq}>
          {dataCollection.map((item, index) => (
            <div>
              <div className={style.accordionFaqHeading}>
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={style.button}
                >
                  <h2
                    className={`${accordion === index ? style.active : null}`}
                  >
                    {item.question}
                  </h2>

                  <ExpandMoreIcon />
                </button>
              </div>
              <div>
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
    </div>
  );
}
