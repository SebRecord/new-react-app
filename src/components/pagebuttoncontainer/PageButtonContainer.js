import React from "react";
import styles from './PageButtonContainer.module.css';
import PageButton from "../pagebutton/PageButton";

function PageButtonContainer(){
    return (
        <div className={styles.container}>
            <PageButton name="Home" path="home"/>
            <PageButton name="Projects" path="projects"/>
            <PageButton name="Time" path="timetracking"/>
            <PageButton name="Clients" path="clients"/>
        </div>
    )
}

export default PageButtonContainer;