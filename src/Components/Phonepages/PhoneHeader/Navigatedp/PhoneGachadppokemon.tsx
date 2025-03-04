import React from 'react'
import styles from "../Navigatedp/PhoneGachadppokemon.module.css"
import arrow from "../../../Images/リサイクル矢印1.png"
import { useNavigate } from 'react-router-dom'

export const PhoneGachadppokemon = () => {
     const navigate = useNavigate();
        const handleNavigate = () => {
          navigate("/pokemon")
        }
      const handleNavigatedp = () => {
         navigate("/Phonepokemon/dp")
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

