import React from 'react'
import styles from "../PhoneDPpagesModuleCSS/PhoneDpyuugiou.module.css"
import yuugiouimg1 from "../Images/DPページの写真/遊戯王/img1.png"
import yuugiouimg2 from "../Images/DPページの写真/遊戯王/img2.png"
import yuugiouimg3 from "../Images/DPページの写真/遊戯王/img3.png"
import yuugiouimg4 from "../Images/DPページの写真/遊戯王/img4.png"
import yuugiouimg5 from "../Images/DPページの写真/遊戯王/img5.png"
import { PhoneMakingtab } from '../Phonepages/PhoneHeader/PhoneMakingtab.tsx'
import { PhoneBanner } from '../Phonepages/PhoneHeader/PhoneBanner.tsx'
import { PhoneGachadpyuugiou } from '../Phonepages/PhoneHeader/Navigatedp/PhoneGachadpyuugiou.tsx'
import { PhoneFooter } from '../Phonepages/PhoneFooter/PhoneFooter.tsx'
import { PhonePagesChange } from '../Phonepages/PhoneHeader/PhonePagesChange.tsx'
import { PhoneDpPagesChange } from '../Phonepages/PhoneHeader/PhoneDpPagesChage.tsx'

export const PhoneDpYuugiou = () => {
  return (
    <div className={styles.divwidth}>
    <PhoneMakingtab />
     <PhoneBanner />
  <PhoneGachadpyuugiou />
 <PhoneDpPagesChange/>
 <div className={styles.carddiv}>
   <div className={styles.card1}>
     <img src={yuugiouimg1} />
     <span className={styles.span1}>
      (DP)増殖するG...
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>800DP</span>
   </div>
   <div className={styles.card2}>
     <img src={yuugiouimg2}/>
     <span className={styles.span1}>
      (DP)女剣士カナ...
      <br />
      残り<span>2枚</span>
     </span>
     <span className={styles.DP}>330DP</span>
   </div>
   <div className={styles.card3}>
   <img src={yuugiouimg3}/>
   <span className={styles.span1}>
      (DP)灰流うらら...
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>1,120DP</span>
   </div>
   <div className={styles.card4}>
   <img src={yuugiouimg4}/>
   <span className={styles.span1}>
      (DP)超魔導竜騎...
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>630DP</span>
   </div>
   <div className={styles.card5}>
   <img src={yuugiouimg5}/>
   <span className={styles.span1}>
      (DP)ダークフュ...
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>1,303DP</span>
   </div>
 </div>
  <PhoneFooter />
</div> 
  )
}
