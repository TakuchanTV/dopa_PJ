import React, {useEffect, useRef} from 'react'
import styles from "./GachaanimeCSS/Gachaanime.module.css"
import anime from "animejs"
import skyblue from "./GachaImages/skyblue.png"
import { keyframes } from 'styled-components'


export const Gachaanime = () => {
const elems = useRef<(HTMLDivElement)>(null)
const LeftRef = useRef<(HTMLDivElement)>(null)
const RightRef = useRef<(HTMLDivElement)>(null)

useEffect(() => {
  const autoPlay = setInterval(() => {
    if (LeftRef.current,RightRef.current) {
        anime({
           targets:[LeftRef.current,RightRef.current],
           translateY:400,
           opacity:1,
           duration:2000,
          })
    }
  },3000)
  return  () => clearInterval(autoPlay);
      
    },[])

  return (
      <div className={styles.div}>
       <div className={styles.wrapper}>
          <div className={styles.left_half} ref={LeftRef}></div>
          <div className={styles.right_half} ref={RightRef}></div>
        {/* <div className={styles.square} ref={elems}>
        </div>   */}
       </div>
    </div> 
  )
}
