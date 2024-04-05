import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../modules/Button/Button";
import styles from "./styles.module.css";

const Notfound = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <p>Мне кажется, вы не туда завернули.</p>

            <Button onClick={() => navigate(-1)}>Вернуться обратно</Button>
        </div>
    );
};

export default Notfound;
