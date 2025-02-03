import React, {useEffect, useRef} from 'react'
import styles from "./GachaanimeCSS/Gachaanime.module.css"
import anime from "animejs"
import skyblue from "./GachaImages/skyblue.png"
import { keyframes } from 'styled-components'


export const Gachaanime = () => {
const elems = useRef<(HTMLDivElement)>(null)

useEffect(() => {
  const autoPlay = setInterval(() => {
    if (elems.current) {
        anime({
           targets:elems.current,
           translateY:450,
           borderRadius: "100px",
           opacity:1,
           duration:2000,
   
            complete:() => {
              setTimeout(() => {
                anime({
                  targets:elems.current,
                })  
              },5000);
            }
            
          })
    }
  },3000)
  return  () => clearInterval(autoPlay);
      
    },[])

  return (
    <div className={styles.div}>
        <div className={styles.wrapper}>
        <div className={styles.square} ref={elems}></div>  
        </div>
    </div> 
  )
}
