import React from "react";
import styles from "./styles.module.css";
import Header from "../../modules/Header/Header";

const Lifehacks = () => {
    return (
        <div className={styles.container}>
            <Header />
            <span className={styles.title}>Лайфхаки</span>
            <div className={styles.lifehacks}>
                <span className={styles.lifehack}>
                    В словах с корнями "-лог" и "-вод" часто ударение падает на
                    них.
                    <span className={styles.example}>
                        Катал<e>о</e>г, некрол<e>о</e>г, прол<e>о</e>г, диал
                        <e>о</e>г, монол<e>о</e>г
                        <br />
                        Подв<e>о</e>д, чаев<e>о</e>д, разв<e>о</e>д, углев
                        <e>о</e>д, полев<e>о</e>д
                        <span className={styles.marked}>
                            {" "}
                            (НО электропр<e>о</e>вод)
                        </span>
                    </span>
                </span>

                <span className={styles.lifehack}>
                    Если в слове есть буква Ё, то на нее (почти) всегда падает
                    ударение (в реальных вариантах "Ё" заменена на "Е").
                    <span className={styles.example}>
                        Гран<e>ё</e>ный, дал<e>ё</e>кий, жж<e>ё</e>ный
                    </span>
                </span>

                <span className={styles.lifehack}>
                    Прилагательные часто сохраняют ударение на том же слоге, что
                    и существительные, от которых они образованы
                    <span className={styles.example}>
                        к<e>у</e>хонный (к<e>у</e>хня), <br />
                        эксп<e>е</e>ртный (эксп<e>е</e>рт), <br />
                        <e>а</e>вгустовский (<e>а</e>вгуст), <br />
                        сл<e>и</e>вовый (сл<e>и</e>ва)
                    </span>
                </span>
            </div>
        </div>
    );
};

export default Lifehacks;
