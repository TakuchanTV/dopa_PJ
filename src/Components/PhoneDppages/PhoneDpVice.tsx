import React from 'react'
import styles from "../PhoneDPpagesModuleCSS/PhoneDpvice.module.css"
import viceimg1 from "../Images/DPページの写真/ヴァイス/img1.png"
import viceimg2 from "../Images/DPページの写真/ヴァイス/img2.png"
import viceimg3 from "../Images/DPページの写真/ヴァイス/img3.png"
import viceimg4 from "../Images/DPページの写真/ヴァイス/img4.png"
import viceimg5 from "../Images/DPページの写真/ヴァイス/img5.png"
import { PhoneMakingtab } from '../Phonepages/PhoneHeader/PhoneMakingtab.tsx'
import { PhoneBanner } from '../Phonepages/PhoneHeader/PhoneBanner.tsx'
import { PhoneGachadpvice } from '../Phonepages/PhoneHeader/Navigatedp/PhoneGachadpvice.tsx'
import { PhonePagesChange } from '../Phonepages/PhoneHeader/PhonePagesChange.tsx'
import { PhoneFooter } from '../Phonepages/PhoneFooter/PhoneFooter.tsx'
import { PhoneDpPagesChange } from '../Phonepages/PhoneHeader/PhoneDpPagesChage.tsx'

export const PhoneDpVice = () => {
  return (
    <div className={styles.divwidth}>
    <PhoneMakingtab />
     <PhoneBanner />
  <PhoneGachadpvice />
 <PhoneDpPagesChange/>
 <div className={styles.carddiv}>
   <div className={styles.card1}>
     <img src={viceimg1} />
     <span className={styles.span1}>
      (DP)”不思議の...
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>1,340DP</span>
   </div>
   <div className={styles.card2}>
     <img src={viceimg2}/>
     <span className={styles.span1}>
      (DP)未来へ一緒...
      <br />
      残り<span>2枚</span>
     </span>
     <span className={styles.DP}>1,630DP</span>
   </div>
   <div className={styles.card3}>
   <img src={viceimg3}/>
   <span className={styles.span1}>
      (DP)割り切れな...
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>1,040DP</span>
   </div>
   <div className={styles.card4}>
   <img src={viceimg4}/>
   <span className={styles.span1}>
      (DP)割り切れな...
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>1,040DP</span>
   </div>
   <div className={styles.card5}>
   <img src={viceimg5}/>
   <span className={styles.span1}>
      (DP)君と願う...
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>1,300DP</span>
   </div>
 </div>
  <PhoneFooter />
</div> 
  )
}
