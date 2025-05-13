import React from "react";
import Logobanner from "../assets/img/logo_bannière.jpg";
import styles from "../styles/Acceuil.module.css"

const Acceuil = () => {
    return (
      <>
        <div className={styles.Acceuil}>
          <img className={styles.banner} src={Logobanner} alt="logo_bannière"></img>
          <h1 className={styles.Titre}>Bienvenue sur Docto N'SI !</h1>
          <p className={`${styles.text} ${styles.intro}`}>
            DOCTO N’SI est un site éducatif pour la spécialité NSI. Le projet
            est mené par trois élèves de première NSI vise à aider celles et
            ceux choisissant la matière. Conçu non comme un cours complet mais
            comme un mémo, le site propose des informations résumées et non
            complètes, facilitant les révisions. Un aspect clé de notre projet
            est le côté évolutif du projet et sa modularité. A ce jour, le site
            comporte cinq catégories mais cela est sujet à changer au cours du
            temps en fonction des besoins des utilisateurs.
          </p>
          <p className={`${styles.mailSupport} ${styles.text}`}>
            Si vous avez des questions, des propositions pour le site, contactez nous sur :
            <br />
            doctonsi.ac.montpellier@gmail.com
          </p>
        </div>
      </>
    );
}

export default Acceuil;