import React from 'react'
import styles from "../../Header/Navigatedp/Gachadp.module.css"
import arrow from "../../Images/リサイクル矢印1.png"
import { useNavigate } from 'react-router-dom'
export const Gachaddragonball = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
      navigate("/dragonball")
    }
  const handleNavigatedp = () => {
     navigate("/dragonball/dp")
  }
  return (
    <div className={styles.gachadp} >
        <p className={styles.gacha} onClick={handleNavigate}>ガチャの一覧
          <span></span>  
        </p>
        <p className={styles.dp} onClick={handleNavigatedp} >DPを交換する
           <img src={arrow}/> 
        </p>
    </div>
  )
}

