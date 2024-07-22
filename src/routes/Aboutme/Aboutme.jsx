import React from "react";
import styles from "./styles.module.css";
import Header from "../../modules/Header/Header";

const Aboutme = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.text}>
                Разработано Плюсниным Александром.<br/>
                <a href="https://elogrus.github.io/mypage" target="_blank">https://elogrus.github.io/mypage</a>
            </div>
        </div>
    );
};

export default Aboutme;
