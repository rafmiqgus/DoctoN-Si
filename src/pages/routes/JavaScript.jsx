import React, { useState } from "react";
import styles from '../../styles/Page.module.css';
import dots from "../../assets/img/dots.svg";

function JavaScript() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className={styles.sommaire}>
        <div
          className={`${styles.hoverAreaContainer} ${
            isHovered ? styles.noStyle : ""
          }`}
        >
          <div
            className={`${styles.hoverArea} ${isHovered ? styles.noStyle : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`${styles.dots} ${
                isHovered ? styles.displayNone : ""
              }`}
            >
              <embed
                src={dots}
                id="dots-svg"
                className={styles.dots}
                width="20px"
                height="55px"
                fill="white"
              />
            </div>
            {isHovered && (
              <div className={styles.hoverBarContainer}>
                <div className={styles.hoverBar}>
                  <button
                    className={styles.barButton}
                    onClick={() => scrollToSection("variables")}
                  >
                    Les variables
                  </button>
                  <button
                    className={styles.barButton}
                    onClick={() => scrollToSection("listes")}
                  >
                    Le binaire
                  </button>
                  <button
                    className={styles.barButton}
                    onClick={() => scrollToSection("objets")}
                  >
                    Conversion décimal → binaire
                  </button>
                  <button
                    className={styles.barButton}
                    onClick={() => scrollToSection("section4")}
                  >
                    Conversion binaire → décimal
                  </button>
                  <button
                    className={styles.barButton}
                    onClick={() => scrollToSection("section5")}
                  >
                    Hexadécimal
                  </button>
                  <button
                    className={styles.barButton}
                    onClick={() => scrollToSection("section6")}
                  >
                    Conversion entre Hexadécimal et Binaire
                  </button>
                  <button
                    className={styles.barButton}
                    onClick={() => scrollToSection("section7")}
                  ></button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`${styles.Block} ${isHovered ? styles.blurred : ""}`}>
        <h1 className={styles.h1}>JavaScript</h1>
        <div id="variables" className={styles.section}></div>
        <h3 className={styles.h3}>Les variables</h3>
        <p>
          Les variables ne sont pas définies de la mêmes amnière qu'en Python,
          <br />
          il est donc important d'être attentif à ces différences.
          <br />
          <h2 className={styles.h2}>Déclaration et affectation</h2>
          <table>
            <thead>
              <tr>
                <th>Types de variables</th>
                <th>Utilisation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>var (désuet)</td>
                <td>variable</td>
              </tr>
              <tr>
                <td>let</td>
                <td>variable</td>
              </tr>
              <tr>
                <td>const</td>
                <td>variable accessibilité</td>
              </tr>
            </tbody>
          </table>
          <h2 className={styles.h2}>Les types internes</h2>
          <table>
            <thead>
              <tr>
                <th>Types de variables</th>
                <th>Utilisation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>number</td>
                <td>nombres</td>
              </tr>
              <tr>
                <td>string</td>
                <td>chaînes de caractères</td>
              </tr>
              <tr>
                <td>boolean</td>
                <td>
                  variables ayant uniquement <b>True</b> ou <b>False</b> comme
                  valeur
                </td>
              </tr>
              <tr>
                <td>null</td>
                <td>type nul</td>
              </tr>
              <tr>
                <td>undefined</td>
                <td>
                  résultat renvoyé lorsqu'une variable n'existe pas ou n'a pas
                  de valeur
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <p>
            <b>!</b> Nous pouvons obtenir le type d'une variable avec la
            fonction <b>typeof()</b>.
          </p>
          <br />
          <h2 className={styles.h2}>Les transtypes</h2>
          <p>
            Nous pouvons changer le type d'une variable avec les fonctions
            suivantes :
          </p>
          <br />
          <table>
            <thead>
              <tr>
                <th>Fonction</th>
                <th>Utilisation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>parseInt</td>
                <td>
                  Extrait la valeur entière (int) d'une chaîne, si possible
                </td>
              </tr>
              <tr>
                <td>parseFloat</td>
                <td>
                  Extrait la valeur décimale (float) d'une chaîne, si possible
                </td>
              </tr>
            </tbody>
          </table>
          <div id="listes" className={styles.section}></div>
          <h3 className={styles.h3}>Les listes</h3>
          <table>
            <thead>
              <tr>
                <th>Fonction</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>liste.lengh</td>
                <td>Nombres d'éléments dans la liste</td>
              </tr>
              <tr>
                <td>liste.push("élément")</td>
                <td>Ajoute un élément en fin de liste</td>
              </tr>
              <tr>
                <td>
                  liste.splice(position, nb d'éléments à supp, "nv élément")
                </td>
                <td>Ajoute ou supprime des éléments en une position donnée</td>
              </tr>
              <tr>
                <td>liste.indexof("élément")</td>
                <td>Renvoie l'index de l'élément</td>
              </tr>
            </tbody>
          </table>
          <h4>Autre méthode pour créer une liste :</h4>
          <table>
            <thead>
              <tr>
                <th>Exemple</th>
                <th>Résultat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  let liste ={" "}
                  <b>
                    new <i>Array</i>
                  </b>
                  ("élément1", "élément2")
                </td>
                <td>Crée une liste avec "élément1" et "élément2"</td>
              </tr>
              <tr>
                <td>
                  let liste ={" "}
                  <b>
                    new <i>Array</i>
                  </b>
                  (n)
                </td>
                <td>Crée une liste avec n nombre d'éléments</td>
              </tr>
            </tbody>
          </table>
          <br />
          <div id="objets" className={styles.section}></div>
          <h3 className={styles.h3}>Les objets</h3>
          <p>
            <b>!</b> Avec JavaScript les objetsse créent littéralement et non
            par instance de classes.
            <br />
            <table>
              <th>
                <b>objet</b> = <b>&#123;</b> attribut_1 <b>:</b> valeur<b>,</b>{" "}
                attribut_2 <b>:</b> valeur<b>&#125;</b>
              </th>
            </table>
            <br />
            Accès aux valeur :
            <br />
            <table>
              <th>console.log(objet.attribut);</th>
            </table>
            <br />
          </p>
          <div id="boucles-et-conditions" className={styles.section}></div>
          <h3 className={styles.h3}>Boucles et conditions</h3>
        </p>
      </div>
    </>
  );
}

export default JavaScript;
