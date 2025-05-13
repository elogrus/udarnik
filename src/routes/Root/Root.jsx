import Header from "../../modules/Header/Header";
import styles from "./styles.module.css";
import ButtonLink from "../../modules/ButtonLink/ButtonLink";

export default function Root() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <p>Привет!</p>
                <p>
                    Здесь можно потренироваться ставить ударения в словах для
                    решения 4 задания ЕГЭ по русскому языку.
                </p>
                <p>Все слова взяты из орфоэпического списка ФИПИ 2025 года.</p>
                <p>Тыкай на кнопку снизу, чтобы начать!</p>
                <ButtonLink className={styles.button} to={`/test/`}>
                    Тест из 10 слов
                </ButtonLink>
            </div>
        </div>
    );
}
