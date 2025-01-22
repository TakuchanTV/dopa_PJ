import React from 'react'
import { PhoneMakingtab } from '../PhoneHeader/PhoneMakingtab.tsx'
import { PhoneBanner } from '../PhoneHeader/PhoneBanner.tsx'
import { PhonePagesChange } from '../PhoneHeader/PhonePagesChange.tsx'
import { PhoneFooter } from '../PhoneFooter/PhoneFooter.tsx'
import styles from "../PhoneModuleCSS/PhoneVice.module.css"

import Viceimg1 from "../../Images/ヴァイスページの写真/vicepageimg1.png"
import Viceimg2 from "../../Images/ヴァイスページの写真/vicepageimg2.png"
import Viceimg3 from "../../Images/ヴァイスページの写真/vicepageimg3.png"
import Viceimg4 from "../../Images/ヴァイスページの写真/vicepageimg4.png"

import Vice1 from "../../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg1.png"
import Vice2 from "../../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg2.png"
import Vice3 from "../../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg3.png"
import Vice4 from "../../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg4.png"
import Vice5 from "../../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg5.png"
import Vice6 from "../../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg6.png"

import Vice2_1 from "../../Images/ヴァイスページの写真/ヴァイス2のリスト写真/vicepageimg1.png"
import Vice2_2 from "../../Images/ヴァイスページの写真/ヴァイス2のリスト写真/vicepageimg2.png"
import Vice2_3 from "../../Images/ヴァイスページの写真/ヴァイス2のリスト写真/vicepageimg3.png"
import Vice2_4 from "../../Images/ヴァイスページの写真/ヴァイス2のリスト写真/vicepageimg4.png"
import Vice2_5 from "../../Images/ヴァイスページの写真/ヴァイス2のリスト写真/vicepageimg5.png"
import Vice2_6 from "../../Images/ヴァイスページの写真/ヴァイス2のリスト写真/vicepageimg6.png"

import Vice3_1 from "../../Images/ヴァイスページの写真/ヴァイス3のリスト写真/vicepageimg1.png"
import Vice3_2 from "../../Images/ヴァイスページの写真/ヴァイス3のリスト写真/vicepageimg2.png"
import Vice3_3 from "../../Images/ヴァイスページの写真/ヴァイス3のリスト写真/vicepageimg3.png"
import Vice3_4 from "../../Images/ヴァイスページの写真/ヴァイス3のリスト写真/vicepageimg4.png"
import Vice3_5 from "../../Images/ヴァイスページの写真/ヴァイス3のリスト写真/vicepageimg5.png"
import Vice3_6 from "../../Images/ヴァイスページの写真/ヴァイス3のリスト写真/vicepageimg6.png"

import Vice4_1 from "../../Images/ヴァイスページの写真/ヴァイス4のリスト写真/vicepageimg1.png"
import Vice4_2 from "../../Images/ヴァイスページの写真/ヴァイス4のリスト写真/vicepageimg2.png"
import Vice4_3 from "../../Images/ヴァイスページの写真/ヴァイス4のリスト写真/vicepageimg3.png"
import Vice4_4 from "../../Images/ヴァイスページの写真/ヴァイス4のリスト写真/vicepageimg4.png"
import Vice4_5 from "../../Images/ヴァイスページの写真/ヴァイス4のリスト写真/vicepageimg5.png"
import Vice4_6 from "../../Images/ヴァイスページの写真/ヴァイス4のリスト写真/vicepageimg6.png"
import { PhoneGachadpvice } from '../PhoneHeader/Navigatedp/PhoneGachadpvice.tsx'


export const PhoneVice = () => {
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
    <PhoneMakingtab/>
    <PhoneBanner />
    <PhoneGachadpvice />
    <PhonePagesChange/>
    <div className={styles.div}>
     <div className={styles.Div1}>
       <div className={styles.div1}>
        <img src={Viceimg1} className={styles.pokemonimg1} /> 
         <div className={styles.list1}>
          <span className={styles.span1}>
          <img src={Vice1} className={styles.img1}/>
          </span>
          <span className={styles.span1}>
          <img src={Vice2} className={styles.img2}/>
          </span>
          <span className={styles.span1}>
          <img src={Vice3} className={styles.img3}/>
          </span>
          <span className={styles.span1}>
          <img src={Vice4} className={styles.img4}/>
          </span>
          <span className={styles.span1}>
          <img src={Vice5} className={styles.img5}/>
          </span>
          <span className={styles.span1}>
          <img src={Vice6} className={styles.img6}/>
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
        <img src={Viceimg2} className={styles.pokemonimg2} /> 
         <div className={styles.list1}>
          <span className={styles.span2}>
          <img src={Vice2_1} className={styles.img1}/>
          </span>
          <span className={styles.span2}>
          <img src={Vice2_2} className={styles.img2}/>
          </span>
          <span className={styles.span2}>
          <img src={Vice2_3} className={styles.img3}/>
          </span>
          <span className={styles.span2}>
          <img src={Vice2_4} className={styles.img4}/>
          </span>
          <span className={styles.span2}>
          <img src={Vice2_5} className={styles.img5}/>
          </span>
          <span className={styles.span2}>
          <img src={Vice2_6} className={styles.img6}/>
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
        <img src={Viceimg3} className={styles.pokemonimg3} /> 
         <div className={styles.list1}>
          <span className={styles.span3}>
          <img src={Vice3_1} className={styles.img1}/>
          </span>
          <span className={styles.span3}>
          <img src={Vice3_2} className={styles.img2}/>
          </span>
          <span className={styles.span3}>
          <img src={Vice3_3} className={styles.img3}/>
          </span>
          <span className={styles.span3}>
          <img src={Vice3_4} className={styles.img4}/>
          </span>
          <span className={styles.span3}>
          <img src={Vice3_5} className={styles.img5}/>
          </span>
          <span className={styles.span3}>
          <img src={Vice3_6} className={styles.img6}/>
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
        <img src={Viceimg4} className={styles.pokemonimg4} /> 
         <div className={styles.list1}>
          <span className={styles.span4}>
          <img src={Vice4_1} className={styles.img1}/>
          </span>
          <span className={styles.span4}>
          <img src={Vice4_2} className={styles.img2}/>
          </span>
          <span className={styles.span4}>
          <img src={Vice4_3} className={styles.img3}/>
          </span>
          <span className={styles.span4}>
          <img src={Vice4_4} className={styles.img4}/>
          </span>
          <span className={styles.span4}>
          <img src={Vice4_5} className={styles.img5}/>
          </span>
          <span className={styles.span4}>
          <img src={Vice4_6} className={styles.img6}/>
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
 <PhoneFooter /> 
  </div>
  )
}
