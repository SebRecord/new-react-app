import React from "react";
import styles from './PageButton.module.css';
import { NavLink } from "react-router-dom";

//To be used in the app sidebar only

function PageButton(props){
    return (
        <NavLink to={props.path} className={({isActive}) => isActive ? `${styles.button} ${styles.active}` : `${styles.button}`}>
           {props.name}
        </NavLink>
    )
}

export default PageButton;