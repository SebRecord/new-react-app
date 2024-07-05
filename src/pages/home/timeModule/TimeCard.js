import styles from './TimeModule.module.css';
import homeStyles from '../Home.module.css';
import React from 'react';

function TimeCard(props){
    return(
        <div className={`${homeStyles.listCard} ${styles.timeProjectCard}`}>
            <div className={styles.jobcode}>{props.data.jobcode}</div>
            <div className={styles.name}>{props.data.name}</div>
            <div className={styles.time}>{props.data.time}</div>
        </div>
    )
}
export default TimeCard;