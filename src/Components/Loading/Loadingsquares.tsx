import React from "react"
import styles from "../Loading/Loadingsquares.module.css";
export const Loadingsquares = () => {
     return (
   <div className={styles.squaresdiv}>
    <div className={styles.spinnerbox}>
      <div className={styles.configureborder1}>  
        <div className={styles.configurecore}></div>
     </div>  
      <div className={styles.configureborder2}>
        <div className={styles.configurecore}></div>
     </div> 
    </div>
   </div>
     )   
}