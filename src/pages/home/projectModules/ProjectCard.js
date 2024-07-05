import React from 'react';
import styles from './ProjectModules.module.css';
import homeStyles from '../Home.module.css';

//this component is used on the home page (and maybe some other pages?) to display an overview of project data, intended to be dispalyed in liste form (like a table)

function ProjectCard(props){
    const priorityColor = props.data.priority;
    const bgColorObj = {
        'Background Task':'bgTask',
        'Low':'low',
        'Medium':'medium',
        'High':'high',
        'Urgent':'urgent'
    }
    return(
        <div className={`${homeStyles.listCard} ${styles.latestCard}`}>
            <div className={styles.jobName}>{props.data.jobName}</div>
            <div className={styles.jobcode}>{props.data.jobcode}</div>
            <div className={styles.country}>{props.data.country}</div>
            <div className={styles.client}>{`${props.data.client} (${props.data.mClient})`}</div>
            <div className={styles.progress}><progress value={props.data.progress} max="100"></progress></div>
            <div className={`${styles.priority} ${styles[bgColorObj[priorityColor]]}`}>{props.data.priority}</div>
        </div>
    )
}

export default ProjectCard;