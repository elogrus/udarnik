import React from "react";
import Header from "../../modules/Header/Header";
import Game from "../../modules/Game/Game";
import styles from "./styles.module.css";

const Survival = () => {

    return (
        <div className={styles.container}>
            <Header />
            
            <Game countWords={-1} showRecord={true}/>
        </div>
    );
};

export default Survival;
