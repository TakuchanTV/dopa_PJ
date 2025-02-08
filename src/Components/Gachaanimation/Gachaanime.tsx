import React, {useEffect, useRef} from 'react'
import styles from "./GachaanimeCSS/Gachaanime.module.css"
import anime from "animejs"


export const Gachaanime = () => {
const elems = useRef<(HTMLDivElement)>(null)
const LeftRef = useRef<(HTMLDivElement)>(null)
const RightRef = useRef<(HTMLDivElement)>(null)
const HitRef1 = useRef<(HTMLParagraphElement)>(null)
const HitRef2 = useRef<(HTMLParagraphElement)>(null)
const HitRef3 = useRef<(HTMLParagraphElement)>(null)
const MissRef1 = useRef<(HTMLParagraphElement)>(null)
const MissRef2 = useRef<(HTMLParagraphElement)>(null)
const MissRef3 = useRef<(HTMLParagraphElement)>(null)
const WrapperRef = useRef<(HTMLDivElement)>(null)



useEffect(() => {
  const autoPlay = setTimeout(() => {
    if (LeftRef.current,RightRef.current) {
      anime({
        targets:[LeftRef.current,RightRef.current],
        translateY:400,
        opacity:1,
        duration:2000,
      })
    }},3000)

   const autoHitDisplay = setTimeout(() => {
    if (HitRef1.current) {
      HitRef1.current.classList.add(styles.hittextAnimation)
    }
    if (HitRef2.current) {
      setTimeout(() => {
        HitRef2.current?.classList.add(styles.hittextAnimation)
      },500)
    }
    if (HitRef3.current) {
      setTimeout(()=> {
        HitRef3.current?.classList.add(styles.hittextAnimation)
      },1000)
    }
   },13000)
  //  const autoMissDisplay = setTimeout(() => {
  //   if (MissRef1.current) {
  //     MissRef1.current.classList.add(styles.misstextAnimation)
  //   }
  //   if (MissRef2.current) {
  //     setTimeout(() => {
  //       MissRef2.current?.classList.add(styles.misstextAnimation)
  //     },500)
  //   }
  //   if (MissRef3.current) {
  //     setTimeout(()=> {
  //       MissRef3.current?.classList.add(styles.misstextAnimation)
  //     },1000)
  //   }
  //  },13000)

  
  return  () => {
    clearTimeout(autoPlay);
    clearTimeout(autoHitDisplay);
    // clearTimeout(autoMissDisplay)
  }
    
    },[])

  return (
      <div className={styles.div}>
       <div className={styles.wrapper} ref={WrapperRef}>
          <div className={styles.left_half} ref={LeftRef}></div>
          <div className={styles.right_half} ref={RightRef}></div>
          <p className={styles.hittext} ref={HitRef1}>当</p>
          <p className={styles.hittext} ref={HitRef2}>た</p>
          <p className={styles.hittext} ref={HitRef3}>り</p>
          <p className={styles.misstext} ref={MissRef1}>は</p>
          <p className={styles.misstext} ref={MissRef2}>ず</p>
          <p className={styles.misstext} ref={MissRef3}>れ</p>
       </div>
    </div> 
  )
}
