import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import React from 'react';

const ButtonLink = ({children,className, ...props}) => {
    return (
        <Link className={styles.button + ' ' + className} {...props}>
            {children}
        </Link>
    );
}

export default ButtonLink;
