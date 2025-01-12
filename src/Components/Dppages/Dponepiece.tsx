import React from 'react'
import { Gachadponepiece } from '../Header/Navigatedp/Gachadponepiece.tsx'
import { Makingtab } from '../Header/Makingtab.tsx'
import { Banner } from '../Header/Banner.tsx'
import { PagesChangetag } from '../Header/PagesChange.tsx'
import styles from "../DPpagesModuleCSS/Dponepiece.module.css"
import { Footer } from '../Footer/Footer.tsx'
import onepieceimg1 from "../Images/DPページの写真/ワンピース/img1.png"
import onepieceimg2 from "../Images/DPページの写真/ワンピース/img2.png"
import onepieceimg3 from "../Images/DPページの写真/ワンピース/img3.png"
import onepieceimg4 from "../Images/DPページの写真/ワンピース/img4.png"
import onepieceimg5 from "../Images/DPページの写真/ワンピース/img5.png"
import { DppagesChange } from '../Header/DppagesChange.tsx'

export const Dponepiece = () => {
  return (
    <div className={styles.divwidth}>
    <Makingtab />
     <Banner />
  <Gachadponepiece />
 <DppagesChange/>
 <div className={styles.carddiv}>
   <div className={styles.card1}>
     <img src={onepieceimg1} />
     <span className={styles.span1}>
      (DP)ボルサリーノ
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>1,000DP</span>
   </div>
   <div className={styles.card2}>
     <img src={onepieceimg2}/>
     <span className={styles.span1}>
      (DP)ウソップ
      <br />
      残り<span>2枚</span>
     </span>
     <span className={styles.DP}>690DP</span>
   </div>
   <div className={styles.card3}>
   <img src={onepieceimg3}/>
   <span className={styles.span1}>
      (DP)シャンクス
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>1,480DP</span>
   </div>
   <div className={styles.card4}>
   <img src={onepieceimg4}/>
   <span className={styles.span1}>
      (DP)サボ
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>990DP</span>
   </div>
   <div className={styles.card5}>
   <img src={onepieceimg5}/>
   <span className={styles.span1}>
      (DP)クザン
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>1,300DP</span>
   </div>
 </div>
  <Footer />
</div> 
  )
}
