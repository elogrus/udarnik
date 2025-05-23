import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "../../modules/Button/Button";
import wordsJson from "../../Words/words.json";
import LetterBox from "../LetterBox/LetterBox";
import ScorePanel from "../ScorePanel/ScorePanel";

// countWords = -1 - выживание
const Game = ({ countWords = 10, showRecord = true }) => {
    // 'not-started' -> 'playing' -> 'ended'

    const [words, setWords] = useState([]);
    const [gameStatus, setGameStatus] = useState("not-started");
    const [score, setScore] = useState(-1);
    const [curStep, setCurStep] = useState(0);
    const [lastSelectedIndex, setLastSelectedIndex] = useState(0);
    const [isLastWon, setIsLastWon] = useState(false);

    const setRecord = (record) => {
        if (localStorage.getItem("record") < record)
            localStorage.setItem("record", record);
    };

    const startGame = () => {
        setScore(0);
        setCurStep(0);
        const shuffledWords = wordsJson.sort(() => 0.5 - Math.random());
        setWords(shuffledWords);
        setGameStatus("playing");
    };

    const stopGame = (isWon = false) => {
        setIsLastWon(isWon);
        setGameStatus("ended");
    };

    const addScore = (number = 1) => {
        setScore(score + number);
    };

    const goNextWord = (right) => {
        if (right) {
            if (curStep + 1 === countWords) {
                addScore();
                setRecord(score);
                return stopGame(true);
            }

            if (curStep === words.length) {
                setCurStep(0);
            } else {
                setCurStep(curStep + 1);
            }
            addScore();
        } else {
            setRecord(score);
            stopGame();
        }
    };

    const onSelectLetter = (selectedLetterIndex, word, event) => {
        setLastSelectedIndex(selectedLetterIndex);
        if (selectedLetterIndex === word.emphasisIndex) {
            goNextWord(true);
        } else {
            goNextWord(false);
        }
    };

    return (
        <div className={styles.content}>
            {gameStatus === "not-started" && (
                <>
                    {score >= 0 && (
                        <p className={styles.score}>
                            Предыдущий результат: {score}
                        </p>
                    )}
                    {showRecord && (
                        <p className={styles.score}>
                            Текущий рекорд:{" "}
                            {localStorage.getItem("record") || 0}
                        </p>
                    )}
                    <Button className={styles.startButton} onClick={startGame}>
                        Начать!
                    </Button>
                </>
            )}

            {gameStatus === "playing" && (
                <>
                    <ScorePanel finishScore={countWords}>{score}</ScorePanel>
                    <div className={styles.wordPlayground}>
                        <div className={styles.letters}>
                            {words[curStep]?.word
                                .split("")
                                .map((letter, index) => (
                                    <LetterBox
                                        onClick={(e) =>
                                            onSelectLetter(
                                                index,
                                                words[curStep],
                                                e
                                            )
                                        }
                                    >
                                        {letter}
                                    </LetterBox>
                                ))}
                        </div>
                        {words[curStep]?.context && (
                            <div className={styles.wordContext}>
                                ({words[curStep]?.context})
                            </div>
                        )}
                    </div>
                </>
            )}

            {gameStatus === "ended" && (
                <>
                    <ScorePanel finishScore={countWords}>{score}</ScorePanel>
                    {isLastWon && <p className={styles.title}>Вы победили!</p>}

                    {showRecord && (
                        <p className={styles.score}>
                            Текущий рекорд:{" "}
                            {localStorage.getItem("record") || 0}
                        </p>
                    )}
                    {!isLastWon && (
                        <div className={styles.wordPlayground}>
                            <div className={styles.letters}>
                                {words[curStep]?.word
                                    .split("")
                                    .map((letter, index) => (
                                        <LetterBox
                                            mode={
                                                index ===
                                                words[curStep].emphasisIndex
                                                    ? "right"
                                                    : index ===
                                                      lastSelectedIndex
                                                    ? "not-right"
                                                    : "not-selected"
                                            }
                                        >
                                            {letter}
                                        </LetterBox>
                                    ))}
                            </div>
                            {words[curStep]?.context && (
                                <div className={styles.wordContext}>
                                    ({words[curStep]?.context})
                                </div>
                            )}
                        </div>
                    )}

                    <Button className={styles.startButton} onClick={startGame}>
                        Попробовать еще раз!
                    </Button>
                </>
            )}
        </div>
    );
};

export default Game;
