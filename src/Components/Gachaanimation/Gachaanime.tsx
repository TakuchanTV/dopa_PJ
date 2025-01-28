import React, {useEffect, useRef} from 'react'
import styles from "./GachaanimeCSS/Gachaanime.module.css"
import anime from "animejs"


export const Gachaanime = () => {
const elems = useRef<(HTMLDivElement)>(null)
useEffect(() => {
  
        if (elems.current) {
            elems.current.addEventListener("click",() => {
            anime({
             targets:elems.current,
             translateY:250,
             backgroundColor:"#ebe830",
             borderRadius: "100px",
             duration:3000,
            })
            })
        }

    },[])
    


  return (
    <div className={styles.wrapper}>
      <div className={styles.square} ref={elems}></div>  
    </div>
  )
}
