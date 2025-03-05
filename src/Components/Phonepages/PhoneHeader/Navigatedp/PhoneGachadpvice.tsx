import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "../Navigatedp/PhoneGachadpvice.module.css";
import arrow from "../../../Images/リサイクル矢印1.png"

export const PhoneGachadpvice = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
      navigate("/vice")
    }
  const handleNavigatedp = () => {
     navigate("/Phonevice/dp")
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

