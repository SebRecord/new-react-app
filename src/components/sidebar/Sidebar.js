import React from "react";
import styles from "./Sidebar.module.css";
import PageButtonContainer from "../pagebuttoncontainer/PageButtonContainer";
import ProfileOptionsContainer from '../profileoptionscontainer/ProfileOptionsContainer';

function Sidebar(){
    return (
        <nav className={styles.sidebarDiv}>
            <h1 className={styles.h1}>Logo</h1>
            <div className={styles.optionsContainer}>
                <PageButtonContainer />
                <ProfileOptionsContainer />
            </div>
        </nav>
    );
}

export default Sidebar;