import React from "react";
import styles from "./Header.module.css";

function Header(){
    return (
        <header className={styles.headerDiv}>
            <h1 className={styles.h1}>This is the H1 header</h1>
        </header>
    );
}

export default Header;