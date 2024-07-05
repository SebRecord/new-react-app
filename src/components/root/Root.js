import React from "react";
import styles from './Root.module.css';
import  Sidebar from '../sidebar/Sidebar';
import { Outlet } from "react-router-dom";

function Root(){
    return (
        <div className={styles.applicationBody}>
            <Sidebar />
            <Outlet />
        </div>
    );
}
export default Root;