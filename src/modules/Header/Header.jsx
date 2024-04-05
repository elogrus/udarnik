import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import WhiteLogo from "../Assets/WhiteLogo";

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <Link className={styles.logolink} to={`/`}>
                    <WhiteLogo className={styles.logo}/>
                </Link>
                <nav className={styles.navbar}>
                    <Link className={styles.navbarItem} to={`/test/`}>
                        Тест из 10 слов
                    </Link>
                    <Link className={styles.navbarItem} to={`/survival/`}>
                        Выживание
                    </Link>
                    <Link className={styles.navbarItem} to={`/list/`}>
                        Полный список слов
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
