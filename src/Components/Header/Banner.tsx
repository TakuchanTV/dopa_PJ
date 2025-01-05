import React, {useEffect, useRef, useState} from "react"
import styles from "./Banner.module.css"
import bannerphoto1 from "../Images/バナーの写真/bannerphoto1.png"
import bannerphoto2 from "../Images/バナーの写真/bannerphoto2.png"
import bannerphoto3 from "../Images/バナーの写真/bannerphoto3.png"
import bannerphoto4 from "../Images/バナーの写真/bannerphoto4.png"
import bannerphoto5 from "../Images/バナーの写真/bannerphoto5.png"
export const Banner = () => {
  const SlideLef = useRef<HTMLDivElement>(null)
  const ListsRef = useRef<HTMLLIElement>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const IndicatorRef = useRef<HTMLDivElement>(null)
  const lists = ListsRef.current;
  
  

  const handleClick = (i:number) => {
    setActiveIndex(i)
   if (SlideLef.current){
    SlideLef.current.className = `${styles.slide} ${styles[`slide${i}`]}`;
   }
  //  if (lists) {
  //   lists.className = `${styles.list} ${styles[`li${i}`]}`
  //  }
  }

  
  
  
  
return (
    // スライドの外枠
   <div className={styles.slidewrapper} >
    <div className={styles.slide} ref={SlideLef}>
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
     {/* <span className={styles.prev}></span>
     <span className={styles.next}></span> */}
     {/*インジケーター*/}
     
     <ul className={styles.indicator} >
       <li className={`${styles.list} ${activeIndex === activeIndex ? styles.active:styles.notactive}`} ref={ListsRef} onClick={() =>handleClick(1)}></li>
       <li className={`${styles.list} ${activeIndex === activeIndex ? styles.active:styles.notactive}`} ref={ListsRef} onClick={() =>handleClick(2)} ></li>
       <li className={`${styles.list} ${activeIndex === activeIndex ? styles.active:styles.notactive}`} ref={ListsRef} onClick={() =>handleClick(3)}></li>
       <li className={`${styles.list} ${activeIndex === activeIndex ? styles.active:styles.notactive}`} ref={ListsRef} onClick={() =>handleClick(4)}></li>
       <li className={`${styles.list} ${activeIndex === activeIndex? styles.active:styles.notactive}`} ref={ListsRef} onClick={() =>handleClick(5)}></li>
     </ul>
   </div> 
)

}