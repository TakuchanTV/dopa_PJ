import React from 'react'
import { Gachadpothers } from '../Header/Navigatedp/Gachadpothers.tsx'
import { Makingtab } from '../Header/Makingtab.tsx'
import { Banner } from '../Header/Banner.tsx'
import { PagesChangetag } from '../Header/PagesChange.tsx'
import styles from "../DPpagesModuleCSS/Dpothers.module.css"
import othersimg1 from "../Images/DPページの写真/その他/img1.png"
import othersimg2 from "../Images/DPページの写真/その他/img2.png"
import othersimg3 from "../Images/DPページの写真/その他/img3.png"
import othersimg4 from "../Images/DPページの写真/その他/img4.png"
import othersimg5 from "../Images/DPページの写真/その他/img5.png"
import { Footer } from '../Footer/Footer.tsx'
import { DppagesChange } from '../Header/DppagesChange.tsx'

export const Dpothers = () => {
  return (
    <div className={styles.divwidth}>
    <Makingtab />
     <Banner />
  <Gachadpothers />
 <DppagesChange/>
 <div className={styles.carddiv}>
   <div className={styles.card1}>
     <img src={othersimg1} />
     <span className={styles.span1}>
      (DP)便利屋68...
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>1,050DP</span>
   </div>
   <div className={styles.card2}>
     <img src={othersimg2}/>
     <span className={styles.span1}>
      (DP)便利屋68...
      <br />
      残り<span>2枚</span>
     </span>
     <span className={styles.DP}>1,110DP</span>
   </div>
   <div className={styles.card3}>
   <img src={othersimg3}/>
   <span className={styles.span1}>
      (DP)便利屋68...
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>1,650DP</span>
   </div>
   <div className={styles.card4}>
   <img src={othersimg4}/>
   <span className={styles.span1}>
      (DP)便利屋68...
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>1,170DP</span>
   </div>
   <div className={styles.card5}>
   <img src={othersimg5}/>
   <span className={styles.span1}>
      (DP)星街すいせ...
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>1,330DP</span>
   </div>
 </div>
  <Footer />
</div> 
  )
}
