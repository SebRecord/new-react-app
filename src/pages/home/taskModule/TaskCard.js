import React from "react";
import styles from './TaskModule.module.css';
import homeStyles from '../Home.module.css';

function TaskCard(props){
    const priorityColor = props.data.priority;
    const bgColorObj = {
        'Background Task':'bgTask',
        'Low':'low',
        'Medium':'medium',
        'High':'high',
        'Urgent':'urgent'
    }
    console.log(bgColorObj[priorityColor]);
    return(
        <div className={`${homeStyles.listCard} ${styles.taskCard}`}>
            <div className={styles.taskName}>{props.data.taskName}</div>
            <div className={styles.jobcode}>{props.data.jobcode}</div>
            <div className={styles.scope}>{props.data.scope}</div>
            <div className={`${styles.priority} ${styles[bgColorObj[priorityColor]]}`}>{props.data.priority}</div>
            <div className={styles.users}>{props.data.users}</div>
            <div className={styles.check}><input type="checkbox"/></div>
        </div>
    )
}
export default TaskCard;