import React, { useState } from 'react'
import styles from "../PhoneModuleCSS/PhonePokemon.module.css"

import pokemonimg1 from "../../Images/ポケモンページの写真/pokemonimg1.png"
import pokemonimg2 from "../../Images/ポケモンページの写真/pokemonimg2.png"
import pokemonimg3 from "../../Images/ポケモンページの写真/pokemonimg3.png"
import pokemonimg4 from "../../Images/ポケモンページの写真/pokemonimg4.png"

import pokemon1 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon1.png"
import pokemon2 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon2.png"
import pokemon3 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon3.png"
import pokemon4 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon4.png"
import pokemon5 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon5.png"
import pokemon6 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon6.png"

import pokemon2_1 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン2のリスト写真/pokemon1.png"
import pokemon2_2 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン2のリスト写真/pokemon2.png"
import pokemon2_3 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン2のリスト写真/pokemon3.png"
import pokemon2_4 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン2のリスト写真/pokemon4.png"
import pokemon2_5 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン2のリスト写真/pokemon5.png"
import pokemon2_6 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon6.png"

import pokemon3_1 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン3のリスト写真/pokemonimg1.png"
import pokemon3_2 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン3のリスト写真/pokemonimg2.png"
import pokemon3_3 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン3のリスト写真/pokemonimg3.png"
import pokemon3_4 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン3のリスト写真/pokemonimg4.png"
import pokemon3_5 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン3のリスト写真/pokemonimg5.png"
import pokemon3_6 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン3のリスト写真/pokemonimg6.png"

import pokemon4_1 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン4のリスト写真/pokemonimg1.png"
import pokemon4_2 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン4のリスト写真/pokemonimg2.png"
import pokemon4_3 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン4のリスト写真/pokemonimg3.png"
import pokemon4_4 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン4のリスト写真/pokemonimg4.png"
import pokemon4_5 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン4のリスト写真/pokemonimg5.png"
import pokemon4_6 from "../../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン4のリスト写真/pokemonimg6.png"



import { PhoneMakingtab } from '../PhoneHeader/PhoneMakingtab.tsx'
import { PhoneBanner } from '../PhoneHeader/PhoneBanner.tsx'
import { PhoneGachadppokemon } from '../PhoneHeader/Navigatedp/PhoneGachadppokemon.tsx'
import { PhonePagesChange } from '../PhoneHeader/PhonePagesChange.tsx'
import { PhoneFooter } from '../PhoneFooter/PhoneFooter.tsx'

import { PhonePopup } from '../../Popup/PhonePopup.js'
import { PhonePopup10 } from '../../Popup/PhonePopup10.js'
export const PhonePokemon = () => {
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
    <PhoneMakingtab/>
    <PhoneBanner />
    <PhoneGachadppokemon />
    <PhonePagesChange/>
    <PhonePopup togglePopup={togglePopup} popupvisible={popupvisible}/>
    <PhonePopup10 togglePopup10={togglePopup10} popupvisible10={popupvisible10}/>
    {/* <Popup100 togglePopup100={togglePopup100} popupvisible100={popupvisible100}/> */}
<div className={styles.div}>
     <div className={styles.Div1}>
       <div className={styles.div1}>
        <img src={pokemonimg1} className={styles.pokemonimg1} /> 
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
         {/* <button className={styles.button1_3} onClick={GachaConfirm100}>
          <span className={styles.gacha}></span>
          <span>100連ガチャ</span>
         </button> */}
       </div>

       <div className={styles.div2}>
        <img src={pokemonimg2} className={styles.pokemonimg2} /> 
         <div className={styles.list1}>
          <span className={styles.span2}>
          <img src={pokemon2_1} className={styles.img1}/>
          </span>
          <span className={styles.span2}>
          <img src={pokemon2_2} className={styles.img2}/>
          </span>
          <span className={styles.span2}>
          <img src={pokemon2_3} className={styles.img3}/>
          </span>
          <span className={styles.span2}>
          <img src={pokemon2_4} className={styles.img4}/>
          </span>
          <span className={styles.span2}>
          <img src={pokemon2_5} className={styles.img5}/>
          </span>
          <span className={styles.span2}>
          <img src={pokemon2_6} className={styles.img6}/>
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
         {/* <button className={styles.button1_3} onClick={GachaConfirm100}>
          <span className={styles.gacha}></span>
          <span>100連ガチャ</span>
         </button> */}
       </div>
     </div>

     <div className={styles.Div2}>
     <div className={styles.div3}>
        <img src={pokemonimg3} className={styles.pokemonimg3} /> 
         <div className={styles.list1}>
          <span className={styles.span3}>
          <img src={pokemon3_1} className={styles.img1}/>
          </span>
          <span className={styles.span3}>
          <img src={pokemon3_2} className={styles.img2}/>
          </span>
          <span className={styles.span3}>
          <img src={pokemon3_3} className={styles.img3}/>
          </span>
          <span className={styles.span3}>
          <img src={pokemon3_4} className={styles.img4}/>
          </span>
          <span className={styles.span3}>
          <img src={pokemon3_5} className={styles.img5}/>
          </span>
          <span className={styles.span3}>
          <img src={pokemon3_6} className={styles.img6}/>
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
         {/* <button className={styles.button1_3} onClick={GachaConfirm100}>
          <span className={styles.gacha}></span>
          <span>100連ガチャ</span>
         </button> */}
       </div>
       <div className={styles.div4}>
        <img src={pokemonimg4} className={styles.pokemonimg4} /> 
         <div className={styles.list1}>
          <span className={styles.span4}>
          <img src={pokemon4_1} className={styles.img1}/>
          </span>
          <span className={styles.span4}>
          <img src={pokemon4_2} className={styles.img2}/>
          </span>
          <span className={styles.span4}>
          <img src={pokemon4_3} className={styles.img3}/>
          </span>
          <span className={styles.span4}>
          <img src={pokemon4_4} className={styles.img4}/>
          </span>
          <span className={styles.span4}>
          <img src={pokemon4_5} className={styles.img5}/>
          </span>
          <span className={styles.span4}>
          <img src={pokemon4_6} className={styles.img6}/>
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
         {/* <button className={styles.button1_3} onClick={GachaConfirm100}>
          <span className={styles.gacha}></span>
          <span>100連ガチャ</span>
         </button> */}
       </div>
     </div>
   </div>
 <PhoneFooter /> 
  </div>
  )
}

