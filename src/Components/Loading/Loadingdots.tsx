import React, { useEffect, useState } from "react"
import styles from "./Loadingdots.module.css"
export const Loadingdots = () => {
    const [isVisable, setIsVisable] = useState(true)
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisable(false)
      },3000);
      return () => clearTimeout(timer)
    },[])
        return(
            isVisable && (
        <div className={styles.spindiv}>
          <div className={styles.spinnerbox}>
            <div className={styles.pulsecontainer}>
               <div className={`${styles.pulsebubble} ${styles.pulsebubble1}`}></div>
               <div className={`${styles.pulsebubble} ${styles.pulsebubble2}`}></div>
               <div className={`${styles.pulsebubble} ${styles.pulsebubble3}`}></div>
           </div>
         </div>
        </div>
            )
        )} 