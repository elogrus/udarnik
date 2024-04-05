import React from "react";
import styles from "./styles.module.css";

const ScorePanel = ({ children, finishScore=-1, className, ...props }) => {
    return <div className={styles.scorepanel + " " + className} {...props}>{finishScore === -1 ? children : children + ' / ' + finishScore}</div>;
};

export default ScorePanel;
