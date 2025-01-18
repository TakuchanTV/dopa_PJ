import React, {useEffect, useRef, useState} from "react"
import styles from "../PhoneModuleCSS/PhoneBanner.module.css"
import bannerphoto1 from "../../Images/バナーの写真/bannerphoto1.png"
import bannerphoto2 from "../../Images/バナーの写真/bannerphoto2.png"
import bannerphoto3 from "../../Images/バナーの写真/bannerphoto3.png"
import bannerphoto4 from "../../Images/バナーの写真/bannerphoto4.png"
import bannerphoto5 from "../../Images/バナーの写真/bannerphoto5.png"


export const PhoneBanner = () => {
  const SlideLef = useRef<HTMLDivElement>(null)
  const ListsRef = useRef<HTMLLIElement>(null)
  const [activeIndex, setActiveIndex] = useState<number>(1)
  const IndicatorRef = useRef<HTMLDivElement>(null)
  const listRefs = useRef<(HTMLLIElement| null)[]>([]);
  const lists = ListsRef?.current;
  useEffect(() => {
   const autoPlaybanner = setInterval(() => {
    setActiveIndex(prevIndex => {
      const nextIndex = prevIndex === 5 ? 1 :prevIndex + 1
      if (SlideLef.current){
        SlideLef.current.className = `${styles.slide} ${styles[`slide${nextIndex}`]}`
      }
      return nextIndex
    }) 
   },3000)  
   return () => clearInterval(autoPlaybanner)
  
  },[])
  
  

  const handleClick = (i:number) => {
    setActiveIndex(i)
   if (SlideLef.current){
    SlideLef.current.className = `${styles.slide} ${styles[`slide${i}`]}`;
   }
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
     
     <ul className={styles.indicator}> 
      {new Array(5).fill(null).map((_, index) => (
         <li key={index} className={`${styles.list} 
         ${activeIndex === index + 1 ? styles.active : styles.notactive}`} 
      ref={(el) => {listRefs.current[index] = el
      }} 
      onClick={() => handleClick(index + 1)}>
      </li> 
    ))} 
      </ul>
   </div> 
)

}