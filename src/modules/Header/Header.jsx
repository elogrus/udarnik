import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import WhiteLogo from "../Assets/WhiteLogo";
import WhiteMinLogo from "../Assets/WhiteMinLogo";
import { slide as Menu } from "react-burger-menu";

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <Link className={styles.logolink} to={`/`}>
                    <WhiteMinLogo className={styles.minlogo} />
                    <WhiteLogo className={styles.logo} />
                </Link>
                <nav className={styles.navbar + " " + styles.burgerNavbar}>
                    <Menu
                        styles={{ bmMenuWrap: { top: "0" } }}
                        burgerButtonClassName={styles.bmBurgerButton}
                        burgerBarClassName={styles.bmBurgerBars}
                        crossButtonClassName={styles.bmCrossButton}
                        crossClassName={styles.bmCross}
                        menuClassName={styles.bmMenu}
                        morphShapeClassName={styles.bmMorphShape}
                        itemListClassName={styles.bmItemList}
                        itemClassName={styles.bmItem}
                        overlayClassName={styles.bmOverlay}
                        // styles={burgerStyles}
                        right>
                        <Link className={styles.navbarItem} to={`/test/`}>
                            Тест из 10 слов
                        </Link>
                        <Link className={styles.navbarItem} to={`/survival/`}>
                            Выживание
                        </Link>
                        <Link className={styles.navbarItem} to={`/listwords/`}>
                            Полный список слов
                        </Link>
                        <Link className={styles.navbarItem} to={`/lifehacks/`}>
                            Лайфхаки
                        </Link>
                    </Menu>
                </nav>
                <nav className={styles.navbar + " " + styles.defaultNavbar}>
                    <Link className={styles.navbarItem} to={`/test/`}>
                        Тест из 10 слов
                    </Link>
                    <Link className={styles.navbarItem} to={`/survival/`}>
                        Выживание
                    </Link>
                    <Link className={styles.navbarItem} to={`/listwords/`}>
                        Полный список слов
                    </Link>
                    <Link className={styles.navbarItem} to={`/lifehacks/`}>
                        Лайфхаки
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
