import React from "react";
import styles from "./styles.module.css";
// а́ е́ и́ о́ у́ ы́ э́ ю́ я́
const WordsBox = ({ title, words }) => {
    return (
        <div className={styles.content}>
            <span className={styles.title}>{title}</span>
            <div className={styles.words}>
                {words.map((word, index) => (
                    <>
                        <p className={styles.word}>
                            {word.word.slice(0, word.emphasisIndex)}
                            <span className={styles.word + ' ' + styles.wordEmph}>{word.word[word.emphasisIndex]}</span>
                            {word.word.slice(word.emphasisIndex + 1, word.length)}
                        </p>
                    </>
                ))}
            </div>
        </div>
    );
};

export default WordsBox;
