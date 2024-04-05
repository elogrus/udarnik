import React from "react";
import Header from "../../modules/Header/Header";
import Game from "../../modules/Game/Game";
import styles from "./styles.module.css";

const Test = () => {

    return (
        <div className={styles.container}>
            <Header />
            
            <Game countWords={10} showRecord={false}/>
        </div>
    );
};

export default Test;
