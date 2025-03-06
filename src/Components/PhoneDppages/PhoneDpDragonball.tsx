import React from 'react'
import styles from "../PhoneDPpagesModuleCSS/PhoneDpdragonball.module.css"
import dragonballimg1 from "../Images/DPページの写真/ドラゴンボール/img1.png"
import dragonballimg2 from "../Images/DPページの写真/ドラゴンボール/img2.png"
import dragonballimg3 from "../Images/DPページの写真/ドラゴンボール/img3.png"
import dragonballimg4 from "../Images/DPページの写真/ドラゴンボール/img4.png"
import dragonballimg5 from "../Images/DPページの写真/ドラゴンボール/img5.png"
import { PhoneMakingtab } from '../Phonepages/PhoneHeader/PhoneMakingtab.tsx'
import { PhoneBanner } from '../Phonepages/PhoneHeader/PhoneBanner.tsx'
import { PhoneGachadpdragonball } from '../Phonepages/PhoneHeader/Navigatedp/PhoneGachadpdragonball.tsx'
import { PhonePagesChange } from '../Phonepages/PhoneHeader/PhonePagesChange.tsx'
import { PhoneFooter } from '../Phonepages/PhoneFooter/PhoneFooter.tsx'
import { PhoneDpPagesChange } from '../Phonepages/PhoneHeader/PhoneDpPagesChage.tsx'
export const PhoneDpDragonball = () => {
  return (
    <div className={styles.divwidth}>
    <PhoneMakingtab />
     <PhoneBanner />
  <PhoneGachadpdragonball />
 <PhoneDpPagesChange/>
 <div className={styles.carddiv}>
   <div className={styles.card1}>
     <img src={dragonballimg1} />
     <span className={styles.span1}>
      (DP)孫悟空 : GT
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>3,000DP</span>
   </div>
   <div className={styles.card2}>
     <img src={dragonballimg2}/>
     <span className={styles.span1}>
      (DP)ベジータ
      <br />
      残り<span>2枚</span>
     </span>
     <span className={styles.DP}>2,990DP</span>
   </div>
   <div className={styles.card3}>
   <img src={dragonballimg3}/>
   <span className={styles.span1}>
      (DP)ブロリー
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>2,480DP</span>
   </div>
   <div className={styles.card4}>
   <img src={dragonballimg4}/>
   <span className={styles.span1}>
      (DP)魔人ブウ : 善
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>1,390DP</span>
   </div>
   <div className={styles.card5}>
   <img src={dragonballimg5}/>
   <span className={styles.span1}>
      (DP)ケフラ
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>1,350DP</span>
   </div>
 </div>
  <PhoneFooter />
</div> 
  )
}
