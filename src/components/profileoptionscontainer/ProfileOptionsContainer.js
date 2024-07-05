import React from "react";
import styles from'./ProfileOptionsContainer.module.css';

function ProfileOptionsContainer() {
    return(
        <div className={styles.container}>
            <div className={styles.img}></div>
            <div>
                <p className={styles.name}>Sebastian Record</p>
                <p className={styles.subtext}>Edit Profile | Sign Out</p>
            </div>
        </div>
    )
}
export default ProfileOptionsContainer;