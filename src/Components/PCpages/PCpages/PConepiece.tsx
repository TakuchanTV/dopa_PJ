 import React, { useEffect, useState } from "react"
import styles from "../../ModuleCSS/onepiece.module.css"

import onepieceimg1    from "../../Images/ワンピースページの写真/onepieceimg1.png"

import onepiece1 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg1.png"
import onepiece2 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg2.png"
import onepiece3 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg3.png"
import onepiece4 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg4.png"
import onepiece5 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg5.png"
import onepiece6 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg6.png"

import { ResMakingtab } from "../../Responsivepages/ResponsiveHeader/ResMakingtab.tsx";
import { ResBanner } from "../../Responsivepages/ResponsiveHeader/ResBanner.tsx";
import { ResGachadponepiece } from "../../Responsivepages/ResponsiveHeader/Navigatedp/ResGachadponepiece.tsx";
import { ResPagesChange } from "../../Responsivepages/ResponsiveHeader/ResPagesChange.tsx";
import { ResFooter } from "../../Responsivepages/ResponsiveFooter/ResFooter.tsx"
export const PConePiece = () => {
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
        <img src={onepieceimg1} className={styles.img} /> 
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
         <button className={styles.button1_3} onClick={GachaConfirm100}>
          <span className={styles.gacha}></span>
          <span>100連ガチャ</span>
         </button>
       </div>
       <div className={styles.div1}>
        <img src={onepieceimg1} className={styles.img} /> 
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
         <button className={styles.button1_3} onClick={GachaConfirm100}>
          <span className={styles.gacha}></span>
          <span>100連ガチャ</span>
         </button>
       </div>
      
     </div>
     <div className={styles.Div2}>
     <div className={styles.div1}>
        <img src={onepieceimg1} className={styles.img} /> 
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
         <button className={styles.button1_3} onClick={GachaConfirm100}>
          <span className={styles.gacha}></span>
          <span>100連ガチャ</span>
         </button>
       </div>
       <div className={styles.div1}>
        <img src={onepieceimg1} className={styles.img} /> 
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