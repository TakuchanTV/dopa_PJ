import React, { useState } from 'react'
import styles from "../PhoneModuleCSS/PhoneDragonball.module.css";

import dragonballimg1 from "../../Images/ドラゴンボールページの写真/dragonballimg1.png" 
import dragonballimg2 from "../../Images/ドラゴンボールページの写真/dragonballimg2.png" 
import dragonballimg3 from "../../Images/ドラゴンボールページの写真/dragonballimg3.png" 
import dragonballimg4 from "../../Images/ドラゴンボールページの写真/dragonballimg4.png" 

import dragonball1 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール1のリスト写真/dragonballimg1.png"
import dragonball2 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール1のリスト写真/dragonballimg2.png"
import dragonball3 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール1のリスト写真/dragonballimg3.png"
import dragonball4 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール1のリスト写真/dragonballimg4.png"
import dragonball5 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール1のリスト写真/dragonballimg5.png"
import dragonball6 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール1のリスト写真/dragonballimg6.png"

import dragonball2_1 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール2のリスト写真/dragonballimg1.png"
import dragonball2_2 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール2のリスト写真/dragonballimg2.png"
import dragonball2_3 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール2のリスト写真/dragonballimg3.png"
import dragonball2_4 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール2のリスト写真/dragonballimg4.png"
import dragonball2_5 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール2のリスト写真/dragonballimg5.png"
import dragonball2_6 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール2のリスト写真/dragonballimg6.png"

import dragonball3_1 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール3のリスト写真/dragonballimg1.png"
import dragonball3_2 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール3のリスト写真/dragonballimg2.png"
import dragonball3_3 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール3のリスト写真/dragonballimg3.png"
import dragonball3_4 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール3のリスト写真/dragonballimg4.png"
import dragonball3_5 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール3のリスト写真/dragonballimg5.png"
import dragonball3_6 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール3のリスト写真/dragonballimg6.png"

import dragonball4_1 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール4のリスト写真/dragonballimg1.png"
import dragonball4_2 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール4のリスト写真/dragonballimg2.png"
import dragonball4_3 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール4のリスト写真/dragonballimg3.png"
import dragonball4_4 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール4のリスト写真/dragonballimg4.png"
import dragonball4_5 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール4のリスト写真/dragonballimg5.png"
import dragonball4_6 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール4のリスト写真/dragonballimg6.png"
import { PhoneMakingtab } from '../PhoneHeader/PhoneMakingtab.tsx';
import { PhoneBanner } from '../PhoneHeader/PhoneBanner.tsx';
import { PhonePagesChange } from '../PhoneHeader/PhonePagesChange.tsx';
import { PhoneFooter } from '../PhoneFooter/PhoneFooter.tsx';
import {PhoneGachadpdragonball} from "../PhoneHeader/Navigatedp/PhoneGachadpdragonball.tsx"
import { PhonePopup } from '../../Popup/PhonePopup.js';
import { PhonePopup10 } from '../../Popup/PhonePopup10.js';




export const PhoneDragonball = () => {
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
    <PhoneGachadpdragonball/>
    <PhonePagesChange/>
     <PhonePopup togglePopup={togglePopup} popupvisible={popupvisible}/>
     <PhonePopup10 togglePopup10={togglePopup10} popupvisible10={popupvisible10}/>
    <div className={styles.div}>
     <div className={styles.Div1}>
       <div className={styles.div1}>
        <img src={dragonballimg1} className={styles.dragonballimg1} /> 
         <div className={styles.list1}>
          <span className={styles.span1}>
          <img src={dragonball1} className={styles.img1}/>
          </span>
          <span className={styles.span1}>
          <img src={dragonball2} className={styles.img2}/>
          </span>
          <span className={styles.span1}>
          <img src={dragonball3} className={styles.img3}/>
          </span>
          <span className={styles.span1}>
          <img src={dragonball4} className={styles.img4}/>
          </span>
          <span className={styles.span1}>
          <img src={dragonball5} className={styles.img5}/>
          </span>
          <span className={styles.span1}>
          <img src={dragonball6} className={styles.img6}/>
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
        <img src={dragonballimg2} className={styles.dragonballimg2} /> 
         <div className={styles.list1}>
          <span className={styles.span2}>
          <img src={dragonball2_1} className={styles.img1}/>
          </span>
          <span className={styles.span2}>
          <img src={dragonball2_2} className={styles.img2}/>
          </span>
          <span className={styles.span2}>
          <img src={dragonball2_3} className={styles.img3}/>
          </span>
          <span className={styles.span2}>
          <img src={dragonball2_4} className={styles.img4}/>
          </span>
          <span className={styles.span2}>
          <img src={dragonball2_5} className={styles.img5}/>
          </span>
          <span className={styles.span2}>
          <img src={dragonball2_6} className={styles.img6}/>
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
        <img src={dragonballimg3} className={styles.dragonballimg3} /> 
         <div className={styles.list1}>
          <span className={styles.span3}>
          <img src={dragonball3_1} className={styles.img1}/>
          </span>
          <span className={styles.span3}>
          <img src={dragonball3_2} className={styles.img2}/>
          </span>
          <span className={styles.span3}>
          <img src={dragonball3_3} className={styles.img3}/>
          </span>
          <span className={styles.span3}>
          <img src={dragonball3_4} className={styles.img4}/>
          </span>
          <span className={styles.span3}>
          <img src={dragonball3_5} className={styles.img5}/>
          </span>
          <span className={styles.span3}>
          <img src={dragonball3_6} className={styles.img6}/>
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
        <img src={dragonballimg4} className={styles.dragonballimg4} /> 
         <div className={styles.list1}>
          <span className={styles.span4}>
          <img src={dragonball4_1} className={styles.img1}/>
          </span>
          <span className={styles.span4}>
          <img src={dragonball4_2} className={styles.img2}/>
          </span>
          <span className={styles.span4}>
          <img src={dragonball4_3} className={styles.img3}/>
          </span>
          <span className={styles.span4}>
          <img src={dragonball4_4} className={styles.img4}/>
          </span>
          <span className={styles.span4}>
          <img src={dragonball4_5} className={styles.img5}/>
          </span>
          <span className={styles.span4}>
          <img src={dragonball4_6} className={styles.img6}/>
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


