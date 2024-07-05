import React from "react";
import styles from './TimeModule.module.css'
import homeStyles from '../Home.module.css';
import TimeCard from "./TimeCard";

function TimeModule(props){
    class BSTimeData {
        constructor(jobcode,name,time){
            this.jobcode = jobcode;
            this.name = name;
            this.time = time;
        }
    }
    const BSdataArray = [
        new BSTimeData(`GYR${Math.floor(Math.random()*9999)}`,'Marketing Misc & Support',`${Math.ceil(Math.random()*10)}.5 hrs`),
        new BSTimeData(`VLC${Math.floor(Math.random()*9999)}`,'Marketing Misc & Support',`${Math.ceil(Math.random()*10)}.5 hrs`),
        new BSTimeData(`GYR${Math.floor(Math.random()*9999)}`,'Marketing Misc & Support',`${Math.ceil(Math.random()*10)}.5 hrs`),
        new BSTimeData(`PRM${Math.floor(Math.random()*9999)}`,'Marketing Misc & Support',`${Math.ceil(Math.random()*10)}.5 hrs`),
        new BSTimeData(`STR${Math.floor(Math.random()*9999)}`,'Marketing Misc & Support',`${Math.ceil(Math.random()*10)}.5 hrs`),
        new BSTimeData(`SPS${Math.floor(Math.random()*9999)}`,'Marketing Misc & Support',`${Math.ceil(Math.random()*10)}.5 hrs`),
        new BSTimeData(`GYR${Math.floor(Math.random()*9999)}`,'Marketing Misc & Support',`${Math.ceil(Math.random()*10)}.5 hrs`)
    ]
    return(
        <div className={`${homeStyles.stdBlock} ${homeStyles.timeBlock}`}>
                <h1>Time tracked</h1>
                <div className={styles.timeTotalsContainer}>
                    <div className={styles.timeTotals}>
                        <p>Today</p>
                        <input type="text" value="6.5 hrs" disabled/>
                    </div>
                    <div className={styles.timeTotals}>
                        <p>This week</p>
                        <input type="text" value="27.5 hrs" disabled/>
                    </div>
                </div>
                <h1>Top recent projects</h1>
                <div className={homeStyles.scrollableDiv}>
                    <TimeCard data={BSdataArray[2]}/>
                    <TimeCard data={BSdataArray[3]}/>
                    <TimeCard data={BSdataArray[0]}/>
                    <TimeCard data={BSdataArray[1]}/>
                    <TimeCard data={BSdataArray[2]}/>
                    <TimeCard data={BSdataArray[3]}/>
                    <TimeCard data={BSdataArray[4]}/>
                    <TimeCard data={BSdataArray[5]}/>
                    <TimeCard data={BSdataArray[6]}/>
                </div>
            </div>
    )
}

export default TimeModule;