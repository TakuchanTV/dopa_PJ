import React, {useEffect, useRef} from 'react'
import styles from "./GachaanimeCSS/Gachaanime.module.css"
import anime from "animejs"


export const Gachaanime = () => {
const elems = useRef<(HTMLDivElement)>(null)
useEffect(() => {
  const autoPlay = setInterval(() => {
    if (elems.current) {
        anime({
           targets:elems.current,
           translateY:450,
           backgroundColor:"#ebe830",
           borderRadius: "100px",
           opacity:1,
           complete: () => {
            anime({
                targets:elems.current,
                translateY:0,
                backgroundColor:"rgb(90, 135, 255)",
                opacity:0,
            })
           }
        })
    }
  },4000)
  return  () => clearInterval(autoPlay);
        // if (elems.current) {
        //     elems.current.addEventListener("load",() => {
        //     anime({
        //      targets:elems.current,
        //      translateY:450,
        //      backgroundColor:"#ebe830",
        //      borderRadius: "100px",
        //      duration:3000,
        //     })
        //     })
        // }

    },[])

  return (
    <div className={styles.wrapper}>
      <div className={styles.square} ref={elems}></div>  
    </div>
  )
}
