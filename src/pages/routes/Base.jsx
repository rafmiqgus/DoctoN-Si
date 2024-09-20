import React, { useState } from "react";
import styles from '../../styles/Page.module.css';
import myImage from '../../img/binaire_exp.png';
import myHexa from '../../img/hexa_exp.png';
import dots from '../../img/dots.svg';

function Binaire() {

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
        <div className={styles.Sommaire}>
          <div className={`${styles.hoverAreaContainer} ${isHovered ? styles.noStyle : ""}`}>
            <div
              className={`${styles.hoverArea} ${isHovered ? styles.noStyle : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`${styles.dots} ${isHovered ? styles.displayNone : ""}`}
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
                <div className={styles.hoverBarContainer}>
                  <div className={styles.hoverBar}>
                    <button
                      className={styles.barButton}
                      onClick={() => scrollToSection("section1")}
                    >
                      Le systeme decimale
                    </button>
                    <button
                      className={styles.barButton}
                      onClick={() => scrollToSection("section2")}
                    >
                      Le binaire
                    </button>
                    <button
                      className={styles.barButton}
                      onClick={() => scrollToSection("section3")}
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
                      Conversion entre Hexadécimal → Binaire
                    </button>
                    <button
                      className={styles.barButton}
                      onClick={() => scrollToSection("section7")}
                    >
                      Conversion décimal → hexadécimal
                    </button>
                    <button
                      className={styles.barButton}
                      onClick={() => scrollToSection("section8")}
                    >
                      Conversion d'une Base quelconque en Décimal
                    </button>
                    <button
                      className={styles.barButton}
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
        <div className={`${styles.Block} ${isHovered ? styles.blurred : ""}`}>
          <div id="section1" className={styles.section}></div>
          <h1 className={styles.h1}>Bases</h1>
          <br />
          <h2 className={styles.h2}>Le système décimal: </h2>
          <br />
          <p className={styles.p}>
            Au quotidien nous utilisons le système décimal aussi appelé base 10{" "}
            <br/>
            car nous utilisons 10 caractères pour encoder l'ensemble des
            nombres.
            <br />
            <br />
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            <br />
            <br />
            Et si l'on veut aller au-delà de 9, <b>il faut changer de base.</b>
            <br />
            <br />
            La machine vas interpreter le nombre <b>10</b> comme le nombre{" "}
            <b>1</b> + <b>0</b> et non pas comme le nombre que nous avons
            l'habitude d'utiliser chaque jour.
            <br />
            C'est donc pour cette raison que nous avons besoin de changer de
            base, pour que la machine interprete le nombre voulu.
          </p>
          <p className={styles.p}>
            Puisque nous sommes en <b>base 10</b> on peut décomposer l’ensemble
            des nombres en puissance de <b>10 </b>
            par exemple:
            <br />
            <br />
            <h4>
              4567 = 4 x10<sup>3</sup> + 5 x10<sup>2</sup> + 6 x10<sup>1</sup> +
              7 x10<sup>0</sup> &emsp;(on rappelle que 10<sup>0</sup> = 1)
              <br />
              <br />
            </h4>
            <p className={styles.p}>
              Un nombre est égal à la somme des valeurs de ses rangs, et on peut
              décomposer n'importe quel nombre en puissances de sa base.
            </p>
            <p className={styles.p}>
              4567 : chaque chiffre a un rang : <b>7</b> est au rang <b>0</b>,{" "}
              <b>6</b> au rang <b>1</b>, ect...
              <br />
              (On remarque que le rang est compté de doite a gauche...)
            </p>
            <div id="section2" className={styles.section}></div>
            <br/>
            <h2 className={styles.h2}>Le binaire:</h2>
            <br/>
            <p className={styles.p}>
              Le binaire c'est le systéme de numération qu'utilise les
              ordinateur.
              <br />
              Pourquoi le binaire ? parceque le bianire et pour l'ordinateur
              traduit avec un systeme éléctrique
              <br />
              Si c'est 1 alors c'est allumé, si c'est 0 alors c'est éteint.
              <br />
              C'est comme un interrupteur il y la position allumé et éteint
              <br />
              qui après effectue l'action allumé/étaindre la lumière
              <br />
              Dans le bianire il n'y as donc que deux nombre
            </p>
            <br/>
            <table>
              <thead>
                <tr>
                  <th>decimale</th>
                  <th>binaire</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>101</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>110</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>111</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>1001</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>1010</td>
                </tr>
              </tbody>
            </table>
            <br/>
            <div id="section3" className={styles.section}></div>
            <h2 className={styles.h2}>Conversion décimal → binaire</h2>
            <p className={styles.p}>
              Pour convertir un nombre decimal en binaire on le divise par 2{" "}
              <br />
              car les nombre binaire sont des multiples de 2.
              <br />
              Le résultat est l'inverse de tout les restes
              <br />
            </p>
            <br/>
            <img src={myImage} alt="Description" />
            <br/>
            <p className={styles.p}>
              Le résultat de <b>77</b> en binaire et donc : <b>1001101</b>
            </p>
            <div id="section4" className={styles.section}></div>
            <h2 className={styles.h2}>Conversion binaire → décimal</h2>
            <p className={styles.p}>
              Pour convertir un nombre binaire, comme <b>10101101</b>, en nombre
              décimal, on utilise une méthode simple. Voici comment faire :
            </p>
            <br/>
            <h3 className={styles.h3}>1. Comprendre les rangs et les puissances de deux</h3>
            <p className={styles.p}>
              Chaque chiffre du nombre binaire <b>10101101</b> est un bit. Les
              rangs et leurs puissances de deux sont les suivants :
            </p>
            <pre>
              1 0 1 0 1 1 0 1<br />7 6 5 4 3 2 1 0 ----Rang
            </pre>
            <br/>
            <h3 className={styles.h3}>2. Calculer la valeur décimale de chaque bit</h3>
            <p className={styles.p}>
              Pour chaque bit, on multiplie par la puissance de 2 de son rang.
              Voici les calculs pour <b>10101101</b> :
            </p>
            <ul>
              <li>
                1 &times; 2<sup>0</sup> = 1
              </li>
              <li>
                0 &times; 2<sup>1</sup> = 0
              </li>
              <li>
                1 &times; 2<sup>2</sup> = 4
              </li>
              <li>
                1 &times; 2<sup>3</sup> = 8
              </li>
              <li>
                0 &times; 2<sup>4</sup> = 0
              </li>
              <li>
                1 &times; 2<sup>5</sup> = 32
              </li>
              <li>
                0 &times; 2<sup>6</sup> = 0
              </li>
              <li>
                1 &times; 2<sup>7</sup> = 128
              </li>
            </ul>
            <br/>
            <h3 className={styles.h3}>3. Faire la somme des valeurs obtenues</h3>
            <p className={styles.p}>Ajoutez toutes les valeurs calculées ensemble :</p>
            <p className={styles.p}>
              <strong>128 + 0 + 32 + 0 + 8 + 4 + 0 + 1 = 173</strong>
            </p>
            <p className={styles.p}>
              Donc, le nombre binaire <b>10101101</b> correspond au nombre
              décimal <b>173</b>.
            </p>
            <h3 className={styles.h3}>Récapitulatif</h3>
            <ul>
              <li>
                <b>10101101</b> en binaire
              </li>
              <li>
                Multiplications par les puissances de 2 :
                <ul>
                  <li>
                    1 &times; 2<sup>0</sup> = 1
                  </li>
                  <li>
                    0 &times; 2<sup>1</sup> = 0
                  </li>
                  <li>
                    1 &times; 2<sup>2</sup> = 4
                  </li>
                  <li>
                    1 &times; 2<sup>3</sup> = 8
                  </li>
                  <li>
                    0 &times; 2<sup>4</sup> = 0
                  </li>
                  <li>
                    1 &times; 2<sup>5</sup> = 32
                  </li>
                  <li>
                    0 &times; 2<sup>6</sup> = 0
                  </li>
                  <li>
                    1 &times; 2<sup>7</sup> = 128
                  </li>
                </ul>
              </li>
              <li>
                Somme des résultats :{" "}
                <strong>128 + 0 + 32 + 0 + 8 + 4 + 0 + 1 = 173</strong>
              </li>
            </ul>
            <p className={styles.p}>
              Ainsi, la conversion de <b>10101101</b> en décimal donne{" "}
              <b>173</b>.
            </p>
            <div id="section5" className={styles.section}></div>
            <h2 className={styles.h2}>L’hexadécimal</h2>
            <h3 className={styles.h3}>Pourquoi Utiliser l'Hexadécimal en Informatique</h3>
            <p className={styles.p}>
              En informatique, on utilise souvent le système binaire (avec les
              chiffres 0 et 1) <br />
              car il est très efficace pour les signaux électriques. Cependant,
              il est difficile à utiliser dans la vie de tous les jours. <br />
              C'est pourquoi on préfère souvent le système décimal (base 10)
              dans la vie quotidienne.
            </p>
            <p className={styles.p}>
              Le système hexadécimal (base 16) est utilisé en informatique car
              il simplifie l'encodage des données.
              <br />
              Le nombre 16 est une puissance de 2 (16 = 2<sup>4</sup>), ce qui
              permet de représenter 8 bits avec seulement 2 chiffres
              hexadécimaux. <br />
              En hexadécimal, nous utilisons les chiffres de 0 à 9 et les
              lettres de A à F pour représenter les valeurs.
            </p>
            <p className={styles.p}>
              Cela signifie que : 0 1 2 3 4 5 6 7 8 9 A B C D E F sont les
              symboles utilisés en hexadécimal.
            </p>
            <p className={styles.p}>
              Voici un tableau qui regroupr toute les convertion entre B16, B10,
              B2 :
            </p>
            <table>
              <thead>
                <tr>
                  <th>base 2</th>
                  <th>base 10</th>
                  <th>base 16</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0000</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>0001</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>0010</td>
                  <td>2</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>0011</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>0100</td>
                  <td>4</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>0101</td>
                  <td>5</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>0110</td>
                  <td>6</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>0111</td>
                  <td>7</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>1000</td>
                  <td>8</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>1001</td>
                  <td>9</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>1010</td>
                  <td>10</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>1011</td>
                  <td>11</td>
                  <td>B</td>
                </tr>
                <tr>
                  <td>1100</td>
                  <td>12</td>
                  <td>C</td>
                </tr>
                <tr>
                  <td>1101</td>
                  <td>13</td>
                  <td>D</td>
                </tr>
                <tr>
                  <td>1110</td>
                  <td>14</td>
                  <td>E</td>
                </tr>
                <tr>
                  <td>1111</td>
                  <td>15</td>
                  <td>F</td>
                </tr>
              </tbody>
            </table>
            <div id="section6" className={styles.section}></div>
            <h3 className={styles.h3}>Conversion entre Hexadécimal et Binaire</h3>
            <p className={styles.p}>
              Le chiffre le plus grand en hexadécimal est <strong>F</strong>,
              correspondant à <strong>15</strong> en décimal et{" "}
              <strong>1111</strong> en binaire.
            </p>
            <p className={styles.p}>
              Pour convertir un nombre binaire en base 16 (hexadécimal), on
              regroupe les bits par groupe de 4, chaque groupe donnant un
              chiffre hexadécimal.
            </p>
            <p className={styles.p}>
              Pour convertir un nombre hexadécimal en binaire, chaque chiffre
              est remplacé par son équivalent sur 4 bits.
            </p>
            <p className={styles.p}>
              Si le nombre binaire initial n'a pas un nombre de bits multiple de
              4, des zéros sont ajoutés à gauche pour permettre le regroupement
              par groupe de 4.
            </p>
            <p className={styles.p}>
              Par exemple,{" "}
              <strong>
                A3E<sub>16</sub>
              </strong>{" "}
              en base 16 est converti en binaire en regroupant chaque chiffre :{" "}
              <strong>A</strong> devient <strong>1010</strong>,{" "}
              <strong>3</strong> devient <strong>0011</strong>, et{" "}
              <strong>E</strong> devient <strong>1110</strong>, donc{" "}
              <strong>
                A3E<sub>16</sub>
              </strong>{" "}
              en binaire est <strong>101000111110</strong>.
            </p>
            <div id="section7" className={styles.section}></div>
            <h3 className={styles.h3}>Conversion décimal → hexadécimal</h3>
            <p className={styles.p}>
              Pour convertir un nombre décimal en hexadécimal, la méthode est
              similaire à celle du binaire, sauf que cette fois-ci, on divise
              par 16.
              <br />
              Pour 10217:
            </p>
            <img src={myHexa} alt="Description" />
            <p className={styles.p}>
              Le principe est le même que pour la conversion "binaire en
              décimal" mais en utilisant des puissances de 16 :
            </p>
            <h4>Exemple:</h4>
            <p className={styles.p}>
              Convertir{" "}
              <strong>
                3AF2<sub>16</sub>
              </strong>{" "}
              en décimal.
            </p>
            <p className={styles.p}>
              On utilise les puissances de 16 pour chaque chiffre hexadécimal :
            </p>
            <pre>
              3AF2<sub>16</sub> = 3 x 16^3 + A x 16^2 + F x 16^1 + 2 x 16^0 = 3
              x 4096 + 10 x 256 + 15 x 16 + 2 x 1 = 12288 + 2560 + 240 + 2 =
              15090
            </pre>
            <p className={styles.p}>
              Donc,{" "}
              <strong>
                3AF2<sub>16</sub>
              </strong>{" "}
              est égal à <strong>15090</strong> en décimal.
            </p>
            <div id="section8" className={styles.section}></div>
            <h2 className={styles.h2}>Conversion d'une Base quelconque en Décimal</h2>
            <p className={styles.p}>
              Pour convertir un nombre d'une base quelconque ( b ) en nombre
              décimal, on utilise des puissances de ( b ) :
            </p>
            <h3 className={styles.h3}>Exemple:</h3>
            <p className={styles.p}>
              Convertir{" "}
              <strong>
                3AF2<sub>16</sub>
              </strong>{" "}
              en décimal.
            </p>
            <p className={styles.p}>
              On utilise les puissances de 16 pour chaque chiffre hexadécimal :
            </p>
            <pre>
              3AF2<sub>16</sub> = 3 x 16^3 + A x 16^2 + F x 16^1 + 2 x 16^0 = 3
              x 4096 + 10 x 256 + 15 x 16 + 2 x 1 = 12288 + 2560 + 240 + 2 =
              15090
            </pre>
            <p className={styles.p}>
              Donc,{" "}
              <strong>
                3AF2<sub>16</sub>
              </strong>{" "}
              est égal à <strong>15090</strong> en décimal.
            </p>
            <div id="section9" className={styles.section}></div>
            <h3 className={styles.h3}>Généralisation pour une base ( b )</h3>
            <p className={styles.p}>
              Pour convertir un nombre de la base ( b ) en nombre décimal, on
              utilise la formule suivante :
            </p>
            <pre>
              N<sub>b</sub> = d<sub>n-1</sub> x b^(n-1) + d<sub>n-2</sub> x
              b^(n-2) + ... + d<sub>1</sub> x b^1 + d<sub>0</sub> x b^0
            </pre>
            <p className={styles.p}>
              où ( N ) est le nombre en base ( b ), ( d ) est chaque chiffre du
              nombre en base ( b ), et ( n ) est le nombre de chiffres.
            </p>
            <h3 className={styles.h3}>Exemple Généralisé:</h3>
            <p className={styles.p}>
              Convertir{" "}
              <strong>
                3AF2<sub>b</sub>
              </strong>{" "}
              en base ( b ).
            </p>
            <p className={styles.p}>On utilise les puissances de ( b ) pour chaque chiffre :</p>
            <pre>
              3AF2<sub>b</sub> = 3 x b^3 + A x b^2 + F x b^1 + 2 x b^0
            </pre>
            <p className={styles.p}>
              Remplacez les chiffres hexadécimaux par leurs valeurs décimales si
              nécessaire :
            </p>
            <pre>A = 10, F = 15</pre>
            <p className={styles.p}>Donc :</p>
            <pre>3 x b^3 + 10 x b^2 + 15 x b^1 + 2 x b^0</pre>
            <p className={styles.p}>
              En utilisant la base hexadécimale comme exemple où ( b = 16 ), on
              obtient :
            </p>
            <pre>3 x 16^3 + 10 x 16^2 + 15 x 16^1 + 2 x 16^0</pre>
          </p>
        </div>
      </>
    );
}

export default Binaire;

