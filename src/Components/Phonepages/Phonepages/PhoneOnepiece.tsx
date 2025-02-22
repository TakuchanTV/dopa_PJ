import React, { useState } from 'react'
import styles from "../PhoneModuleCSS/PhoneOnepiece.module.css";
import { ResMakingtab } from '../../Responsivepages/ResponsiveHeader/ResMakingtab.tsx'
import { ResBanner } from '../../Responsivepages/ResponsiveHeader/ResBanner.tsx'
import { ResPagesChange } from '../../Responsivepages/ResponsiveHeader/ResPagesChange.tsx'
import { ResFooter } from '../../Responsivepages/ResponsiveFooter/ResFooter.tsx'
import { ResGachadponepiece } from '../../Responsivepages/ResponsiveHeader/Navigatedp/ResGachadponepiece.tsx';

import onepieceimg1 from "../../Images/ワンピースページの写真/onepieceimg1.png" 
import onepieceimg2 from "../../Images/ワンピースページの写真/onepieceimg2.png" 
import onepieceimg3 from "../../Images/ワンピースページの写真/onepieceimg3.png" 
import onepieceimg4 from "../../Images/ワンピースページの写真/onepieceimg4.png"

import onepiece1 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg1.png"
import onepiece2 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg2.png"
import onepiece3 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg3.png"
import onepiece4 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg4.png"
import onepiece5 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg5.png"
import onepiece6 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg6.png"

import onepiece2_1 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース2のリスト写真/onepieceimg1.png"
import onepiece2_2 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース2のリスト写真/onepieceimg2.png"
import onepiece2_3 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース2のリスト写真/onepieceimg3.png"
import onepiece2_4 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース2のリスト写真/onepieceimg4.png"
import onepiece2_5 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース2のリスト写真/onepieceimg5.png"
import onepiece2_6 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース2のリスト写真/onepieceimg6.png"

import onepiece3_1 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース3のリスト写真/onepieceimg1.png"
import onepiece3_2 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース3のリスト写真/onepieceimg2.png"
import onepiece3_3 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース3のリスト写真/onepieceimg3.png"
import onepiece3_4 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース3のリスト写真/onepieceimg4.png"
import onepiece3_5 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース3のリスト写真/onepieceimg5.png"
import onepiece3_6 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース3のリスト写真/onepieceimg6.png"

import onepiece4_1 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース4のリスト写真/onepieceimg1.png"
import onepiece4_2 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース4のリスト写真/onepieceimg2.png"
import onepiece4_3 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース4のリスト写真/onepieceimg3.png"
import onepiece4_4 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース4のリスト写真/onepieceimg4.png"
import onepiece4_5 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース4のリスト写真/onepieceimg5.png"
import onepiece4_6 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース4のリスト写真/onepieceimg6.png"
import { PhoneMakingtab } from '../PhoneHeader/PhoneMakingtab.tsx';
import { PhoneBanner } from '../PhoneHeader/PhoneBanner.tsx';
import { PhoneGachadponepiece } from '../PhoneHeader/Navigatedp/PhoneGachadponepiece.tsx';
import { PhonePagesChange } from '../PhoneHeader/PhonePagesChange.tsx';
import { PhoneFooter } from '../PhoneFooter/PhoneFooter.tsx';
import { PhonePopup } from '../../Popup/PhonePopup.js';
import { PhonePopup10 } from '../../Popup/PhonePopup10.js';



export const PhoneOnepiece = () => {
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
    <PhoneGachadponepiece />
    <PhonePagesChange/>
     <PhonePopup togglePopup={togglePopup} popupvisible={popupvisible}/>
     <PhonePopup10 togglePopup10={togglePopup10} popupvisible10={popupvisible10}/>
    <div className={styles.div}>
     <div className={styles.Div1}>
       <div className={styles.div1}>
        <img src={onepieceimg1} className={styles.onepieceimg1} /> 
         <div className={styles.list1}>
          <span className={styles.span1}>
          <img src={onepiece1} className={styles.img1}/>
          </span>
          <span className={styles.span1}>
          <img src={onepiece2} className={styles.img2}/>
          </span>
          <span className={styles.span1}>
          <img src={onepiece3} className={styles.img3}/>
          </span>
          <span className={styles.span1}>
          <img src={onepiece4} className={styles.img4}/>
          </span>
          <span className={styles.span1}>
          <img src={onepiece5} className={styles.img5}/>
          </span>
          <span className={styles.span1}>
          <img src={onepiece6} className={styles.img6}/>
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
        <img src={onepieceimg2} className={styles.onepieceimg2} /> 
         <div className={styles.list1}>
          <span className={styles.span2}>
          <img src={onepiece2_1} className={styles.img1}/>
          </span>
          <span className={styles.span2}>
          <img src={onepiece2_2} className={styles.img2}/>
          </span>
          <span className={styles.span2}>
          <img src={onepiece2_3} className={styles.img3}/>
          </span>
          <span className={styles.span2}>
          <img src={onepiece2_4} className={styles.img4}/>
          </span>
          <span className={styles.span2}>
          <img src={onepiece2_5} className={styles.img5}/>
          </span>
          <span className={styles.span2}>
          <img src={onepiece2_6} className={styles.img6}/>
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
        <img src={onepieceimg3} className={styles.onepieceimg3} /> 
         <div className={styles.list1}>
          <span className={styles.span3}>
          <img src={onepiece3_1} className={styles.img1}/>
          </span>
          <span className={styles.span3}>
          <img src={onepiece3_2} className={styles.img2}/>
          </span>
          <span className={styles.span3}>
          <img src={onepiece3_3} className={styles.img3}/>
          </span>
          <span className={styles.span3}>
          <img src={onepiece3_4} className={styles.img4}/>
          </span>
          <span className={styles.span3}>
          <img src={onepiece3_5} className={styles.img5}/>
          </span>
          <span className={styles.span3}>
          <img src={onepiece3_6} className={styles.img6}/>
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
        <img src={onepieceimg4} className={styles.onepieceimg4} /> 
         <div className={styles.list1}>
          <span className={styles.span4}>
          <img src={onepiece4_1} className={styles.img1}/>
          </span>
          <span className={styles.span4}>
          <img src={onepiece4_2} className={styles.img2}/>
          </span>
          <span className={styles.span4}>
          <img src={onepiece4_3} className={styles.img3}/>
          </span>
          <span className={styles.span4}>
          <img src={onepiece4_4} className={styles.img4}/>
          </span>
          <span className={styles.span4}>
          <img src={onepiece4_5} className={styles.img5}/>
          </span>
          <span className={styles.span4}>
          <img src={onepiece4_6} className={styles.img6}/>
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

