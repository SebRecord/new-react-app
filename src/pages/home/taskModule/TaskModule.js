import React from "react";
import styles from './TaskModule.module.css';
import homeStyles from '../Home.module.css';
import TaskCard from "./TaskCard";
function TaskModule(props){
    const taskNameArray = ['CAD Plan','Fascia edit required','Call with client to confirm building','Awaiting survey & pictures','Awaiting for required dims','Awaiting feeback on visuals from site owner','Awaiting briefing document','Alterations need to be made'];
    const jobcodeArray = [`GYR${Math.floor(Math.random()*9999)}`,`VLC${Math.floor(Math.random()*9999)}`,`PRM${Math.floor(Math.random()*9999)}`,`SPS${Math.floor(Math.random()*9999)}`,`STR${Math.floor(Math.random()*9999)}`];
    const scopeArray = ['External','Internal','Full Site','Other'];
    const userArray = ['Shan','Stefan','Natalia','Sarah','Seb'];
    const priorityArray = ['Background Task','Low','Medium','High','Urgent'];

    class BSTaskData {
        constructor(){
            this.taskName = taskNameArray[Math.floor(Math.random()*taskNameArray.length)];
            this.jobcode = jobcodeArray[Math.floor(Math.random()*jobcodeArray.length)];
            this.scope = scopeArray[Math.floor(Math.random()*scopeArray.length)];
            this.priority = priorityArray[Math.floor(Math.random()*priorityArray.length)];
            this.users = userArray[Math.floor(Math.random()*userArray.length)];
        }
    }
    const dataArray = [new BSTaskData(),new BSTaskData(),new BSTaskData(),new BSTaskData(),new BSTaskData(),new BSTaskData(),new BSTaskData(),new BSTaskData(),new BSTaskData(),new BSTaskData(),new BSTaskData(),new BSTaskData(),new BSTaskData(),new BSTaskData()];
    return(
        <div className={`${homeStyles.stdBlock} ${homeStyles.taskBlock}`}>
            <h1>Your top tasks</h1>
            <div className={homeStyles.scrollableDiv}>
                <TaskCard data={dataArray[0]}/>
                <TaskCard data={dataArray[1]}/>
                <TaskCard data={dataArray[2]}/>
                <TaskCard data={dataArray[3]}/>
                <TaskCard data={dataArray[4]}/>
                <TaskCard data={dataArray[5]}/>
                <TaskCard data={dataArray[6]}/>
                <TaskCard data={dataArray[7]}/>
                <TaskCard data={dataArray[8]}/>
                <TaskCard data={dataArray[9]}/>
                <TaskCard data={dataArray[10]}/>
                <TaskCard data={dataArray[11]}/>
            </div>
            <h1>High priority tasks</h1>
            <div className={homeStyles.scrollableDiv}>
                <TaskCard data={dataArray[0]}/>
                <TaskCard data={dataArray[1]}/>
                <TaskCard data={dataArray[2]}/>
                <TaskCard data={dataArray[3]}/>
                <TaskCard data={dataArray[4]}/>
                <TaskCard data={dataArray[5]}/>
                <TaskCard data={dataArray[6]}/>
                <TaskCard data={dataArray[7]}/>
                <TaskCard data={dataArray[8]}/>
                <TaskCard data={dataArray[9]}/>
                <TaskCard data={dataArray[10]}/>
                <TaskCard data={dataArray[11]}/>
            </div>
        </div>
    )
}
export default TaskModule;