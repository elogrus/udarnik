import React from "react";
import styles from "./styles.module.css";
import Header from "../../modules/Header/Header";

const Aboutme = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.text}>
                Я Плюснин Александр, живу в Лангепасе. Люблю кота и программировать. Вот.
            </div>
        </div>
    );
};

export default Aboutme;
