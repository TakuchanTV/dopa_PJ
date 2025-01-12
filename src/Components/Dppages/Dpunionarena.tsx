import React from 'react'
import { Gachadpunionarena } from '../Header/Navigatedp/Gachadpunionarena.tsx'
import { Makingtab } from '../Header/Makingtab.tsx'
import { Banner } from '../Header/Banner.tsx'
import { PagesChangetag } from '../Header/PagesChange.tsx'
import styles from "../DPpagesModuleCSS/Dpunionarena.module.css"
import unionarenaimg1 from "../Images/DPページの写真/ユニオンアリーナ/img1.png"
import unionarenaimg2 from "../Images/DPページの写真/ユニオンアリーナ/img2.png"
import unionarenaimg3 from "../Images/DPページの写真/ユニオンアリーナ/img3.png"
import unionarenaimg4 from "../Images/DPページの写真/ユニオンアリーナ/img4.png"
import unionarenaimg5 from "../Images/DPページの写真/ユニオンアリーナ/img5.png"
import { Footer } from '../Footer/Footer.tsx'
import { DppagesChange } from '../Header/DppagesChange.tsx'

export const Dpunionarena = () => {
  return (
    <div className={styles.divwidth}>
    <Makingtab />
     <Banner />
  <Gachadpunionarena />
 <DppagesChange/>
 <div className={styles.carddiv}>
   <div className={styles.card1}>
     <img src={unionarenaimg1} />
     <span className={styles.span1}>
      (DP)ACTION...
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>1,200DP</span>
   </div>
   <div className={styles.card2}>
     <img src={unionarenaimg2}/>
     <span className={styles.span1}>
      (DP)ACTION...
      <br />
      残り<span>2枚</span>
     </span>
     <span className={styles.DP}>1,690DP</span>
   </div>
   <div className={styles.card3}>
   <img src={unionarenaimg3}/>
   <span className={styles.span1}>
      (DP)月岡 恋鐘
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>1,340DP</span>
   </div>
   <div className={styles.card4}>
   <img src={unionarenaimg4}/>
   <span className={styles.span1}>
      (DP)虎杖 悠仁
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>1,010P</span>
   </div>
   <div className={styles.card5}>
   <img src={unionarenaimg5}/>
   <span className={styles.span1}>
      (DP)夏油 傑
      <br />
      残り<span>1枚</span>
     </span>
     <span className={styles.DP}>1,280DP</span>
   </div>
 </div>
  <Footer />
</div> 
  )
}
