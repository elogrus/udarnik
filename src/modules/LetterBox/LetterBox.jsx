import React from "react";
import styles from "./styles.module.css";

// mode: playing, not-selected, right, not-right

const LetterBox = ({ mode='playing', children, onClick, className, ...props }) => {
    const vowelsLetters = "аеёиоуыэюя";
    const isVowel = "аеёиоуыэюя".includes(children);

    if (isVowel) {
        let classNameToSet = styles.box + " " + className + ' '

        if (mode==='playing') 
            classNameToSet += styles.playingBox
        else if (mode==='right') 
            classNameToSet += styles.rightBox
        else  if (mode==='not-right')
            classNameToSet += styles.notRightBox
        return (
            <div
                className={classNameToSet}
                {...props}
                onClick={onClick}>
                {children}
            </div>
        );
    } else {
        return (
            <div className={styles.box + " " + className} {...props}>
                {children}
            </div>
        );
    }
};

export default LetterBox;
