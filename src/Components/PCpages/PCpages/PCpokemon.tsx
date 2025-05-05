import React, { useState } from 'react'
import styles from "../../ModuleCSS/pokemon.module.css"
import { Makingtab } from '../../Header/Makingtab.tsx'
import { Banner } from '../../Header/Banner.tsx'
import { Gachadppokemon } from '../../Header/Navigatedp/Gachadppokemon.tsx'
import { PagesChangetag } from '../../Header/PagesChange.tsx'
import { Footer } from '../../Footer/Footer.tsx'
import { Popup } from '../../Popup/Popup.js'


import pokemonimg1 from "../../Images/ポケモンページの写真/pokemonimg1.png"
import pokemon1 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon1.png"
import pokemon2 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon2.png"
import pokemon3 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon3.png"
import pokemon4 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon4.png"
import pokemon5 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon5.png"
import pokemon6 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon6.png"
import { Popup10 } from '../../Popup/Popup10.js'
import { Popup100 } from '../../Popup/Popup100.js'




export const PCpokemon = () => {
const [popupvisible, setPopupvisible] = useState(false)
const [popupvisible10, setPopupvisible10] = useState(false)
const [popupvisible100, setPopupvisible100] = useState(false)

const togglePopup = () => setPopupvisible(!popupvisible)
const togglePopup10 = () => setPopupvisible10(!popupvisible10)
const togglePopup100 = () => setPopupvisible100(!popupvisible100)

const GachaConfirm = ()  => {
      togglePopup()
    }
      const GachaConfirm10 = ()  => {
        togglePopup10()
      }
      const GachaConfirm100 = ()  => {
        togglePopup100()
      }
  return (
    <div className={styles.fixwidth}>
    <Makingtab/>
    <Banner />
    <Gachadppokemon />
    <PagesChangetag/>
    <Popup togglePopup={togglePopup} popupvisible={popupvisible}/>
    <Popup10 togglePopup10={togglePopup10} popupvisible10={popupvisible10}/>
    <Popup100 togglePopup100={togglePopup100} popupvisible100={popupvisible100}/>

    <div className={styles.div}>
     <div className={styles.Div1}>
       <div className={styles.div1}>
        <img src={pokemonimg1} className={styles.img} /> 
         <div className={styles.list1}>
          <span className={styles.span1}>
          <img src={pokemon1} className={styles.img1}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon2} className={styles.img2}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon3} className={styles.img3}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon4} className={styles.img4}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon5} className={styles.img5}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon6} className={styles.img6}/>
          </span>
         </div>
         <div>
         <button className={styles.button1_1} onClick={GachaConfirm}>
          <span className={styles.gacha}></span>
          <span>1回ガチャ</span>
         </button>
         <button className={styles.button1_2} onClick={GachaConfirm10}>
          <span className={styles.gacha}></span>
          <span>10連ガチャ</span>
         </button>
         </div> 
        
       </div>
       <div className={styles.div1}>
        <img src={pokemonimg1} className={styles.img} /> 
         <div className={styles.list1}>
          <span className={styles.span1}>
          <img src={pokemon1} className={styles.img1}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon2} className={styles.img2}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon3} className={styles.img3}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon4} className={styles.img4}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon5} className={styles.img5}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon6} className={styles.img6}/>
          </span>
         </div>
         <div>
         <button className={styles.button1_1} onClick={GachaConfirm}>
          <span className={styles.gacha}></span>
          <span>1回ガチャ</span>
         </button>
         <button className={styles.button1_2} onClick={GachaConfirm10}>
          <span className={styles.gacha}></span>
          <span>10連ガチャ</span>
         </button>
         </div> 
        
       </div>
      
     </div>
     <div className={styles.Div2}>
     <div className={styles.div1}>
        <img src={pokemonimg1} className={styles.img} /> 
         <div className={styles.list1}>
          <span className={styles.span1}>
          <img src={pokemon1} className={styles.img1}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon2} className={styles.img2}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon3} className={styles.img3}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon4} className={styles.img4}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon5} className={styles.img5}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon6} className={styles.img6}/>
          </span>
         </div>
         <div>
         <button className={styles.button1_1} onClick={GachaConfirm}>
          <span className={styles.gacha}></span>
          <span>1回ガチャ</span>
         </button>
         <button className={styles.button1_2} onClick={GachaConfirm10}>
          <span className={styles.gacha}></span>
          <span>10連ガチャ</span>
         </button>
         </div> 
       </div>

       <div className={styles.div1}>
        <img src={pokemonimg1} className={styles.img} /> 
         <div className={styles.list1}>
          <span className={styles.span1}>
          <img src={pokemon1} className={styles.img1}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon2} className={styles.img2}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon3} className={styles.img3}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon4} className={styles.img4}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon5} className={styles.img5}/>
          </span>
          <span className={styles.span1}>
          <img src={pokemon6} className={styles.img6}/>
          </span>
         </div>
         <div>
         <button className={styles.button1_1} onClick={GachaConfirm}>
          <span className={styles.gacha}></span>
          <span>1回ガチャ</span>
         </button>
         <button className={styles.button1_2} onClick={GachaConfirm10}>
          <span className={styles.gacha}></span>
          <span>10連ガチャ</span>
         </button>
         </div> 
       </div>
     </div>
   </div>
 <Footer /> 
  </div>
  )
}

