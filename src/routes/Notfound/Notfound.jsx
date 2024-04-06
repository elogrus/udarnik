import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../modules/Button/Button";
import styles from "./styles.module.css";
import Header from "../../modules/Header/Header";

const Notfound = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <Header />
            <p>Кажется, вы не туда завернули.</p>

            <Button onClick={() => navigate(-1)}>Вернуться обратно</Button>
        </div>
    );
};

export default Notfound;
