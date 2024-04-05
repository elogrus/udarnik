import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import React from 'react';

const Button = ({children,className, ...props}) => {
    return (
        <button className={styles.button + ' ' + className} {...props}>
            {children}
        </button>
    );
}

export default Button;
