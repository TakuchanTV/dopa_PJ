import React from 'react'
import styles from "../PhoneDPpagesModuleCSS/PhoneDppokemon.module.css"
import pokemonimg1 from "../Images/DPページの写真/ポケモン/img1.png"
import pokemonimg2 from "../Images/DPページの写真/ポケモン/img2.png"
import pokemonimg3 from "../Images/DPページの写真/ポケモン/img3.png"
import pokemonimg4 from "../Images/DPページの写真/ポケモン/img4.png"
import pokemonimg5 from "../Images/DPページの写真/ポケモン/img5.png"
import { PhoneMakingtab } from '../Phonepages/PhoneHeader/PhoneMakingtab.tsx'
import { PhoneBanner } from '../Phonepages/PhoneHeader/PhoneBanner.tsx'
import { PhoneGachadppokemon } from '../Phonepages/PhoneHeader/Navigatedp/PhoneGachadppokemon.tsx'
import { PhoneFooter } from '../Phonepages/PhoneFooter/PhoneFooter.tsx'
import { PhonePagesChange } from '../Phonepages/PhoneHeader/PhonePagesChange.tsx'
import { PhoneDpPagesChange } from '../Phonepages/PhoneHeader/PhoneDpPagesChage.tsx'
export const PhoneDpPokemon = () => {
  return (
   <div className={styles.divwidth}>
         <PhoneMakingtab />
          <PhoneBanner />
       <PhoneGachadppokemon />
      <PhoneDpPagesChange/>
      <div className={styles.carddiv}>
        <div className={styles.card1}>
          <img src={pokemonimg1} />
          <span className={styles.span1}>
           (DP)リーリエ
           <br />
           残り<span>1枚</span>
          </span>
          <span className={styles.DP}>100DP</span>
        </div>
        <div className={styles.card2}>
          <img src={pokemonimg2}/>
          <span className={styles.span1}>
           (DP)リザードンV
           <br />
           残り<span>2枚</span>
          </span>
          <span className={styles.DP}>490DP</span>
        </div>
        <div className={styles.card3}>
        <img src={pokemonimg3}/>
        <span className={styles.span1}>
           (DP)ホウオウEX
           <br />
           残り<span>1枚</span>
          </span>
          <span className={styles.DP}>1,080DP</span>
        </div>
        <div className={styles.card4}>
        <img src={pokemonimg4}/>
        <span className={styles.span1}>
           (DP)ルチア
           <br />
           残り<span>1枚</span>
          </span>
          <span className={styles.DP}>390DP</span>
        </div>
        <div className={styles.card5}>
        <img src={pokemonimg5}/>
        <span className={styles.span1}>
           (DP)ピカチュウ
           <br />
           残り<span>1枚</span>
          </span>
          <span className={styles.DP}>640DP</span>
        </div>
      </div>
       <PhoneFooter />
   </div> 
  )
}
