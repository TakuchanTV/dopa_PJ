import React, {useEffect, useRef, useState} from 'react'
import styles from "../Gachaanimation/GachaanimeCSS/PhoneGachaanime10.module.css";
import anime from "animejs"
import {useNavigate } from 'react-router-dom'


export const PhoneGachaanime10 = () => {
const elems = useRef<(HTMLDivElement)>(null)
const LeftRef = useRef<(HTMLDivElement)>(null)
const RightRef = useRef<(HTMLDivElement)>(null)

const hitText1:HTMLElement | null = document.getElementById("hitText1")
const hitText2:HTMLElement | null = document.getElementById("hitText2")
const hitText3:HTMLElement | null= document.getElementById("hitText3")

const missText1:HTMLElement | null= document.getElementById("missText1")
const missText2:HTMLElement | null= document.getElementById("missText2")
const missText3:HTMLElement | null= document.getElementById("missText3")

const bigHitText1:HTMLElement | null= document.getElementById("bighitText1")
const bigHitText2:HTMLElement | null= document.getElementById("bighitText2")
const bigHitText3:HTMLElement | null= document.getElementById("bighitText3")
const bigHitText4:HTMLElement | null= document.getElementById("bighitText4")

const WrapperRef = useRef<(HTMLDivElement)>(null)

const [randomText,setRandomText] = useState(() => Math.floor(Math.random()* 100));
const navigate = useNavigate();
const [count, setCount] = useState<number>(0);


useEffect(() => {
  const PlayAnimation = () => {
    if (LeftRef.current,RightRef.current) {
      anime({
        targets:[LeftRef.current,RightRef.current],
        translateY:400,
        opacity:1,
        duration:2000,
      })
    }}

    
    
    const autoDisplay = () => {
      if (randomText < 50) {
        missText1?.classList.add(styles.misstextAnimation)
           setTimeout(() => {
           missText2?.classList.add(styles.misstextAnimation)
           },500)
         
           setTimeout(()=> {
             missText3?.classList.add(styles.misstextAnimation)
           },1000)

           setTimeout(() => {
            missText1?.classList.remove(styles.misstextAnimation)
           },5000)
           setTimeout(() => {
            missText2?.classList.remove(styles.misstextAnimation)
           },6000)
           setTimeout(() => {
            missText3?.classList.remove(styles.misstextAnimation)
           },7000)
          
          
        }
        else if (randomText >=50 && randomText < 95) {
              hitText1?.classList.add(styles.hittextAnimation);
          setTimeout(() => {
              hitText2?.classList.add(styles.hittextAnimation)
             },500);
           
             setTimeout(()=> {
               hitText3?.classList.add(styles.hittextAnimation)
             },1000);

             setTimeout(()=> {
               hitText1?.classList.remove(styles.hittextAnimation)
             },5000);
             setTimeout(()=> {
               hitText2?.classList.remove(styles.hittextAnimation)
             },6000);
             setTimeout(()=> {
               hitText3?.classList.remove(styles.hittextAnimation)
             },7000);
            
           
          }
          else {
              bigHitText1?.classList.add(styles.bigwintextAnimation)
                setTimeout(() => {
                 bigHitText2?.classList.add(styles.bigwintextAnimation)
                },500)
              
                setTimeout(()=> {
                  bigHitText3?.classList.add(styles.bigwintextAnimation)
                },1000)
                setTimeout(()=> {
                  bigHitText4?.classList.add(styles.bigwintextAnimation)
                },1500)

                setTimeout(()=> {
                  bigHitText1?.classList.remove(styles.bigwintextAnimation)
                },5000)

                setTimeout(()=> {
                  bigHitText2?.classList.remove(styles.bigwintextAnimation)
                },6000)

                setTimeout(()=> {
                  bigHitText3?.classList.remove(styles.bigwintextAnimation)
                },7000)

                setTimeout(()=> {
                  bigHitText4?.classList.remove(styles.bigwintextAnimation)
                },8000)
            }}

            

      const autoPlayAnimation = setTimeout(() => {
        PlayAnimation()
      },3000)
      
   
      
      const autoDisplayAnimation = setTimeout(() => {
        setRandomText(Math.floor(Math.random()*100))
        setCount((count) =>count + 1)
        console.log(count);
        
        console.log(randomText);
        setTimeout(() => {
          autoDisplay();
        },500)
      },7000)

  
      
      if (count >= 12) {
        navigate("/")
      }
      
      

      return () => {
      clearTimeout(autoPlayAnimation);
      clearTimeout(autoDisplayAnimation);
      }
      
    },[randomText,count])

  return (
      <div className={styles.div}>
       <div className={styles.wrapper} ref={WrapperRef}>
          <div className={styles.left_half} ref={LeftRef}></div>
          <div className={styles.right_half} ref={RightRef}></div>
          <p className={styles.hittext} id='hitText1'>当</p>
          <p className={styles.hittext} id='hitText2'>た</p>
          <p className={styles.hittext} id='hitText3'>り</p>
          <p className={styles.misstext} id='missText1'>は</p>
          <p className={styles.misstext} id='missText2'>ず</p>
          <p className={styles.misstext} id='missText3'>れ</p>
          <p className={styles.bigwintext} id='bighitText1'>大</p>
          <p className={styles.bigwintext} id='bighitText2'>当</p>
          <p className={styles.bigwintext} id='bighitText3'>た</p>
          <p className={styles.bigwintext} id='bighitText4'>り</p>
       </div>
    </div> 
  )
}
