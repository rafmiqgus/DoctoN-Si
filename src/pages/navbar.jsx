import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import Logo from "../img/logo.svg";
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => {
    let github_link = "https://github.com/rafmiqgus/DoctoN-Si";

    return (
        <nav aria-label="Main" className={`${styles.navbar} ${styles['navbar--fixed-top']}`}>
            <div className={styles['navbar__inner']}>
                <div className={styles['navbar__items']}>
                    <button
                      aria-label="Toggle navigation bar"
                      aria-expanded="false"
                        className={`${styles['navbar__toggle']} ${['clean-btn']}`}
                      type="button"
                    >
                        <img src={Logo} alt="Logo" width="30" height="30" />
                    </button>
                    <Link className={`${styles['navbar__brand']}`} to="/">
                        <b className={`${styles['navbar__title']} ${styles['text--truncate']}`}>Docto N'SI</b>
                    </Link>
                    <Link className={`${styles['navbar__items']} ${styles['navbar__link']}`} to="/Python">
                        Python
                    </Link>
                    <Link className={`${styles['navbar__items']} ${styles['navbar__link']}`} to="/Binaire">
                        Base
                    </Link>
                    <Link className={`${styles['navbar__items']} ${styles['navbar__link']}`} to="/Algorithmes">
                        Algorithmes
                    </Link>
                    <Link className={`${styles['navbar__items']} ${styles['navbar__link']}`} to="/JavaScript">
                        JavaScript
                    </Link>
                </div>
                <div className={`${styles['navbar__items']} ${styles['navbar__items--right']}`}>
                    <a
                      href={github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles['navbar__item']} ${styles['navbar__link']} ${styles['github']} ${styles['flex']}`}
                    >
                        Github&nbsp;
                        <AiFillGithub />
                    </a>
                </div>
            </div>
            <div role="presentation" className={styles['navbar-sidebar__backdrop']}></div>
        </nav>
    );
};

export default Navbar;
