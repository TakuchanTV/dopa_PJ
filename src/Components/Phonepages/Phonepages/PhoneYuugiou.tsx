import React, { useState } from 'react'
import styles from "../PhoneModuleCSS/PhoneYuugiou.module.css";
import { ResMakingtab } from '../../Responsivepages/ResponsiveHeader/ResMakingtab.tsx'
import { ResBanner } from '../../Responsivepages/ResponsiveHeader/ResBanner.tsx'
import { ResPagesChange } from '../../Responsivepages/ResponsiveHeader/ResPagesChange.tsx'
import { ResFooter } from '../../Responsivepages/ResponsiveFooter/ResFooter.tsx'
import { ResGachadponepiece } from '../../Responsivepages/ResponsiveHeader/Navigatedp/ResGachadponepiece.tsx';

import yuugiouimg1 from "../../Images/遊戯王ページの写真/yuugiouimg1.png" 
import yuugiouimg2 from "../../Images/遊戯王ページの写真/yuugiouimg2.png" 
import yuugiouimg3 from "../../Images/遊戯王ページの写真/yuugiouimg3.png" 
import yuugiouimg4 from "../../Images/遊戯王ページの写真/yuugiouimg4.png" 

import yuugiou1 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg1.png"
import yuugiou2 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg2.png"
import yuugiou3 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg3.png"
import yuugiou4 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg4.png"
import yuugiou5 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg5.png"
import yuugiou6 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg6.png"

import yuugiou2_1 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王2のリスト写真/yuugiouimg1.png"
import yuugiou2_2 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王2のリスト写真/yuugiouimg2.png"
import yuugiou2_3 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王2のリスト写真/yuugiouimg3.png"
import yuugiou2_4 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王2のリスト写真/yuugiouimg4.png"
import yuugiou2_5 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王2のリスト写真/yuugiouimg5.png"
import yuugiou2_6 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王2のリスト写真/yuugiouimg6.png"

import yuugiou3_1 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王3のリスト写真/yuugiouimg1.png"
import yuugiou3_2 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王3のリスト写真/yuugiouimg2.png"
import yuugiou3_3 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王3のリスト写真/yuugiouimg3.png"
import yuugiou3_4 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王3のリスト写真/yuugiouimg4.png"
import yuugiou3_5 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王3のリスト写真/yuugiouimg5.png"
import yuugiou3_6 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王3のリスト写真/yuugiouimg6.png"

import yuugiou4_1 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王4のリスト写真/yuugiouimg1.png"
import yuugiou4_2 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王4のリスト写真/yuugiouimg2.png"
import yuugiou4_3 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王4のリスト写真/yuugiouimg3.png"
import yuugiou4_4 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王4のリスト写真/yuugiouimg4.png"
import yuugiou4_5 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王4のリスト写真/yuugiouimg5.png"
import yuugiou4_6 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王4のリスト写真/yuugiouimg6.png"
import { ResGachadpyuugiou } from '../../Responsivepages/ResponsiveHeader/Navigatedp/ResGachadpyuugiou.tsx';
import { PhonePopup } from '../../Popup/PhonePopup.js';
import { PhonePopup10 } from '../../Popup/PhonePopup10.js';






export const PhoneYuugiou = () => {
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
    <ResMakingtab/>
    <ResBanner />
    <ResGachadpyuugiou />
    <ResPagesChange/>
     <PhonePopup togglePopup={togglePopup} popupvisible={popupvisible}/>
     <PhonePopup10 togglePopup10={togglePopup10} popupvisible10={popupvisible10}/>
    <div className={styles.div}>
     <div className={styles.Div1}>
       <div className={styles.div1}>
        <img src={yuugiouimg1} className={styles.yuugiouimg1} /> 
         <div className={styles.list1}>
          <span className={styles.span1}>
          <img src={yuugiou1} className={styles.img1}/>
          </span>
          <span className={styles.span1}>
          <img src={yuugiou2} className={styles.img2}/>
          </span>
          <span className={styles.span1}>
          <img src={yuugiou3} className={styles.img3}/>
          </span>
          <span className={styles.span1}>
          <img src={yuugiou4} className={styles.img4}/>
          </span>
          <span className={styles.span1}>
          <img src={yuugiou5} className={styles.img5}/>
          </span>
          <span className={styles.span1}>
          <img src={yuugiou6} className={styles.img6}/>
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
        <img src={yuugiouimg2} className={styles.yuugiouimg2} /> 
         <div className={styles.list1}>
          <span className={styles.span2}>
          <img src={yuugiou2_1} className={styles.img1}/>
          </span>
          <span className={styles.span2}>
          <img src={yuugiou2_2} className={styles.img2}/>
          </span>
          <span className={styles.span2}>
          <img src={yuugiou2_3} className={styles.img3}/>
          </span>
          <span className={styles.span2}>
          <img src={yuugiou2_4} className={styles.img4}/>
          </span>
          <span className={styles.span2}>
          <img src={yuugiou2_5} className={styles.img5}/>
          </span>
          <span className={styles.span2}>
          <img src={yuugiou2_6} className={styles.img6}/>
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
        <img src={yuugiouimg3} className={styles.yuugiouimg3} /> 
         <div className={styles.list1}>
          <span className={styles.span3}>
          <img src={yuugiou3_1} className={styles.img1}/>
          </span>
          <span className={styles.span3}>
          <img src={yuugiou3_2} className={styles.img2}/>
          </span>
          <span className={styles.span3}>
          <img src={yuugiou3_3} className={styles.img3}/>
          </span>
          <span className={styles.span3}>
          <img src={yuugiou3_4} className={styles.img4}/>
          </span>
          <span className={styles.span3}>
          <img src={yuugiou3_5} className={styles.img5}/>
          </span>
          <span className={styles.span3}>
          <img src={yuugiou3_6} className={styles.img6}/>
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
        <img src={yuugiouimg4} className={styles.yuugiouimg4} /> 
         <div className={styles.list1}>
          <span className={styles.span4}>
          <img src={yuugiou4_1} className={styles.img1}/>
          </span>
          <span className={styles.span4}>
          <img src={yuugiou4_2} className={styles.img2}/>
          </span>
          <span className={styles.span4}>
          <img src={yuugiou4_3} className={styles.img3}/>
          </span>
          <span className={styles.span4}>
          <img src={yuugiou4_4} className={styles.img4}/>
          </span>
          <span className={styles.span4}>
          <img src={yuugiou4_5} className={styles.img5}/>
          </span>
          <span className={styles.span4}>
          <img src={yuugiou4_6} className={styles.img6}/>
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
 <ResFooter /> 
  </div>
  )
}

