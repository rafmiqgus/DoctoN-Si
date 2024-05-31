import React from "react";
import Acceuil from './Acceuil'
import Python from './Python';
import Binaire from './Binaire';
import Algorithmes from './Algorithmes';
import JavaScript from './JavaScript';
import '../styles/App.css'
import Logo from "../img/logo.svg";
import { AiFillGithub } from "react-icons/ai";


const App = () => {
  let github_link = "https://github.com/rafmiqgus/DoctoN-Si";
  let component;

  switch (window.location.pathname) {
    case "/":
      component = <Acceuil />;
      break;
    case "/Python":
      component = <Python />;
      break;
    case "/Binaire":
      component = <Binaire />;
      break;
    case "/Algorithmes":
      component = <Algorithmes />;
      break;
    case "/JavaScript":
      component = <JavaScript />;
      break;
    default:
      component = <Acceuil />;
  }

  return (
    <div className="App flex-column">
      <nav aria-label="Main" className="navbar navbar--fixed-top">
        <div className="navbar__inner">
          <div className="navbar__items">
            <button
              aria-label="Toggle navigation bar"
              aria-expanded="false"
              className="navbar__toggle clean-btn"
              type="button"
            >
              <img src={Logo} alt="Logo" width="30" height="30" />
            </button>
            <a className="navbar__brand" href="/">
              <b className="navbar__title text--truncate">Docto N'SI</b>
            </a>
            <a
              aria-current="page"
              className="navbar__item navbar__link navbar__link--active"
              href="/Python"
            >
              Python
            </a>
            <a
              aria-current="page"
              className="navbar__item navbar__link navbar__link--active"
              href="/Binaire"
            >
              Binaire
            </a>
            <a
              aria-current="page"
              className="navbar__item navbar__link navbar__link--active"
              href="/Algorithmes"
            >
              Algorithmes
            </a>
            <a
              aria-current="page"
              className="navbar__item navbar__link navbar__link--active"
              href="/JavaScript"
            >
              JavaScript
            </a>
          </div>
          <div className="navbar__items navbar__items--right">
            <a
              href={github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__item navbar__link github flex"
            >
              Github&nbsp;
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div role="presentation" className="navbar-sidebar__backdrop"></div>
      </nav>
      <div className="page flex">{component}</div>
    </div>
  );
};

export default App;
