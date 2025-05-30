import React, { useState } from 'react'
import styles from "../PhoneModuleCSS/PhoneUnionarena.module.css";


import { PhoneMakingtab } from '../PhoneHeader/PhoneMakingtab.tsx';
import { PhoneBanner } from '../PhoneHeader/PhoneBanner.tsx';
import { PhonePagesChange } from '../PhoneHeader/PhonePagesChange.tsx';
import { PhoneFooter } from '../PhoneFooter/PhoneFooter.tsx';
import {PhoneGachadpdragonball} from "../PhoneHeader/Navigatedp/PhoneGachadpdragonball.tsx"

import unionarenaimg1 from "../../Images/ユニオンアリーナページの写真/unionarenaimg1.png"
import unionarenaimg2 from "../../Images/ユニオンアリーナページの写真/unionarenaimg2.png"

import unionarena1 from "../../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ1のリスト写真/unionarenaimg1.png"
import unionarena2 from "../../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ1のリスト写真/unionarenaimg2.png"
import unionarena3 from "../../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ1のリスト写真/unionarenaimg3.png"
import unionarena4 from "../../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ1のリスト写真/unionarenaimg4.png"
import unionarena5 from "../../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ1のリスト写真/unionarenaimg5.png"
import unionarena6 from "../../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ1のリスト写真/unionarenaimg6.png"

import unionarena2_1 from "../../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ2のリスト写真/unionarenaimg1.png"
import unionarena2_2 from "../../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ2のリスト写真/unionarenaimg2.png"
import unionarena2_3 from "../../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ2のリスト写真/unionarenaimg3.png"
import unionarena2_4 from "../../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ2のリスト写真/unionarenaimg4.png"
import unionarena2_5 from "../../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ2のリスト写真/unionarenaimg5.png"
import unionarena2_6 from "../../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ2のリスト写真/unionarenaimg6.png"
import { PhoneGachadpunionarena } from '../PhoneHeader/Navigatedp/PhoneGachadpunionarena.tsx';
import { PhonePopup } from '../../Popup/PhonePopup.js';
import { PhonePopup10 } from '../../Popup/PhonePopup10.js';






export const PhoneUnionarena = () => {
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
    <PhoneGachadpunionarena/>
    <PhonePagesChange/>
    <PhonePopup togglePopup={togglePopup} popupvisible={popupvisible}/>
    <PhonePopup10 togglePopup10={togglePopup10} popupvisible10={popupvisible10}/>
    <div className={styles.div}>
     <div className={styles.Div1}>
       <div className={styles.div1}>
        <img src={unionarenaimg1} className={styles.unionarenaimg1} /> 
         <div className={styles.list1}>
          <span className={styles.span1}>
          <img src={unionarena1} className={styles.img1}/>
          </span>
          <span className={styles.span1}>
          <img src={unionarena2} className={styles.img2}/>
          </span>
          <span className={styles.span1}>
          <img src={unionarena3} className={styles.img3}/>
          </span>
          <span className={styles.span1}>
          <img src={unionarena4} className={styles.img4}/>
          </span>
          <span className={styles.span1}>
          <img src={unionarena5} className={styles.img5}/>
          </span>
          <span className={styles.span1}>
          <img src={unionarena6} className={styles.img6}/>
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
        <img src={unionarenaimg2} className={styles.unionarenaimg2} /> 
         <div className={styles.list1}>
          <span className={styles.span2}>
          <img src={unionarena2_1} className={styles.img1}/>
          </span>
          <span className={styles.span2}>
          <img src={unionarena2_2} className={styles.img2}/>
          </span>
          <span className={styles.span2}>
          <img src={unionarena2_3} className={styles.img3}/>
          </span>
          <span className={styles.span2}>
          <img src={unionarena2_4} className={styles.img4}/>
          </span>
          <span className={styles.span2}>
          <img src={unionarena2_5} className={styles.img5}/>
          </span>
          <span className={styles.span2}>
          <img src={unionarena2_6} className={styles.img6}/>
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
        <img src={unionarenaimg1} className={styles.unionarenaimg3} /> 
         <div className={styles.list1}>
          <span className={styles.span3}>
          <img src={unionarena1} className={styles.img1}/>
          </span>
          <span className={styles.span3}>
          <img src={unionarena2} className={styles.img2}/>
          </span>
          <span className={styles.span3}>
          <img src={unionarena3} className={styles.img3}/>
          </span>
          <span className={styles.span3}>
          <img src={unionarena4} className={styles.img4}/>
          </span>
          <span className={styles.span3}>
          <img src={unionarena5} className={styles.img5}/>
          </span>
          <span className={styles.span3}>
          <img src={unionarena6} className={styles.img6}/>
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
        <img src={unionarenaimg2} className={styles.unionarenaimg4} /> 
         <div className={styles.list1}>
          <span className={styles.span4}>
          <img src={unionarena2_1} className={styles.img1}/>
          </span>
          <span className={styles.span4}>
          <img src={unionarena2_2} className={styles.img2}/>
          </span>
          <span className={styles.span4}>
          <img src={unionarena2_3} className={styles.img3}/>
          </span>
          <span className={styles.span4}>
          <img src={unionarena2_4} className={styles.img4}/>
          </span>
          <span className={styles.span4}>
          <img src={unionarena2_5} className={styles.img5}/>
          </span>
          <span className={styles.span4}>
          <img src={unionarena2_6} className={styles.img6}/>
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

