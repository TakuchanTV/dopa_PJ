import React from "react"
import styles from "./Banner.module.css"
import bannerphoto1 from "../Images/バナーの写真/bannerphoto1.png"
import bannerphoto2 from "../Images/バナーの写真/bannerphoto2.png"
import bannerphoto3 from "../Images/バナーの写真/bannerphoto3.png"
import bannerphoto4 from "../Images/バナーの写真/bannerphoto4.png"
import bannerphoto5 from "../Images/バナーの写真/bannerphoto5.png"
export const Banner = () => {
return (
    // スライドの外枠
   <div className={styles.slidewrapper} >
    <div className={styles.slide}>
      <div>
        <img src={bannerphoto1} className={styles.img} />
      </div>
      <div >
        <img src={bannerphoto2} className={styles.img} />
      </div>
      <div >
        <img src={bannerphoto3} className={styles.img} />
      </div>
      <div>
        <img src={bannerphoto4}  className={styles.img}/>
      </div>
      <div >
        <img src={bannerphoto5} className={styles.img} />
      </div>
    </div>
     {/*左右のボタン */}
     <span className={styles.prev}></span>
     <span className={styles.next}></span>
     {/*インジケーター*/}
     <ul className={styles.indicator}>
       <li className={styles.list}></li>
       <li className={styles.list}></li>
       <li className={styles.list}></li>
     </ul>
   </div> 
)

}