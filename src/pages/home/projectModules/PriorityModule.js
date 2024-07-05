import React from "react";
import homeStyles from '../Home.module.css';
import ProjectCard from "./ProjectCard";

// This home page section sorts all in progress projects by priority

function PriorityModule(){
    class BSprojectData {
        constructor(jobName,jobcode,country,client,mClient,progress,priority){
            this.jobName = jobName;
            this.jobcode = jobcode;
            this.country = country;
            this.client = client;
            this.mClient = mClient;
            this.progress = progress;
            this.priority = priority;
        }
    }
    const dataArray = [
        new BSprojectData('Tire Selector','GYR1001','N/A','Goodyear','Goodyear','0','Background Task'),
        new BSprojectData('Pricing Menu','VLC1001','FR','Vulco','Goodyear','32','Low'),
        new BSprojectData('Spain - Neumaticos Amores','VLC1002','ES','Vulco','Goodyear','85','High'),
        new BSprojectData('Portugal - Lousada','VLC1003','PT','Vulco','Goodyear','67','Medium'),
        new BSprojectData('Premio Tuning Logo','PRM1001','DE','Premio','Goodyear','45','High'),
        new BSprojectData('Goodyear Premio','PRM1002','BE','Premio','Goodyear','23','Urgent'),
        new BSprojectData('Poland - Automania','PRM1003','PL','Premio','Goodyear','36','Low'),
        new BSprojectData('Italy - SuperService DEV','SPS1001','IT','Super Service','Goodyear','89','Low'),
        new BSprojectData('Bin Kiosk','VNU1001','UK','Venue Now','Venue Now','86','Medium'),
        new BSprojectData('Company Admin/ Misc','STR1001','UK','Stratela','Stratela','100','Background Task'),
        new BSprojectData('Accounts','STR10002','UK','Stratela','Stratela','100','Background Task')
    ];
    const cards = [];
    for(let i = 0; i < dataArray.length; i++){
        cards.push(<ProjectCard data={dataArray[i]}/>);
    }
    return(
        <div className={`${homeStyles.stdBlock} ${homeStyles.priorityBlock}`}>
            <h1>Priority Projects</h1>
            <div className={homeStyles.scrollableDiv}>
                {cards}{cards}
            </div>
        </div>
    )
}
export default PriorityModule;