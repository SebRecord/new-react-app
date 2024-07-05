import React from "react";
import styles from './Home.module.css';
import PageButton from "../../components/pagebutton/PageButton";
import TimeModule from './timeModule/TimeModule';
import TaskModule from "./taskModule/TaskModule";
import LatestModule from "./projectModules/LatestModule";
import PriorityModule from "./projectModules/PriorityModule";
function Home(){
    return (
        <div className={styles.container}>
            <TimeModule/>
            <TaskModule/>
            <PriorityModule/>
            <LatestModule/>
        </div>
    )
}
export default Home;