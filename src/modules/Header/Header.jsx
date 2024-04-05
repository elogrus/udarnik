import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import WhiteLogo from "../Assets/WhiteLogo";
import WhiteMinLogo from "../Assets/WhiteMinLogo";
import { slide as Menu } from "react-burger-menu";

var burgerStyles = {
    bmBurgerButton: {
        position: "relative",
        width: "36px",
        height: "30px",
    },
    bmBurgerBars: {
        background: "#fff",
    },
    bmBurgerBarsHover: {
        background: "#a90000",
    },
    bmCrossButton: {
        height: "24px",
        width: "24px",
    },
    bmCross: {
        background: "#bdc3c7",
    },
    bmMenuWrap: {
        position: "fixed",
        top: '0',
        height: "100%",
    },
    bmMenu: {
        background: "#7C4DFF",
        boxShadow: '12px 0 30px 0px rgba(0,0,0,0.2) inset',
        padding: "2.5em 1.5em 0",
        fontSize: "1.15em",
    },
    bmMorphShape: {
        fill: "#373a47",
    },
    bmItemList: {
        color: "#b8b7ad",
        padding: "0.8em",
    },
    bmItem: {
        display: "inline-block",
        padding: '0.8em 0'
    },
    bmOverlay: {
        background: "rgba(0, 0, 0, 0.3)",
    },
};

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <Link className={styles.logolink} to={`/`}>
                    <WhiteMinLogo className={styles.logo} />
                    {/* <WhiteLogo className={styles.logo} /> */}
                </Link>
                <nav className={styles.navbar}>
                    <Menu styles={burgerStyles} right>
                        <Link className={styles.navbarItem} to={`/test/`}>
                            Тест из 10 слов
                        </Link>
                        <Link className={styles.navbarItem} to={`/survival/`}>
                            Выживание
                        </Link>
                        <Link className={styles.navbarItem} to={`/list/`}>
                            Полный список слов
                        </Link>
                    </Menu>
                </nav>
            </div>
        </header>
    );
};

export default Header;
