import React from "react"
import styles from "./Makingtab.module.css"
import dopa_new_logo from "../Images/dopa_new_logo.png"
import beginner from "../Images/beginner.png"
import { useNavigate } from "react-router-dom"
export const Makingtab = () => {
    const navigate = useNavigate();
    const navigateHome = () => navigate("/")
    const navigateCharge = () => navigate("/charge")
    return(
      <div className={styles.tab}>
        <img src={dopa_new_logo} onClick={() => navigateHome()}/>
        <span className={styles.icon}>
          <img src={beginner} />  
        </span>
        <div className={styles.DP}>
        <span >0DP</span>
        </div>
        <div className={styles.charge} onClick={() => navigateCharge()}>
        <span className={styles.plus} >+</span>
        <span >100PT</span>
        </div>
      </div>  
    )
}