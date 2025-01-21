import React from 'react'
import styles from "../PhoneModuleCSS/PhoneDragonball.module.css";
import { ResMakingtab } from '../../Responsivepages/ResponsiveHeader/ResMakingtab.tsx'
import { ResBanner } from '../../Responsivepages/ResponsiveHeader/ResBanner.tsx'
import { ResPagesChange } from '../../Responsivepages/ResponsiveHeader/ResPagesChange.tsx'
import { ResFooter } from '../../Responsivepages/ResponsiveFooter/ResFooter.tsx'
import { ResGachadponepiece } from '../../Responsivepages/ResponsiveHeader/Navigatedp/ResGachadponepiece.tsx';

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




export const PhoneDragonball = () => {
    const GachaConfirm = ()  => {
        if (window.confirm("使用ポイント確認 \n 500PT消費して1枚引く")){
         window.alert("ありがとうございます")
        }else{
        }
      }
      const GachaConfirm10 = ()  => {
        if (window.confirm("使用ポイント確認 \n 5000PT消費して1枚引く")){
         window.alert("ありがとうございます")
        }else{
        }
      }
      const GachaConfirm100 = ()  => {
        if (window.confirm("使用ポイント確認 \n 50000PT消費して1枚引く")){
         window.alert("ありがとうございます")
        }else{
        }
      }
  return (
    <div className={styles.fixwidth}>
    <ResMakingtab/>
    <ResBanner />
    <ResGachadponepiece />
    <ResPagesChange/>
    <div className={styles.div}>
     <div className={styles.Div1}>
       <div className={styles.div1}>
        <img src={dragonballimg1} className={styles.onepieceimg1} /> 
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
         <button className={styles.button1_3} onClick={GachaConfirm100}>
          <span className={styles.gacha}></span>
          <span>100連ガチャ</span>
         </button>
       </div>

       <div className={styles.div2}>
        <img src={dragonballimg2} className={styles.onepieceimg2} /> 
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
         <button className={styles.button1_3} onClick={GachaConfirm100}>
          <span className={styles.gacha}></span>
          <span>100連ガチャ</span>
         </button>
       </div>
     </div>

     <div className={styles.Div2}>
     <div className={styles.div3}>
        <img src={dragonballimg3} className={styles.onepieceimg3} /> 
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
         <button className={styles.button1_3} onClick={GachaConfirm100}>
          <span className={styles.gacha}></span>
          <span>100連ガチャ</span>
         </button>
       </div>
       <div className={styles.div4}>
        <img src={dragonballimg4} className={styles.onepieceimg4} /> 
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
         <button className={styles.button1_3} onClick={GachaConfirm100}>
          <span className={styles.gacha}></span>
          <span>100連ガチャ</span>
         </button>
       </div>
     </div>
   </div>
 <ResFooter /> 
  </div>
  )
}

