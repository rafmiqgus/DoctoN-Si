import React from "react";
import { useState } from "react";
import "../styles/Binaire.css";
import dots from "../img/dots.svg";

function Algo() {
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
      <div className="Sommaire-binaire">
        <div
          className={`hover-area-binaire-container ${
            isHovered ? "no-style-binaire" : ""
          }`}
        >
          <div
            className={`hover-area-binaire ${
              isHovered ? "no-style-binaire" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`dots-binaire ${
                isHovered ? "display-none-binaire" : ""
              }`}
            >
              <embed
                src={dots}
                id="Dots-svg"
                width="20px"
                height="55px"
                fill="white"
              />
            </div>
            {isHovered && (
              <div className="hover-bar-container-binaire">
                <div className="hover-bar-binaire">
                  <button
                    className="bar-button-binaire"
                    onClick={() => scrollToSection("section1")}
                  >
                    Le systeme decimale
                  </button>
                  <button
                    className="bar-button-binaire"
                    onClick={() => scrollToSection("section2")}
                  >
                    Le binaire
                  </button>
                  <button
                    className="bar-button-binaire"
                    onClick={() => scrollToSection("section3")}
                  >
                    Conversion décimal → binaire
                  </button>
                  <button
                    className="bar-button-binaire"
                    onClick={() => scrollToSection("section4")}
                  >
                    Conversion binaire → décimal
                  </button>
                  <button
                    className="bar-button-binaire"
                    onClick={() => scrollToSection("section5")}
                  >
                    Hexadécimal
                  </button>
                  <button
                    className="bar-button-binaire"
                    onClick={() => scrollToSection("section6")}
                  >
                    Conversion entre Hexadécimal → Binaire
                  </button>
                  <button
                    className="bar-button-binaire"
                    onClick={() => scrollToSection("section7")}
                  >
                    Conversion décimal → hexadécimal
                  </button>
                  <button
                    className="bar-button-binaire"
                    onClick={() => scrollToSection("section8")}
                  >
                    Conversion d'une Base quelconque en Décimal
                  </button>
                  <button
                    className="bar-button-binaire"
                    onClick={() => scrollToSection("section9")}
                  >
                    Généralisation pour une base ( b )
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`Binaire ${isHovered ? "blurred-binaire" : ""}`}>
        <h1>Explication des Algorithmes</h1>
        <h2>
          <b>Tri par Insertion</b>
        </h2>
        <p>
          Le tri par insertion est comme organiser des cartes à jouer dans vos
          mains. Vous prenez une carte à la fois et la placez dans le bon ordre
          par rapport aux cartes déjà dans votre main.
        </p>
        <h3>Étapes du tri par insertion :</h3>
        <ol>
          <li>
            Commencez avec le deuxième élément de la liste (le premier élément
            est déjà considéré comme trié).
          </li>
          <li>Comparez cet élément avec les éléments triés (à gauche).</li>
          <li>
            Déplacez les éléments plus grands vers la droite pour faire de la
            place.
          </li>
          <li>
            <b>Insérez l'élément à sa place correcte.</b>
          </li>
          <li>
            Répétez pour chaque élément jusqu'à ce que toute la liste soit
            triée.
          </li>
        </ol>
        <h4>Exemple :</h4>
        <p>Liste non triée : [4, 3, 2, 10, 12, 1, 5, 6]</p>
        <p>
          1. Prenez 3 (deuxième élément) et comparez avec 4. Déplacez 4 à droite
          et placez 3 à gauche.
          <br />
          Liste : [3, 4, 2, 10, 12, 1, 5, 6]
        </p>
        <p>
          2. Prenez 2 et comparez avec 4 et 3. Déplacez 4 et 3 à droite, placez
          2 au début.
          <br />
          Liste : [2, 3, 4, 10, 12, 1, 5, 6]
        </p>
        <p>
          3. Prenez 10, il est déjà à la bonne place.
          <br />
          Liste : [2, 3, 4, 10, 12, 1, 5, 6]
        </p>
        <p>
          4. Continuez ainsi jusqu'à la fin.
          <br />
          Liste triée : [1, 2, 3, 4, 5, 6, 10, 12]
        </p>
        <h2>
          <b>Tri par Sélection</b>
        </h2>
        <p>
          Le tri par sélection consiste à trouver le plus petit (ou le plus
          grand) élément dans la liste et le placer à sa position correcte.
          Ensuite, on continue avec le reste de la liste.
        </p>
        <h3>Étapes du tri par sélection :</h3>
        <ol>
          <li>
            <b>
              Trouvez le plus petit élément de la liste et échangez-le avec le
              premier élément.
            </b>
          </li>
          <li>
            Trouvez le plus petit élément parmi les éléments restants et
            échangez-le avec le deuxième élément.
          </li>
          <li>Répétez ce processus pour chaque position dans la liste.</li>
        </ol>
        <h4>Exemple :</h4>
        <p>Liste non triée : [64, 25, 12, 22, 11]</p>
        <p>
          1. Trouvez le plus petit élément (11) et échangez avec le premier
          (64).
          <br />
          Liste : [11, 25, 12, 22, 64]
        </p>
        <p>
          2. Trouvez le plus petit élément parmi le reste (12) et échangez avec
          le deuxième (25).
          <br />
          Liste : [11, 12, 25, 22, 64]
        </p>
        <p>
          3. Continuez ainsi jusqu'à la fin.
          <br />
          Liste triée : [11, 12, 22, 25, 64]
        </p>
        <h2>
          <b>Algorithme Glouton</b>
        </h2>
        <p>
          Un algorithme glouton résout des problèmes étape par étape en faisant
          à chaque étape le choix qui semble le meilleur à ce moment-là. Ces
          choix ne sont pas toujours optimaux à long terme, mais sont simples et
          souvent efficaces.
        </p>
        <h3>Exemple : Problème du rendu de monnaie</h3>
        <p>
          Vous devez rendre la monnaie avec le moins de pièces possible.
          Supposez que vous avez des pièces de 1€, 2€ et 5€.
        </p>
        <h4>Étapes de l'algorithme glouton :</h4>
        <ol>
          <li>
            <b>
              Prenez la plus grande pièce possible qui ne dépasse pas le montant
              restant à rendre.
            </b>
          </li>
          <li>Soustrayez cette valeur du montant restant.</li>
          <li>Répétez jusqu'à ce que le montant restant soit 0.</li>
        </ol>
        <h4>Exemple :</h4>
        <p>Rendre 9€ avec des pièces de 1€, 2€, 5€.</p>
        <p>
          1. Prenez 5€ (le plus grand possible).
          <br />
          Reste : 9 - 5 = 4€
        </p>
        <p>
          2. Prenez 2€.
          <br />
          Reste : 4 - 2 = 2€
        </p>
        <p>
          3. Prenez encore 2€.
          <br />
          Reste : 2 - 2 = 0€
        </p>
        <p>Total : 5€ + 2€ + 2€ = 9€</p>
      </div>
    </>
  );
}
export default Algo;
