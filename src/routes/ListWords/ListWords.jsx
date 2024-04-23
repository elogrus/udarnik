import React from "react";
import styles from "./styles.module.css";
import Header from "../../modules/Header/Header";
import wordsJson from "../../Words/words.json";
import WordsBox from "../../modules/WordsBox/WordsBox";

const ListWords = () => {
    const wordsToRender = {
        noun: [],
        adjective: [],
        verb: [],
        participle: [],
        dparticiple: [],
        adverb: [],
    };

    for (let i = 0; i < wordsJson.length; i++) {
        const word = wordsJson[i];
        wordsToRender[word.type].push(word);
    }

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.words}>
                <WordsBox title="Существительные" words={wordsToRender.noun} />
                <WordsBox
                    title="Прилагательные"
                    words={wordsToRender.adjective}
                />
                <WordsBox title="Глаголы" words={wordsToRender.verb} />
                <WordsBox
                    title="Причастия и отглагольные прилагательные"
                    words={wordsToRender.participle}
                />
                <WordsBox
                    title="Деепричастия"
                    words={wordsToRender.dparticiple}
                />
                <WordsBox title="Наречия" words={wordsToRender.adverb} />
            </div>
        </div>
    );
};

export default ListWords;
