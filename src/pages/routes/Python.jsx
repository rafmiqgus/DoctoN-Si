import React, { useState } from "react";
import styles from "../../styles/Page.module.css"; 
import dots from "../../img/dots.svg";

function Python() {
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
              <div className={styles.hoverBar}>
                <button
                  className={styles.barButton}
                  onClick={() => scrollToSection("operateurs")}
                >
                  Opérateurs
                </button>
                <br />
                <button
                  className={styles.barButton}
                  onClick={() => scrollToSection("fonctions-predefinies")}
                >
                  Fonctions prédéfinies
                </button>
                <br />
                <button
                  className={styles.barButton}
                  onClick={() => scrollToSection("boucles-et-conditions")}
                >
                  Boucles et conditions
                </button>
                <br />
                <button
                  className={styles.barButton}
                  onClick={() => scrollToSection("listes")}
                >
                  Listes
                </button>
                <br />
                <button
                  className={styles.barButton}
                  onClick={() => scrollToSection("chaines-de-caracteres")}
                >
                  Chaînes de caractères
                </button>
                <br />
                <button
                  className={styles.barButton}
                  onClick={() => scrollToSection("tuples")}
                >
                  Tuples
                </button>
                <br />
                <button
                  className={styles.barButton}
                  onClick={() => scrollToSection("dictionnaires")}
                >
                  Dictionnaires
                </button>
                <br />
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${styles.Block} ${
          isHovered ? styles.blurred : ""
        }`}
      >
        <div className={styles.text}>
          <h1 className={styles.h1}>Python</h1>
          <br />
          <h2 className={styles.h2}>Les bases :</h2>
          <br />

          <h3 id="operateurs" className={styles.h3}>
            Opérateurs :
          </h3>
          <br />
          <table>
            <thead>
              <tr>
                <th>Opération</th>
                <th>Opérateur en Python</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Addition</td>
                <td>+</td>
              </tr>
              <tr>
                <td>Soustraction</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Multiplication</td>
                <td>*</td>
              </tr>
              <tr>
                <td>Division</td>
                <td>/</td>
              </tr>
              <tr>
                <td>Division euclidienne (quotient)</td>
                <td>//</td>
              </tr>
              <tr>
                <td>Division euclidienne (reste)</td>
                <td>%</td>
              </tr>
              <tr>
                <td>Exposant</td>
                <td>**</td>
              </tr>
              <tr>
                <td>Racine carrée</td>
                <td>sqrt() (from math import *)</td>
              </tr>
            </tbody>
          </table>
          <br />

          <h3 id="fonctions-predefinies" className={styles.h3}>
            Fonctions prédéfinies :
          </h3>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Utilisation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>int()</td>
                <td>Nombres entiers positifs et négatifs</td>
              </tr>
              <tr>
                <td>float()</td>
                <td>Nombres décimaux positifs et négatifs</td>
              </tr>
              <tr>
                <td>str()</td>
                <td>Chaîne de caractères</td>
              </tr>
              <tr>
                <td>print()</td>
                <td>Afficher</td>
              </tr>
              <tr>
                <td>input()</td>
                <td>Demander à l'utilisateur d'entrer une valeur</td>
              </tr>
            </tbody>
          </table>
          <br />

          <h3 id="boucles-et-conditions" className={styles.h3}>
            Boucles et Conditions :
          </h3>
          <h4>Boucles</h4>
          <h4>For...</h4>
          <table>
            <tbody>
              <tr>
                <td>
                  for <b>i</b> in range(<b>n</b>)
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <b>i</b> est une variable <br />
            <b>n</b> indique le nombre de répétitions
          </p>
          <h4>While...</h4>
          <table>
            <tbody>
              <tr>
                <td>
                  <b>while</b>...
                </td>
              </tr>
            </tbody>
          </table>
          <h4>Conditions</h4>
          <h4>1 ou 2 conditions</h4>
          <h4>
            Si...
            <br />
            Sinon...
          </h4>
          <table>
            <tbody>
              <tr>
                <td>
                  <b>if</b>...
                  <br />
                  <b>else</b>...
                </td>
              </tr>
            </tbody>
          </table>
          <h4>3 ou plus de conditions</h4>
          <h4>
            Si...
            <br />
            Sinon si...
            <br />
            Sinon...
          </h4>
          <table>
            <tbody>
              <tr>
                <td>
                  <b>if</b>...
                  <br />
                  <b>elif</b>...
                  <br />
                  <b>else</b>...
                </td>
              </tr>
            </tbody>
          </table>
          <br />

          <h3 id="listes" className={styles.h3}>
            Listes
          </h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <b>tab</b> = <b>[</b>...<b>,</b>...<b>,</b>...<b>]</b>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Fonction</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>len(tab)</td>
                <td>Nombre d'éléments dans la liste</td>
              </tr>
              <tr>
                <td>print(tab[n])</td>
                <td>Affiche l'élément de la liste à l'indice n</td>
              </tr>
              <tr>
                <td>tab.append(x)</td>
                <td>Ajoute à la fin de la liste l'élément x choisi</td>
              </tr>
              <tr>
                <td>tab_2 = tab_1.copy()</td>
                <td>Crée la liste tab_2, copie de tab_1</td>
              </tr>
              <tr>
                <td>del(tab[indice])</td>
                <td>Supprime l'élément à l'indice donné</td>
              </tr>
            </tbody>
          </table>
          <br />

          <h3 id="chaines-de-caracteres" className={styles.h3}>
            Chaînes de caractères :
          </h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <b>ch</b> = <b>"</b>...<b>"</b>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Fonction</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>len(ch)</td>
                <td>Nombre de caractères dans la chaîne</td>
              </tr>
              <tr>
                <td>print(ch[0])</td>
                <td>Affiche le caractère de la chaîne à l'indice 0</td>
              </tr>
            </tbody>
          </table>
          <br />

          <h3 id="tuples" className={styles.h3}>
            Tuples :
          </h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <b>nom</b> = <b>(</b>...<b>,</b>...<b>,</b>...<b>)</b>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Fonction</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>len(tup)</td>
                <td>Nombre d'éléments dans le tuple</td>
              </tr>
              <tr>
                <td>print(tup[0])</td>
                <td>Affiche l'élément du tuple à l'indice 0</td>
              </tr>
            </tbody>
          </table>

          <p>
            <b>Note :</b> Les listes, chaînes de caractères et tuples sont
            concaténables.
            <br />
            <b>Note :</b> Les listes et dictionnaires sont mutables.
          </p>
          <br />

          <h3 id="dictionnaires" className={styles.h3}>
            Dictionnaires :
          </h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <b>dico</b> = <b>{`{`}</b>clé_1<b>:</b>valeur_1, clé_2
                  <b>:</b>valeur_2<b>{`}`}</b>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Fonction</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>len(dico)</td>
                <td>Nombre de paires clé-valeur dans le dictionnaire</td>
              </tr>
              <tr>
                <td>print(dico['clé'])</td>
                <td>Affiche la valeur associée à la clé spécifiée</td>
              </tr>
              <tr>
                <td>dico.get('clé')</td>
                <td>
                  Récupère la valeur associée à la clé, ou None si elle n'existe
                  pas
                </td>
              </tr>
              <tr>
                <td>dico.keys()</td>
                <td>Renvoie toutes les clés du dictionnaire</td>
              </tr>
              <tr>
                <td>dico.values()</td>
                <td>Renvoie toutes les valeurs du dictionnaire</td>
              </tr>
              <tr>
                <td>dico.items()</td>
                <td>Renvoie toutes les paires clé-valeur du dictionnaire</td>
              </tr>
              <tr>
                <td>dico.clear()</td>
                <td>Vide le dictionnaire</td>
              </tr>
              <tr>
                <td>dico.pop('clé')</td>
                <td>
                  Supprime la clé et renvoie sa valeur, ou une valeur par défaut
                </td>
              </tr>
              <tr>
                <td>del dico['clé']</td>
                <td>Supprime la clé et sa valeur</td>
              </tr>
              <tr>
                <td>dico_2 = dico_1.copy()</td>
                <td>Crée dico_2, copie de dico_1</td>
              </tr>
              <tr>
                <td>
                  dico.update({`{`}"clé":"valeur"{`}`})
                </td>
                <td>Ajoute ou met à jour des paires clé-valeur</td>
              </tr>
            </tbody>
          </table>

          <p>
            <b>Important :</b> Les clés sont <b>uniques</b> et associées à
            <b> une </b>valeur. Ajouter une clé existante met à jour sa valeur.
            <br />
            <b>Note :</b> On peut avoir plusieurs valeurs identiques, mais pas
            plusieurs clés identiques.
            <br />
            <b>Note :</b> Les clés et les valeurs peuvent être de n'importe quel
            type immuable.
          </p>
        </div>
      </div>
    </>
  );
}

export default Python;
