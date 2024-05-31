import React, { useState } from "react";
import "../styles/Python.css";
import dots from "../img/dots.svg";

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
      <div className="Sommaire-python">
        <div
          className={`hover-area-python-container ${
            isHovered ? "no-style-python" : ""
          }`}
        >
          <div
            className={`hover-area-python ${isHovered ? "no-style" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`dots-python ${isHovered ? "display-none" : ""}`}>
              <embed
                src={dots}
                id="Dots-svg"
                className="dots"
                width="20px"
                height="55px"
                fill="white"
              />
            </div>
            {isHovered && (
              <div className="hover-bar-python">
                <button
                  className="bar-button-python"
                  onClick={() => scrollToSection("operateurs")}
                >
                  Opérateurs
                </button>
                <br />
                <button
                  className="bar-button-python"
                  onClick={() => scrollToSection("fonctions-predefinies")}
                >
                  Fonctions prédéfinies
                </button>
                <br />
                <button
                  className="bar-button-python"
                  onClick={() => scrollToSection("boucles-et-conditions")}
                >
                  Boucles et conditions
                </button>
                <br />
                <button
                  className="bar-button-python"
                  onClick={() => scrollToSection("listes")}
                >
                  Listes
                </button>
                <br />
                <button
                  className="bar-button-python"
                  onClick={() => scrollToSection("chaines-de-caracteres")}
                >
                  Chaînes de caractères
                </button>
                <br />
                <button
                  className="bar-button-python"
                  onClick={() => scrollToSection("tuples")}
                >
                  Tuples
                </button>
                <br />
                <button
                  className="bar-button-python"
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
      <div className={`Python ${isHovered ? "blurred-binaire" : ""}`}>
        <div className="Text">
          <h1>Python</h1>
          <br />
          <h2>Les bases :</h2>
          <br />

          <h3 id="operateurs">Opérateurs :</h3>
          <br />
          <table>
            <thead>
              <tr>
                <th>Opération</th>
                <th>Opérateur en python</th>
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
                <td>Racine carré</td>
                <td>sqrt() (from math import*)</td>
              </tr>
            </tbody>
          </table>
          <br />

          <h3 id="fonctions-predefinies">Fonctions prédéfinies :</h3>
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

          <h3 id="boucles-et-conditions">Boucles et Conditions :</h3>
          <h4>Boucles</h4>
          <h4>For...</h4>
          <table>
            <td>
              for <b>i</b> in range(<b>n</b>)
            </td>
          </table>
          <p>
            <b>i</b> est une variable <br />
            <b>n</b> indique le nombre de répétition
          </p>
          <h4>While...</h4>
          <table>
            <td>
              <b>while</b>...
            </td>
          </table>
          <h4>Conditions</h4>
          <h4>1 ou 2 condition</h4>
          <h4>
            Si...
            <br />
            Sinon...
          </h4>
          <table>
            <td>
              <b>if</b>...
              <br />
              <b>else</b>...
            </td>
          </table>
          <h4>3 ou plus conditions</h4>
          <h4>
            Si...
            <br />
            Sinon...
            <br />
            Sinon
          </h4>
          <table>
            <td>
              <b>if</b>...
              <br />
              <b>elif</b>...
              <br />
              <b>else</b>...
            </td>
          </table>
          <br />

          <h3 id="listes">Listes</h3>
          <table>
            <td>
              <b>tab</b>=<b>[</b> ... <b>,</b> ... <b>,</b> ... <b>]</b>
            </td>
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
                <td>Nombres d'éléments dans la liste</td>
              </tr>
              <tr>
                <td>print(tab[n])</td>
                <td>Affiche l'élément de la liste à l'indice 0</td>
              </tr>
              <tr>
                <td>tab.append(x)</td>
                <td>Ajoute à la fin de la liste l'élément x choisi</td>
              </tr>
              <tr>
                <td>tab_2 = tab_1.copy()</td>
                <td>Crée la liste tab_2, copie partielle de tab_1</td>
              </tr>
              <tr>
                <td>del(liste[indice])</td>
                <td>Supprime l'émément à l'indice mit entre crochets</td>
              </tr>
            </tbody>
          </table>
          <br />

          <h3 id="chaines-de-caracteres">Chaînes de caractères :</h3>
          <table>
            <td>
              <b>ch</b>=<b>"</b>...<b>"</b>
            </td>
          </table>
          <table>
            <thead>
              <th>Fonction</th>
              <th>Usage</th>
            </thead>
            <tbody>
              <tr>
                <td>len(ch)</td>
                <td>Nombres d'éléments dans la chaîne de caractère</td>
              </tr>
              <tr>
                <td>print(ch[0])</td>
                <td>
                  Affiche l'élément de la chaîne de caractères à l'indice 0
                </td>
              </tr>
            </tbody>
          </table>
          <br />

          <h3 id="tuples">Tuples :</h3>
          <table>
            <td>
              <b>nom</b>=<b>(</b>...<b>,</b>...<b>,</b>...<b>)</b>
            </td>
          </table>
          <table>
            <thead>
              <th>Fonction</th>
              <th>Usage</th>
            </thead>
            <tbody>
              <tr>
                <td>len(ch)</td>
                <td>Nombres d'éléments dans le tuple</td>
              </tr>
              <tr>
                <td>print(ch[0])</td>
                <td>Affiche l'élément du tuple à l'indice 0</td>
              </tr>
            </tbody>
          </table>

          <p>
            <b>!</b> Les listes, chaines de caractères et tuples sont
            concaténables.
            <br />
            <b>!</b> Les listes et dictionnaires sont mutables.
          </p>
          <br />

          <h3 id="dictionnaires">Dictionnaires :</h3>
          <table>
            <td>
              <b>dico</b>=<b>[</b>clé_1<b>:</b>valeur_1, clé_2<b>:</b>valeur_2
              <b>]</b>
            </td>
          </table>
          <table>
            <thead>
              <th>Fonction</th>
              <th>Usage</th>
            </thead>
            <tbody>
              <tr>
                <td>len(dico)</td>
                <td>Nombres de couples clé-valeur dans le dictionnaire</td>
              </tr>
              <tr>
                <td>print(dico[0])</td>
                <td>
                  Affiche la valeur associée à la première clé du dictionnaire
                </td>
              </tr>
              <tr>
                <td>print(dico[0])</td>
                <td>
                  Affiche la valeur associée à la première clé du dictionnaire
                </td>
              </tr>
              <tr>
                <td>dico.get(clé)</td>
                <td>
                  Affiche la clé et sa valeur si elle existe dans le
                  dictionnaire
                </td>
              </tr>
              <tr>
                <td>dico.keys()</td>
                <td>Affiche les toutes les clés du dictionnaires</td>
              </tr>
              <tr>
                <td>dico.values()</td>
                <td>Affiche les toutes les valeurs du dictionnaires</td>
              </tr>
              <tr>
                <td>dico.items()</td>
                <td>
                  Affiche les touts les couples clé-valeur du dictionnaires
                </td>
              </tr>
              <tr>
                <td>dico.clear()</td>
                <td>Vide le dictionnaire</td>
              </tr>
              <tr>
                <td>dico.pop(clé, valeur)</td>
                <td>
                  Supprime une clé et sa valeur, si elle n'existe pas elle
                  renvoie la valeur entrée
                </td>
              </tr>
              <tr>
                <td>dico.del(clé)</td>
                <td>Supprime une clé et sa valeur</td>
              </tr>
              <tr>
                <td>dico_2 = dico_1.copy()</td>
                <td>Crée dico_2, copie de dico_1</td>
              </tr>
              <tr>
                <td>dico.update(&#123;"clé":"valeur"&#125;)</td>
                <td>Ajoute le couple clé-valeur entré en paramètre</td>
              </tr>
            </tbody>
          </table>

          <p>
            <b>!</b> Les clés sont <b>uniques</b> et associées à <b>une</b>{" "}
            valeur, si on ajoute un couple clé-valeur de même nom, elle est
            modifiée.
            <br />
            <b>!</b> On peut avoir deux mêmes valeur mais pas deux mêmes clés.
            <br />
            <b>!</b> Les clés et les valeurs peuvent avoir n'importe quel type.
          </p>
        </div>
      </div>
    </>
  );
}

export default Python;
